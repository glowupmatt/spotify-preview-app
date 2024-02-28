import React from "react";
import Image from "next/image";

type Props = {};

const TextBody = (props: Props) => {
  return (
    <section className="text-[#FFFFFF] flex flex-col gap-[1rem]">
      <h2 className="text-[40px] font-semibold leading-[120%]">
        Discover New Music
      </h2>
      <Image
        src="/images/stars.svg"
        alt="Stars Image"
        width={208}
        height={50}
      />
      <p className="text-[16px] leading-[170%]">
        Discover a curated roster of world-class bands, composers, and artists,
        easily accessible with innovative tools and features
      </p>
    </section>
  );
};

export default TextBody;
