import { Color } from "@/types";
import qs from "query-string";
import { useCallback, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProductProps {
  data: Color[];
  name: string;
  valueKey: string;
  onFilter: (id: string | null) => void;
}

const FilterColor: React.FC<FilterProductProps> = ({
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
    onFilter(id);
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
        <div className="grid grid-cols-3 gap-4">
          {data.map((color) => (
            <div
              key={color.id}
              className="flex flex-col items-center justify-center space-y-2 mt-6"
            >
              <div
                className={`w-10 h-10 border flex items-center rounded-full justify-center ${
                  selectedValue === color.id && "border-neutral-600"
                }`}
                onClick={() => onClick(color.id)}
              >
                <div
                  style={{ backgroundColor: color.value }}
                  className="h-8 w-8 rounded-full flex items-center justify-center border"
                ></div>
              </div>
              {color.name != "null" ? (
                <span className="text-xs">{color.name}</span>
              ) : (
                <span className="text-xs">Orther</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterColor;
