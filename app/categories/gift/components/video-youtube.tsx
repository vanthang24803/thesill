"use client"

const Video = () => {
  return (
    <div className="px-8 pb-12 flex lg:flex-row flex-col items-center">
      <div className="lg:basis-1/2 lg:block hidden">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/_hYeX0QJOXw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:block hidden lg:hidden">
        <iframe
          width="550"
          height="312"
          src="https://www.youtube.com/embed/_hYeX0QJOXw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="block md:hidden">
        <iframe
          width="320"
          height="175"
          src="https://www.youtube.com/embed/_hYeX0QJOXw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="lg:basis-1/2 lg:p-20 mt-4 lg:mt-0">
        <p className="lg:text-5xl md:text-4xl text-2xl">
          Plants Make People Happy.
        </p>
      </div>
    </div>
  );
}

export default Video
