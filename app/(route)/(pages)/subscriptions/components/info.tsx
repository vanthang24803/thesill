"use client";

const infomation = [
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/eea8e1a8d8ffa523098d337fef574b44f7fef645-100x100.png?auto=format",
    title: "Choose Your Plan",
    description:
      "Easy-Care, Orchids, or Pet Friendly. We'll do the work, curating easy-care and non-toxic plants from our local growers.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/72f10b9a9a3c94bab4b03cacc2aa4ac75a98fa0b-100x100.png?auto=format",
    title: "Unbox Happiness",
    description:
      "Every month, for 3 or 6 months, a plant and planter will be shipped to your door. Your box will not repeat the same plant.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/0df5286f385f7a3b81ac951129a37cbd853fa64c-100x100.png?auto=format",
    title: "Gift a Subscription",
    description:
      "Master the art of gift giving with a plant subscription box. Just add a gift note and their address at checkout.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/0f6374589358f8bf6feeefcd6548aa67b40769fa-100x100.png?auto=format",
    title: "30-Day Guarantee",
    description:
      "We guarantee our plants arrive in happy, healthy condition, or we replace them for free.",
  },
];

const Infomation = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-col space-y-6 md:pt-6 pb-4">
        <span className="lg:text-6xl text-4xl">
          Subscriber Perks
        </span>
      </div>

      <div className="lg:pb-20 md:pt-8 md:pb-12 grid lg:grid-cols-4 md:grid-cols-2 md:gap-12 grid-cols-1 gap-3">
        {infomation.map((item) => (
          <div className="mt-4 md:mt-0" key={item.title}>
            <div className="flex md:flex-col flex-row items-center md:items-start lg:pb-8 pb-4 md:space-x-0 space-x-4">
              <img src={item.imgUrl} className="w-1/5" />
              <span className="lg:mt-8 mt-4 md:text-2xl text-xl">
                {item.title}
              </span>
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
