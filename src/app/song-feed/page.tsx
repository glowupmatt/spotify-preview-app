import React from "react";
import UserHeader from "@/components/discoveryComps/header/UserHeader";
import { Recommendations } from "@/components/discoveryComps/Recommendations";
import sdk from "@/lib/spotify-sdk/ClientInstance";
type Props = {};

const Page = async (props: Props) => {
  // const topItems = await sdk.currentUser.topItems("tracks", "short_term", 5);
  // const topSongsMap = new Map(
  //   topItems.items.map((item, index) => [index, item.album.id])
  // );
  // const topSongsId = Array.from(topSongsMap.values());
  // const recommendations = await sdk.recommendations.get({
  //   seed_genres: topSongsId,
  // });
  // console.log(topItems);
  return (
    <main className="bg-gradient-to-b from-[#535353] to-[#000000] min-h-screen">
      <UserHeader />
      <Recommendations />
    </main>
  );
};

export default Page;
