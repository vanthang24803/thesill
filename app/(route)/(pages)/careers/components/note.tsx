"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Note = () => {
  const router = useRouter();
  return (
    <div className="py-4 lg:py-8 flex lg:flex-row flex-col items-center  lg:space-x-14 lg:space-y-0 space-y-4">
      <img
        src="https://cdn.sanity.io/images/y346iw48/production/6531403c6db52559eb48ef5fb38c6bc359eb9e2f-767x569.jpg?w=1000&auto=format"
        alt="img"
        className="object-fill lg:w-1/2"
      />

      <div className="flex items-start flex-col space-y-12">
        <div className="flex flex-col space-y-3">
          <span className="text-3xl md:text-4xl lg:text-5xl font-medium">
            A note from our founder.
          </span>
          <span>
            One of the greatest honors of my career is working alongside and
            serving our talented team. I learn every day from this smart,
            thoughtful, and energized group — and I look forward to welcoming
            you to contribute and to support our growing company, too.
          </span>

          <span className="font-medium">Eliza Blank, CEO</span>
        </div>
        <Button className="w-1/2" onClick={() => router.push("/about-us")}>Read Our Story</Button>
      </div>
    </div>
  );
};

export default Note;
