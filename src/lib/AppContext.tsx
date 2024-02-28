"use client";
import React, { createContext, useState } from "react";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

type AppContextType = {
  session: any;
  userData: {
    access_token: string;
    email: string;
    expires_at: number;
    expires_in: number;
    id: string;
    image: string;
    name: string;
    refresh_token: string;
    scope: string;
    token_type: string;
  };
};
export const DataContext = createContext({} as AppContextType);
function AppContext({ children }: Props) {
  const session = useSession();
  const userData = session.data?.user;
  return (
    <DataContext.Provider value={{ session, userData } as AppContextType}>
      {children}
    </DataContext.Provider>
  );
}

export default AppContext;
