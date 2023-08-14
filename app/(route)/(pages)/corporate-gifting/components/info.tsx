"use client"
const infomation = [
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/f7bd112492323d37166b0fcacbba4576d2d54afe-48x48.svg?auto=format",
    title: "Plants Are Made To Last",
    description:
      "They’re a meaningful gift that continues to grow and provide beauty for many years to come. Unlike other gifts that eventually expire, live plants only get better with time.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/980d246dbf53ba650a3cd746763caad2335ce0af-48x48.svg?auto=format",
    title: "Plants Are Always Inclusive",
    description:
      "No need to worry about food allergies or merch sizes. And you don't have to be a plant aficionado to enjoy a plant. We recommend easy-care varieties that work for anyone’s space, from low-light to pet-friendly.",
  },
  {
    imgUrl:
      "https://cdn.sanity.io/images/y346iw48/production/31c3930f3be509a038a47dc673fff20a1f14dcf9-48x48.svg?auto=format",
    title: "Plants Make Us Happier",
    description:
      "They boost our spirits and enhance our environments. Studies show indoor plants can reduce mental fatigue and stress, and increase relaxation and self-esteem.",
  },
];

const Info = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col space-y-6 md:pt-6 pb-4">
        <span className="lg:text-4xl text-2xl">
          With so many corporate gifting choices, why gift plants?
        </span>
      </div>

      <div className="lg:pb-20 md:pt-8 md:pb-12 grid lg:grid-cols-3 md:grid-cols-3 md:gap-12 grid-cols-1 gap-3">
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
}

export default Info
