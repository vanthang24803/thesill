"use client";
import { useRouter } from "next/navigation";

const icons = [
  {
    imgUrl: "/images/store/ins.svg",
    title: "DM us on Instagram",
    href: "/",
  },
  {
    imgUrl: "/images/store/phone.svg",
    title: "Call Us",
    href: "/",
  },
  {
    imgUrl: "/images/store/store.svg",
    title: "Visit Us In Store",
    href: "/",
  },
];


interface ProductProps {
    img : string;
}

const Product : React.FC<ProductProps> = ({img}) => {
  const router = useRouter();
  return (
    <div className="flex lg:flex-row flex-col ">
      <img src={img} className="md:hidden block w-full object-fill mb-4" />
      <div className="flex flex-col lg:space-y-8 space-y-3 lg:w-1/2 ">
        <span className="xl:text-5xl text-3xl lg:font-light md:font-medium">
          In-Shop Exclusives
        </span>
        <p>
          Every week, our stores receive specialty plants that are not available
          for sale on our website. Please note specialty plants cannot be
          transferred between store locations. Planters sold separately.
        </p>
      </div>
      <div className="lg:w-1/2 flex lg:flex-row flex-col lg:pl-32 lg:items-center justify-between space-y-3 lg:space-x-0 mt-4 lg:mt-0">
        {icons.map((index) => (
          <div
            className="flex lg:flex-col items-center flex-row lg:space-y-2 space-x-2 lg:space-x-0 cursor-pointer"
            key={index.title}
            onClick={() => router.push(index.href)}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f9f8f7]">
              <img
                src={index.imgUrl}
                alt="icon"
                className="object-fill w-6 h-6"
              />
            </div>
            <p className="font-medium">{index.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
