"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const page = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Most Popular" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Most Popular</SelectItem>
          <SelectItem value="high">$ Low To High</SelectItem>
          <SelectItem value="low">$ High To Low</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default page;
