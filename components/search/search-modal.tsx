import { Product } from "@/types";
import useSearchModal from "@/hooks/use-search";
import qs from "query-string";
import { useSearchParams, useRouter } from "next/navigation";
import Modal from "@/components/ui/modal-sm";
import Container from "@/components/ui/container";

import { ChangeEventHandler, useEffect, useState } from "react";
import { Move, MoveRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchNav = () => {
  const searchModal = useSearchModal();
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams?.get("name");

  const [value, setValue] = useState(name || "");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products?name=${value}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [value]);

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
  }, [router, value]);

  return (
    <Modal isOpen={searchModal.isOpen} onClose={searchModal.onClose}>
      <Container>
        <div className="mt-5">
          <Search
            size={18}
            className="absolute lg:top-[6.2rem] md:top-[6rem] top-[5.8rem] left-14"
          />
          <Input
            onChange={onChange}
            value={value}
            id="search"
            placeholder="Search The Sill..."
            className="px-10 w-full"
          />
        </div>
        {value.length === 0 ? (
          <div className="mt-8">
            <span className="font-thin italic text-[14px]">
              Popular Searches
            </span>
            <div className="mt-4 flex flex-col gap-y-2 mx-4 font-medium">
              <p
                className="hover:cursor-pointer"
                onClick={() => router.push("/")}
              >
                Summer Solstice Sale
              </p>
              <p
                className="hover:cursor-pointer"
                onClick={() => router.push("/")}
              >
                Pet Friendly Plants
              </p>
              <p
                className="hover:cursor-pointer"
                onClick={() => router.push("/")}
              >
                Digital Gift Card
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-3 overflow-auto">
            <div className="mt-8 flex flex-col space-y-3">
              <span className="font-thin italic text-[14px]">
                Suggested Searches....
              </span>
              <div className="flex flex-col space-y-2 overflow-auto h-[100vh]">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="lg:mt-8 flex lg:flex-row flex-col lg:space-x-4 lg:space-y-0 space-y-3"
                  >
                    <img
                      src={product.images?.[0]?.url}
                      alt="img"
                      className="lg:w-1/3 object-cover"
                    />
                    <div className="flex flex-col space-y-3 lg:pb-0 pb-4">
                      <span className="text-lg font-medium">
                        {product.name}
                      </span>
                      {product.sale != "1" && (
                        <div className="flex items-center space-x-1">
                          <div className="w-14 h-6 flex items-center justify-center text-white  font-medium rounded-md bg-red-500">
                            SALE
                          </div>
                          <p className="font-medium">: {product.sale}%</p>
                        </div>
                      )}
                      <span>{product.category.name}</span>
                      <p className="italic text-neutral-500 text-sm">
                        {product.benefit.name} / {product.size.name} /{" "}
                        {product.color.name}
                      </p>
                      <div className="flex items-center justify-between">
                        {product.sale != "1" ? (
                          <span className="text-lg font-medium">
                            $
                            {Number(product.price) -
                              (Number(product.price) * Number(product.sale)) /
                                100}
                          </span>
                        ) : (
                          <span className="text-lg font-medium">
                            ${product.price}
                          </span>
                        )}
                        <span className="text-[#009a7b] text-sm">
                          Ships Free
                        </span>
                      </div>

                      <div
                        className="flex items-center space-x-4 group hover:cursor-pointer"
                        onClick={searchModal.onClose}
                      >
                        <span
                          className="group-hover:text-[#009a7b] font-medium"
                          onClick={() => router.push(`/product/${product.id}`)}
                        >
                          View Detail
                        </span>
                        <MoveRight
                          size={20}
                          className="transition ease-in-out group-hover:translate-x-4 group-hover:text-[#009a7b]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </Modal>
  );
};

export default SearchNav;
