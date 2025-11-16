import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/password";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (user) {
      return NextResponse.json(
        { message: "User Already exists" },
        { status: 401 }
      );
    }

    data.password = await hashPassword(data.password);

    await prisma.user.create({ data });

    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
