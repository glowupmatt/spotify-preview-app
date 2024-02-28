"use client";
import React from "react";
import BrandedButton from "../ui/BrandedButton";
import { useSession, signIn } from "next-auth/react";

type Props = {};

const ButtonLayout = (props: Props) => {
  return (
    <section className="flex gap-4">
      <div onClick={() => signIn("spotify")}>
        <BrandedButton>Sign In With Spotify</BrandedButton>
      </div>
    </section>
  );
};

export default ButtonLayout;
