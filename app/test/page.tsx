"use client";

import qs from "query-string";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";


const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams?.get("name");

  const [value, setValue] = useState(name || "");


  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

 useEffect(() => {
   const query = {
     name: value,
   };

   const url = qs.stringifyUrl(
     {
       url: window.location.href,
       query,
     },
     { skipNull: true, skipEmptyString: true }
   );

   router.push(url);
 }, [value, router]);


  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};


export default SearchInput;