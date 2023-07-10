import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://64.media.tumblr.com/48a20c516924cb93ecb244c76d41b4ae/95028c93d6b99915-67/s1280x1920/eb513c32642608c74b4cf38a0c1f49d23d2345c3.png"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white">
          Not sure where to go? Perfect.
        </p>
        <button className="text-white bg-emerald-600 px-10 py-4 shadow-xl rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
