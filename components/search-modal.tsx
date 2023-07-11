import { useState } from "react";
import Link from "next/link";

import { Search } from "lucide-react";
import useSearchModal from "@/hooks/use-search";

import Modal from "@/components/ui/modal-sm";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";

const SearchNav = () => {
  const searchModal = useSearchModal();
  const [data, setData] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <Modal isOpen={searchModal.isOpen} onClose={searchModal.onClose}>
      <Container>
        <div className="lg:mt-5 mt-6">
          <Search size={17} className="absolute top-24  left-14" />
          <Input
            onChange={handleSearch}
            id="search-nav"
            placeholder="Search The Sill..."
            className="px-10 w-full"
          />
        </div>
        <div className="mt-8">
          {data.length === 0 ? (
            <>
              <span className="font-thin italic text-[14px]">
                Popular Searches
              </span>
              <div className="mt-4 flex flex-col gap-y-2 mx-4 font-medium">
                <Link href="/">Summer Solstice Sale</Link>
                <Link href="/">Pet Friendly Plants</Link>
                <Link href="/">Digital Gift Card</Link>
              </div>
            </>
          ) : (
            <>
              <span className="font-thin italic text-[14px]">
                Suggested Searches....
              </span>
              <p className="mx-4 mt-4 font-medium">You Search is : {data}</p>
            </>
          )}
        </div>
      </Container>
    </Modal>
  );
};

export default SearchNav;
