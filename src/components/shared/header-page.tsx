import { ArrowLeft, LucideIcon } from "lucide-react";
import Link from "next/link";

interface HeaderPageProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  backwardRoute?: string;
}

export default function HeaderPage({
  title,
  description,
  icon: Icon,
  backwardRoute,
}: HeaderPageProps) {
  return (
    <div className="flex flex-col gap-4">
      {backwardRoute && (
        <Link
          href={backwardRoute}
          className="flex items-center gap-2 text-default-600 hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
        >
          <ArrowLeft className="size-5" />
          Volver
        </Link>
      )}
      <div className="flex items-center gap-2 sm:gap-4">
        {Icon && (
          <Icon className="size-10 sm:size-12 md:size-14 text-default-500" />
        )}
        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-default-800 text-start">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
