import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full h-full">
      <div className="flex md:flex-row flex-col  items-center  justify-center py-8 md:space-x-6 md:space-y-0 space-y-6">
        <Skeleton className="h-32 w-32 rounded-full" />
        <div className="space-y-4 flex flex-col items-center justify-center md:block">
          <Skeleton className="h-8 md:w-[250px] w-[200px]" />
          <Skeleton className="h-8 md:w-[200px] w-[250px]" />
        </div>
      </div>
    </div>
  );
}
