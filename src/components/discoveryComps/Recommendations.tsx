"use client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "@/lib/AppContext";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { Page, Track } from "@spotify/web-api-ts-sdk";
type Props = {};

export const Recommendations = (props: Props) => {
  const { session, userData } = useContext(DataContext);
  const sessionToken = userData?.access_token;
  const [recommendations, setRecommendations] = useState<any>(null);
  const [topFiveTracks, setTopFiveTracks] = useState<Page<Track>>(
    {} as Page<Track>
  );
  const [topSongsId, setTopSongsId] = useState<string>();
  const [topArtistsId, setTopArtistsId] = useState<string>();

  useEffect(() => {
    const getUsersTopFiveTracks = async () => {
      const res = await sdk.currentUser.topItems("tracks", "short_term", 5);
      setTopFiveTracks(res);
    };
    getUsersTopFiveTracks();
  }, []);

  useEffect(() => {
    if (topFiveTracks.items) {
      const topSongsMap = new Map(
        topFiveTracks.items.map((item, index) => [index, item.id])
      );
      const topArtists = new Map(
        topFiveTracks.items.map((item, index) => [index, item.artists[0].id])
      );
      setTopSongsId(Array.from(topSongsMap.values()).join(","));
      setTopArtistsId(Array.from(topArtists.values()).join(","));
    }
  }, [topFiveTracks]);
  console.log(topSongsId, "TOP SONGS");
  console.log(topArtistsId, "TOP ARTISTS");

  // useEffect(() => {
  //   if (topSongsId && topArtistsId) {
  //     const getRecommendations = async () => {
  //         const res = await fetch(
  //           `https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${topSongsId}`,
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `Bearer ${sessionToken}`,
  //             },
  //           }
  //         );
  //         const data = await res.json();
  //         setRecommendations(data);
  //     };
  //     getRecommendations();
  //   }
  // }, [sessionToken, topSongsId, topArtistsId]);

  console.log(recommendations);
  return <div>Recommendations</div>;
};
