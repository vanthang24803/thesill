"use client";

import useSearchModal from "@/hooks/use-search";
import { useSearchParams, useRouter } from "next/navigation";
import searchProducts from "@/actions/getSearch";
import Modal from "@/components/ui/modal-sm";
import Container from "@/components/ui/container";

import { useState } from "react";
import { Link, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";
import { toast } from "react-hot-toast";

const SearchNav = () => {
  const searchModal = useSearchModal();
  const search = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // const handleSearch = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (searchQuery) {
  //     const results = await searchProducts(searchQuery);
  //     setSearchResults(results);
  //   }
  // };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.error("Feature under development");
    setTimeout(searchModal.onClose, 2000);
  };

  return (
    <Modal isOpen={searchModal.isOpen} onClose={searchModal.onClose}>
      <Container>
        <form className="lg:mt-5 mt-6" onSubmit={handleSearch}>
          <Search size={17} className="absolute top-[6.2rem]  left-14" />
          <Input
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            id="search"
            placeholder="Search The Sill..."
            className="px-10 w-full"
          />
        </form>
        {searchQuery?.length === 0 ? (
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
              <p className="mx-4 mt-4 font-medium">Search is : {searchQuery}</p>
            </div>
            <div className="flex flex-col">
              {searchResults.map((product) => (
                <div key={product.id}>
                  <img src={product.images[0].url} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Modal>
  );
};

export default SearchNav;
