"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import Button from "@/components/ui/button";

const MobileFilters = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className="flex lg:hidden flex-col space-y-4">
        <span className="text-sm text-neutral-500">
          Save on plants that add texture, color, and style to your sill. All of
          our plants ship FREE — no minimums! And they’re guaranteed to arrive
          happy & healthy.
        </span>
        <div className="border-t" onClick={onOpen}>
          <div className="mt-6 md:py-3 py-2 font-medium border flex items-center justify-center space-x-2">
            <span>Most Popular</span>
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
              </div>
              <div className="mt-4">
                <span className="text-lg font-medium">Sort By:</span>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="w-[120px] h-[45px] flex items-center justify-center font-semibold text-sm border border-neutral-600 italic">
                    Most Popular
                  </div>
                  <div className="w-[120px] h-[45px] flex items-center justify-center font-semibold text-sm border ">
                    $ Low To High
                  </div>
                  <div className="w-[120px] h-[45px] flex items-center justify-center font-semibold text-sm border ">
                    $ High To Low
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between ">
                <Button onClick={onClose} className="w-1/3">
                  Close
                </Button>
                <Button onClick={onClose} className="w-1/2 bg-white text-[#009a7b]" disabled>
                  Clear All
                </Button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;