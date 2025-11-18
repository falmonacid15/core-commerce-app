import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("perPage") || "10";
    const where = searchParams.get("where");

    const queryWhere = where ? JSON.parse(where) : {};
    const prismaWhere: Prisma.UserWhereUniqueInput = queryWhere;

    const pageNumber = parseInt(page);
    const pageSize = parseInt(perPage);

    const skip = (pageNumber - 1) * pageSize;

    const [data, totalCount] = await prisma.$transaction([
      prisma.user.findMany({
        where: prismaWhere,
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        include: {},
      }),
      prisma.user.count({ where: prismaWhere }),
    ]);

    return NextResponse.json(
      {
        data,
        pagination: { totalCount, page: pageNumber, perPage: pageSize, skip },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
