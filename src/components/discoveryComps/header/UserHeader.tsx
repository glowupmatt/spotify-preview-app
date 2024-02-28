/* eslint-disable @next/next/no-img-element */
"use client";

import { UseAuthRedirect } from "@/hooks/UseAuthRedirect";
import { DataContext } from "@/lib/AppContext";
import React, { useContext } from "react";
import LogOutButton from "../LogOutButton";

type Props = {};

const UserHeader = (props: Props) => {
  const { session, userData } = useContext(DataContext);
  UseAuthRedirect();
  return (
    <section className="flex justify-between w-full items-center  p-4">
      <div className="w-full flex gap-4 items-center">
        <img
          src={userData?.image}
          alt="user image"
          className="w-[2rem] h-[2rem] rounded-full"
        />
        <div>
          <p className="text-[.5rem]">{userData?.name}</p>
          <p className="text-[.5rem]">{userData?.id}</p>
        </div>
      </div>
      <LogOutButton />
    </section>
  );
};

export default UserHeader;
