import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** A list of items with check marks. */
export function CheckList({
  items,
  className,
  columns = 1,
}: {
  items: string[];
  className?: string;
  columns?: 1 | 2;
}) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-foreground">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
