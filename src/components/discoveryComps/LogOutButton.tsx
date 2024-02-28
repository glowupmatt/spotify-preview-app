"use client";

import { signOut } from "next-auth/react";
import React from "react";
import BrandedButton from "../ui/BrandedButton";

type Props = {};

const LogOutButton = (props: Props) => {
  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      <BrandedButton className="w-[3rem] h-[1rem] self-end">
        <p className="text-[7px]">LogOut</p>
      </BrandedButton>
    </div>
  );
};

export default LogOutButton;
