"use client";

import { useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Filter, X, Dot, MoreHorizontal } from "lucide-react";
import { Dialog } from "@headlessui/react";
import Button from "@/components/ui/button";
import { Benefit, Color, Product, Size } from "@/types";
import ProductCard from "./card";
import FAQ from "./faq";
import FilterColor from "./filter-color";

interface ProductFind {
  items: Product[];
  sizes: Size[];
  colors: Color[];
  benefits: Benefit[];
  searchParams: {
    colorId: string;
    sizeId: string;
    benefitId: string;
  };
}

const ProductFind: React.FC<ProductFind> = ({
  items,
  sizes,
  colors,
  benefits,
  searchParams,
}) => {
  const [sortedProducts, setSortedProducts] = useState(items);
  const [open, setOpen] = useState(false);
  const [openSort, setOpenSort] = useState(true);
  const [value, setValue] = useState("Most Popular");
  const [nav, setNav] = useState(false);
  const [currentSort, setCurrentSort] = useState("default");
  const [selectedColorId, setSelectedColorId] = useState<string | null>(
    searchParams.colorId
  );

  // Open Filter
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onOpenSort = useCallback(() => {
    setOpenSort(!openSort);
  }, [openSort]);

  // Open Navigate
  const openNav = () => setNav(true);
  const cloesNav = () => setNav(false);

  // Sort to PC
  const handleChange = (value: string) => {
    let tempArray = JSON.parse(JSON.stringify(items)) as Product[];
    if (selectedColorId) {
      tempArray = tempArray.filter((item) => item.color.id === selectedColorId);
    }
    if (value === "default") {
      setSortedProducts(tempArray);
    } else {
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

  // Filter Color
  const filterProducts = (colorId: string | null) => {
    setSelectedColorId(colorId);
    if (colorId) {
      setSortedProducts(items.filter((item) => item.color.id === colorId));
    } else {
      setSortedProducts(items);
    }
  };

  return (
    <>
      <div>
        <div className="py-6 border-b flex flex-col space-y-4">
          <span className="lg:text-6xl font-medium md:text-5xl text-3xl text-[#00ab84]">
            Planters
          </span>
          <div className="lg:flex items-center justify-between hidden">
            <span className=" text-neutral-500">
              Discover planters, propagation vessels, baskets, and more in a
              wide range of styles, sizes, and colors.
            </span>
            <div className="lg:flex hidden items-center space-x-4">
              <div
                className="flex items-center space-x-1 hover:cursor-pointer hover:text-[#009a7b]"
                onClick={onOpenSort}
              >
                <span>Show Filter</span>
                <Filter size={24} />
              </div>
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
          </div>

          <>
            <div className="flex lg:hidden flex-col space-y-4">
              <span className="text-sm text-neutral-500">
                Discover planters, propagation vessels, baskets, and more in a
                wide range of styles, sizes, and colors.
              </span>
              <div className="border-t flex justify-between items-center space-x-6">
                {/* Filter */}
                <div
                  className="mt-6 md:py-3 py-2 w-full font-medium border flex items-center justify-center space-x-2"
                  onClick={onOpen}
                >
                  <span>{value}</span>
                  <Filter size={22} />
                </div>

                {/* Navigation */}
                <div
                  className="mt-6 md:py-3 py-2 font-medium w-full border flex items-center justify-center space-x-2"
                  onClick={openNav}
                >
                  <span>Plant Care</span>
                  <MoreHorizontal size={22} />
                </div>
              </div>
            </div>
            {/* Filter */}
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
                            "border-neutral-600 italic  font-semibold"
                          } `}
                          onClick={() => handleSort("default")}
                        >
                          Most Popular
                        </div>
                        <div
                          className={`w-[120px] h-[45px] flex items-center justify-center  text-sm border ${
                            currentSort === "high" &&
                            "border-neutral-600 italic font-semibold"
                          }`}
                          onClick={() => handleSort("high")}
                        >
                          $ Low To High
                        </div>
                        <div
                          className={`w-[120px] h-[45px] flex items-center justify-center  text-sm border ${
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

            {/* Navigation */}
            <Dialog
              open={nav}
              as="div"
              className="relative z-40 lg:hidden transition ease-in-out"
              onClose={cloesNav}
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
              <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                  {/* Close button */}
                  <div className="flex items-center justify-end px-4">
                    <X size={24} onClick={cloesNav} />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-col space-y-2 pb-3 border-b">
                      <span className="font-medium text-xl">Plant Care</span>
                      <span className="text-neutral-500 text-sm">
                        Browse collections
                      </span>
                    </div>
                    <div className="mt-4 flex flex-col pt-4 font-medium space-y-3">
                      <span className="italic pb-2 border-b text-[#009a7b]  flex items-center ">
                        <p>All Plant Care</p>
                        <Dot size={40} />
                      </span>
                      <Link
                        href="/collections/potting-supplies"
                        className="pb-4 border-b"
                      >
                        Potting Supplies
                      </Link>
                      <Link
                        href="/collections/grow-lights"
                        className="pb-4 border-b"
                      >
                        Grow Light
                      </Link>
                      <Link
                        href="/collections/gardening"
                        className="pb-4 border-b"
                      >
                        Gardening
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </>
        </div>
      </div>
      {/* Products */}
      {openSort ? (
        <div className="space-y-4 mt-8 lg:flex block">
          <div className="lg:basis-1/5 mt-12 lg:flex hidden flex-col hover:cursor-pointer space-y-4 text-[1.1rem]">
            <div className="border-b flex flex-col space-y-2 pb-4 mr-8 text-base">
              <span className="italic text-[#009a7b] font-medium flex items-center ">
                <p>All Plant Care</p>
                <Dot size={40} />
              </span>
              <Link href="/collections/potting-supplies">Potting Supplies</Link>
              <Link href="/collections/grow-lights">Grow Light</Link>
              <Link href="/collections/gardening">Gardening</Link>
            </div>
            <FilterColor
              valueKey="colorId"
              name="Planter Color"
              data={colors}
              onFilter={filterProducts}
            />
          </div>
          <div className="lg:basis-4/5">
            <div className="lg:grid-cols-4  grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedProducts.map((item) => (
                <ProductCard data={item} key={item.id} label="Planter" />
              ))}
            </div>
            <FAQ />
          </div>
        </div>
      ) : (
        <>
          <div className="lg:grid-cols-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedProducts.map((item) => (
              <ProductCard data={item} key={item.id} label="Planter" />
            ))}
          </div>
          <FAQ />
        </>
      )}
    </>
  );
};

export default ProductFind;
