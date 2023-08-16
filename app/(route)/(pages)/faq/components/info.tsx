"use cliet";

const Info = () => {
  return (
    <div className="lg:w-1/2 flex lg:flex-col lg:space-y-6 lg:space-x-0 flex-row  space-x-8">
      <div className="flex flex-col space-y-3">
        <span className="text-lg font-serif text-neutral-600">FAQ</span>

        <span className="lg:text-7xl md:text-5xl text-4xl font-serif font-medium">
          Just the facts.
        </span>
      </div>

      <img
        src="https://www.thesill.com/_vercel/image?url=/_nuxt/img/half_title.7061520.png&w=1536&q=100"
        alt="heart"
        className="lg:w-1/3 md:w-1/6 hidden md:block"
      />
    </div>
  );
};

export default Info;
