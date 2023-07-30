"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import Button from "@/components/ui/button";
import { Product } from "@/types";


interface ProductFind {
  items: Product[];
}

const ProductFind: React.FC<ProductFind> = ({ items }) => {
  const ProductCard = dynamic(() => import("./card"));
  const [sortedProducts, setSortedProducts] = useState(items);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Most Popular");
  const [currentSort, setCurrentSort] = useState("default");

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Sort to PC
  const handleChange = (value: string) => {
    if (value === "default") {
      setSortedProducts([...items]);
    } else {
      const tempArray = JSON.parse(JSON.stringify(items)) as Product[];
      if (value === "high") {
        tempArray.sort(
          (product1, product2) =>
            Number(product1.price) - Number(product2.price)
        );
      } else {
        tempArray.sort(
          (product1, product2) =>
            Number(product2.price) - Number(product1.price)
        );
      }
      setSortedProducts(tempArray);
    }
  };

  // Sort to Mobile
  const handleSort = (value: string) => {
    handleChange(value);
    setCurrentSort(value);
    if (value === "default") {
      setValue("Most Popular");
    } else if (value === "low") {
      setValue("$ High To Low");
    } else {
      setValue("$ Low To High");
    }
    onClose();
  };

  return (
    <>
      <div>
        <div className="py-6 border-b flex flex-col space-y-4">
          <span className="lg:text-6xl font-medium md:text-5xl text-3xl text-[#00ab84]">
            Best Deals
          </span>
          <div className="lg:flex items-center justify-between hidden">
            <span className=" text-neutral-500">
              Save on plants that add texture, color, and style to your sill.
              All of our plants ship FREE — no minimums! And they’re guaranteed
              to arrive happy & healthy.
            </span>
            <Select onValueChange={handleChange}>
              <SelectTrigger className="flex items-center space-x-1 hover:text-[#008a7b] text-base font-medium border-none">
                <p>Sort By:</p>
                <SelectValue placeholder="Most Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Most Popular</SelectItem>
                <SelectItem value="high">$ Low To High</SelectItem>
                <SelectItem value="low">$ High To Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <>
            <div className="flex lg:hidden flex-col space-y-4">
              <span className="text-sm text-neutral-500">
                Save on plants that add texture, color, and style to your sill.
                All of our plants ship FREE — no minimums! And they’re
                guaranteed to arrive happy & healthy.
              </span>
              <div className="border-t" onClick={onOpen}>
                <div className="mt-6 md:py-3 py-2 font-medium border flex items-center justify-center space-x-2">
                  <span>{value}</span>
                  <Filter size={22} />
                </div>
              </div>
            </div>

            <Dialog
              open={open}
              as="div"
              className="relative z-40 lg:hidden"
              onClose={onClose}
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
              <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  {/* Close button */}
                  <div className="flex items-center justify-end px-4">
                    <X size={24} onClick={onClose} />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-col space-y-2 pb-3 border-b">
                      <span className="font-medium text-xl">Sort Results</span>
                      <span className="text-neutral-500 text-sm">
                        {items.length} products
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-lg font-medium">Sort By:</span>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div
                          className={`w-[120px] h-[45px] flex items-center justify-center text-sm border ${
                            currentSort === "default" &&
                            "border-neutral-600 italic font-semibold"
                          } `}
                          onClick={() => handleSort("default")}
                        >
                          Most Popular
                        </div>
                        <div
                          className={`w-[120px] h-[45px] flex items-center justify-center text-sm border ${
                            currentSort === "high" &&
                            "border-neutral-600 italic font-semibold"
                          }`}
                          onClick={() => handleSort("high")}
                        >
                          $ Low To High
                        </div>
                        <div
                          className={`w-[120px] h-[45px] flex items-center justify-center text-sm border ${
                            currentSort === "low" &&
                            "border-neutral-600 italic font-semibold"
                          } `}
                          onClick={() => handleSort("low")}
                        >
                          $ High To Low
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between ">
                      <Button onClick={onClose} className="w-1/3">
                        Close
                      </Button>
                      <Button
                        onClick={onClose}
                        className="w-1/2 bg-white text-[#009a7b]"
                        disabled
                      >
                        Clear All
                      </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </>
        </div>
      </div>
      <div className="space-y-4 mt-8">
        <div className="lg:grid-cols-4  grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedProducts.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFind;
