import Image from "next/image";
import { cn } from "@/lib/utils";
import { initials } from "@/lib/images";

/**
 * Circular avatar with a glass ring. Renders the photo if `src` is set, otherwise
 * a branded initials placeholder (so no wrong-ethnicity stock faces are shown).
 */
export function Avatar({
  src,
  name,
  size = 44,
  className,
}: {
  src?: string;
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-full ring-2 ring-white/80 shadow-[0_4px_14px_-4px_rgba(8,29,51,0.4)]",
        !src && "bg-gradient-to-br from-primary to-[#1684c9] font-semibold text-white",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-label={name}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      ) : (
        <span aria-hidden>{initials(name)}</span>
      )}
    </span>
  );
}
