import Image from "next/image";
import React from "react";

function LargCared({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute bottom-20 left-12">
        <h3 className="text-white text-4xl mb3 w-64 font-bold">{title}</h3>
        <p className="text-white">{description}</p>
        <button className="bg-white text-sm text-gray-900 px-4 py-2 rounded-xl mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargCared;
