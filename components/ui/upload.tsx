"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="ypleett6"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              w-full
              text-neutral-600
            "
          >
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div
                className="
              absolute inset-0 w-full h-full"
              >
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
