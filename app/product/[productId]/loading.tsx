import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full h-full">
      <div className="lg:mx-12 md:mx-8 mx-4">
        <div className="mt-8 flex md:flex-row flex-col md:space-x-8">
          <Skeleton className="w-full md:basis-1/2 lg:h-[80vh] md:h-[40vh] h-[50vh]" />
          <div className="lg:my-24 md:my-8 my-4 md:flex md:basis-1/2 hidden flex-col">
            <Skeleton className="w-3/4 lg:h-14 h-12" />
            <Skeleton className="w-4/5 lg:h-12 h-10 mt-8" />
            <Skeleton className="w-1/2 lg:h-10 h-9 mt-12" />
            <Skeleton className="w-1/2 lg:h-10 h-9 mt-3" />
            <Skeleton className="w-1/2 lg:h-14 h-12 mt-12" />
          </div>
          <div className="my-4 flex  md:hidden flex-col">
            <Skeleton className="w-5/6  h-12" />
            <Skeleton className="w-5/6  h-10 mt-4" />
            <Skeleton className="w-3/4  h-9 mt-6" />
            <Skeleton className="w-3/4  h-9 mt-3" />
            <Skeleton className="w-full h-12 mt-6" />
          </div>
        </div>
        <div className="mt-12">
          <Skeleton className="lg:w-1/2 w-full lg:h-[7vh] h-[5vh]" />
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {Array(4)
              .fill(0)
              .map((item) => (
                <div className="flex flex-col" key={item}>
                  <Skeleton className="lg:h-[45vh] h-[40vh]" />
                  <Skeleton className="mt-4 w-full h-12" />
                  <div className="flex mt-4 justify-between items-center space-x-4">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-10">
          <Skeleton className="lg:w-1/2 w-full lg:h-[7vh] h-[5vh]" />
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {Array(4)
              .fill(0)
              .map((label) => (
                <div className="flex flex-col" key={label}>
                  <Skeleton className="lg:h-[45vh] h-[40vh]" />
                  <Skeleton className="mt-4 w-full h-12" />
                  <div className="flex mt-4 justify-between items-center space-x-4">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-10">
          <Skeleton className="lg:w-1/2 w-full lg:h-[7vh] h-[5vh]" />
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {Array(4)
              .fill(0)
              .map((key) => (
                <div className="flex flex-col" key={key}>
                  <Skeleton className="lg:h-[45vh] h-[40vh]" />
                  <Skeleton className="mt-4 w-full h-12" />
                  <div className="flex mt-4 justify-between items-center space-x-4">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-8 flex md:flex-row flex-col">
          <div className="lg:my-24 md:my-8 my-4 md:flex md:basis-1/2 hidden flex-col">
            <Skeleton className="w-3/4 lg:h-14 h-12" />
            <Skeleton className="w-4/5 lg:h-12 h-10 mt-8" />
            <Skeleton className="w-1/2 lg:h-10 h-9 mt-12" />
            <Skeleton className="w-1/2 lg:h-10 h-9 mt-3" />
            <Skeleton className="w-1/2 lg:h-14 h-12 mt-12" />
          </div>

          <Skeleton className="w-full md:basis-1/2 lg:h-[80vh] md:h-[40vh] h-[50vh]" />
          <div className="my-4 flex  md:hidden flex-col">
            <Skeleton className="w-5/6  h-12" />
            <Skeleton className="w-5/6  h-10 mt-4" />
            <Skeleton className="w-3/4  h-9 mt-6" />
            <Skeleton className="w-3/4  h-9 mt-3" />
            <Skeleton className="w-full h-12 mt-6" />
          </div>
        </div>

        <div className="mt-12">
          <Skeleton className="lg:w-1/2 w-full lg:h-[7vh] h-[5vh]" />
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {Array(4)
              .fill(0)
              .map((element) => (
                <div className="flex flex-col" key={element}>
                  <Skeleton className="lg:h-[45vh] h-[40vh]" />
                  <Skeleton className="mt-4 w-full h-12" />
                  <div className="flex mt-4 justify-between items-center space-x-4">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-10 mb-8">
          <Skeleton className="lg:w-1/2 w-full lg:h-[7vh] h-[5vh]" />
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {Array(4)
              .fill(0)
              .map((product) => (
                <div className="flex flex-col" key={product}>
                  <Skeleton className="lg:h-[45vh] h-[40vh]" />
                  <Skeleton className="mt-4 w-full h-12" />
                  <div className="flex mt-4 justify-between items-center space-x-4">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-8 w-1/2" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
