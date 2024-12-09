// MobileNavItem.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MobileNavItemProps {
  label: string; // string type for label
  href: string; // string type for href
  className?: string; // optional string for className
}

export function MobileNavItem({ label, href, className }: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {label}
    </Link>
  );
}
