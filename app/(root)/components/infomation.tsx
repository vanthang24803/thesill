"use client";

const infomation = [
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/84d07688abdf55602905c8913388363009426f11-60x60.svg?auto=format",
    title: "Free Standard Shipping",
    description:
      "Enjoy free standard shipping on all plants and planters. Orders are shipped via UPS carbon neutral shipping, keeping our carbon footprint as small as possible.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/e0882a8e72689c1ef1c0898469b09ad6e4e574a6-59x54.svg?auto=format",
    title: "30-Day Customer Happiness Guarantee",
    description:
      "Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every step. If your plant arrives damaged or unhealthy, we replace it for free.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/39a25eee4d0f740bf6169d2dc6f7c8ced0387721-60x60.svg?auto=format",
    title: "Local Stores",
    description:
      "Want hands-on plant expertise IRL? Stop by one of our stores in NYC, Bethesda, Chicago, or San Francisco to explore more plants, planters, & care accessories.",
  },
];

const Infomation = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col space-y-6 pb-10 w-full border-b-2">
        <span className="lg:text-6xl md:text-4xl text-3xl">
          To be human is to experience biophilia.
        </span>
        <span className="flex flex-row">
          <p className="italic mx-2">[bio-feelya]</p> — Our innate desire to
          connect with nature. It’s in our DNA.
        </span>
      </div>

      <div className="lg:py-20 md:py-12 grid md:grid-cols-3 md:gap-12 grid-cols-1 gap-3">
        {infomation.map((item) => (
          <div className="mt-4 md:mt-0" key={item.title}>
            <div className="flex md:flex-col flex-row items-center md:items-start lg:pb-8 pb-4 md:space-x-0 space-x-4">
              <img src={item.imgUrl} className="w-1/5" />
              <span className="lg:mt-8 mt-4 md:text-2xl text-xl">{item.title}</span>
            </div>
            <span className="lg:text-base md:text-[14px]">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infomation;
