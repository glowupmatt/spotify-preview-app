"use client";
import React, { useContext, useEffect } from "react";
import { DataContext } from "@/lib/AppContext";
import Header from "../headerComp/Header";
import TextBody from "./TextBody";
import ButtonLayout from "./ButtonLayout";
import { useRouter } from "next/navigation";
import { UseAuthRedirect } from "@/hooks/UseAuthRedirect";

type Props = {};

const HomePage = (props: Props) => {
  const { session } = useContext(DataContext);
  const router = useRouter();
  UseAuthRedirect();
  return (
    <div className="min-h-screen p-8 flex flex-col justify-between">
      <Header />
      <TextBody />
      <ButtonLayout />
    </div>
  );
};

export default HomePage;
