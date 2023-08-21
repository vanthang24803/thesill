"use client";

const Video = () => {
  return (
    <div className="py-8 flex lg:flex-row flex-col items-center">
      <div className="lg:block hidden">
        <iframe
          width="800"
          height="420"
          src="https://www.youtube.com/embed/ZqXPKUgfl5g"
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
          src="https://www.youtube.com/embed/ZqXPKUgfl5g"
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
          src="https://www.youtube.com/embed/ZqXPKUgfl5g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
