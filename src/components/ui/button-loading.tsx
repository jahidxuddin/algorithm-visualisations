import { LoaderIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ButtonLoading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button disabled className={cn(className)}>
      <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  );
}
