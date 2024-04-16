"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ProfileProps } from "../types/profileDetails";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function useProfiles() {
  const { user, isLoading } = useUser();
  const [profiles, setProfiles] = useState<ProfileProps[]>();

  const getProfiles = useCallback(async () => {
    try {
      const profileDetailsResponse = await axios.get(`/api/users`);
      if (!profileDetailsResponse.data.error) {
        setProfiles(
          user
            ? profileDetailsResponse.data.users.filter(
                (profile) => profile.auth0Id !== user?.sub
              )
            : profileDetailsResponse.data.users
        );
      } else {
        console.error(
          "Error fetching profiles:",
          profileDetailsResponse.data.error
        );
      }
    } catch (error) {
      console.error("Failed to fetch profiles:", error);
    }
  }, [user]);

  useEffect(() => {
    if (!isLoading) {
      getProfiles();
    }
  }, [isLoading, user, getProfiles]);

  return {
    profiles,
  };
}
