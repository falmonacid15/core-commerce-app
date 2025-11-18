import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/formatters";

interface ImageContentProps {
  name: string;
  image?: string;
}

export default function ImageContent({ name, image }: ImageContentProps) {
  return (
    <Avatar className="w-9 h-9 rounded-md">
      <AvatarFallback className="rounded-md">
        {getNameInitials(name)}
      </AvatarFallback>
      <AvatarImage src={image} alt={name} />
    </Avatar>
  );
}
