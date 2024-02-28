import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const BrandedButton = (props: Props) => {
  const { children, className } = props;
  return (
    <Button
      className={`bg-gradient-to-r from-[#2522D3] to-[#FC4C02] max-w-[10rem] max-h-[50px] rounded-full ${className}`}
    >
      {children}
    </Button>
  );
};

export default BrandedButton;
