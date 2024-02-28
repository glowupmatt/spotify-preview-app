import React from "react";
import Image from "next/image";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Image
        src={"/images/logo.svg"}
        width={100}
        height={100}
        alt={"Company Logo"}
      />
    </header>
  );
};

export default Header;
