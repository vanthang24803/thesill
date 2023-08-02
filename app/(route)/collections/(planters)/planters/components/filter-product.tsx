"use client";
import qs from "query-string";
import { Checkbox } from "@/components/ui/checkbox";
import { Benefit, Size } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface FilterProductProps {
  data: (Size | Benefit)[];
  name: string;
  valueKey: string;
  onFilter: (id: string | null) => void;
}

const FilterProduct: React.FC<FilterProductProps> = ({
  data,
  name,
  valueKey,
  onFilter,
}) => {
  const [open, setOpen] = useState(true);
  const onHanleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams?.get(valueKey);

  const onClick = (id: string) => {
    if (selectedValue === id) {
      onFilter(null);
    } else {
      onFilter(id);
    }
    const current = qs.parse(searchParams?.toString() || "");
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="pb-4 border-b mr-8 lg:mt-0 mt-6">
      <div
        className={`flex items-center text-base justify-between transition ease-linear ${
          open && "text-[#009a7b] font-medium"
        }`}
        onClick={onHanleOpen}
      >
        <span>{name}</span>
        {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </div>

      {open && (
        <div className="flex flex-col space-y-3">
          {data.map((filter) => (
            <div className="flex items-end space-x-2 mt-4" key={filter.id}>
              <Checkbox
                id={filter.id}
                onClick={() => onClick(filter.id)}
                checked={selectedValue === filter.id}
              />

              {filter.name != "null" ? (
                <label
                  htmlFor={filter.id}
                  className={`text-sm ${
                    selectedValue === filter.id ? "font-medium" : ""
                  }`}
                >
                  {filter.name}
                </label>
              ) : (
                <label
                  htmlFor={filter.id}
                  className={`text-sm ${
                    selectedValue === filter.id ? "font-medium" : ""
                  }`}
                >
                  Orther
                </label>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterProduct;
