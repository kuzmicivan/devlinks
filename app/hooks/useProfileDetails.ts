"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { ProfileDetailsProps } from "../types/profileDetails";

export default function useProfileDetails() {
  const { user } = useUser();
  const originalProfileDetailsRef = useRef<ProfileDetailsProps>();
  const [areProfileDetailsChanged, setAreProfileDetailsChanged] =
    useState(false);
  const [profileDetails, setProfileDetails] = useState<ProfileDetailsProps>();
  const [originalProfileDetails, setOriginalProfileDetails] =
    useState<ProfileDetailsProps>();

  const checkIfProfileDetailsAreChanged = useCallback(() => {
    if (originalProfileDetailsRef.current) {
      const hasPictureChanged =
        originalProfileDetailsRef.current.picture !== profileDetails?.picture;
      const hasNameChanged =
        originalProfileDetailsRef.current.name !== profileDetails?.name;
      setAreProfileDetailsChanged(hasPictureChanged || hasNameChanged);
    }
  }, [profileDetails]);

  const getProfileDetails = useCallback(async (userId: string) => {
    const profileDetailsResponse = await axios.get(`/api/users/${userId}`);
    if (!profileDetailsResponse.data.error) {
      const profileDetails: ProfileDetailsProps =
        profileDetailsResponse.data.user;
      setProfileDetails(profileDetails);
      setOriginalProfileDetails(profileDetails);
      originalProfileDetailsRef.current = profileDetails;
    }
  }, []);

  const onEditProfileDetailProp = useCallback((prop: string, value: string) => {
    setProfileDetails((prevProfileDetails) => ({
      ...prevProfileDetails,
      [prop]: value,
    }));
  }, []);

  const saveProfileDetails = useCallback(async () => {
    const response = await axios.post(`/api/users/${user.sub}`, profileDetails);
    if (response.data) {
      setAreProfileDetailsChanged(false);
      setOriginalProfileDetails(profileDetails);
      originalProfileDetailsRef.current = profileDetails;
    }
  }, [profileDetails, user]);

  useEffect(() => {
    checkIfProfileDetailsAreChanged();
  }, [profileDetails, checkIfProfileDetailsAreChanged]);

  useEffect(() => {
    if (user) {
      getProfileDetails(user.sub);
    }
  }, [user, getProfileDetails]);

  return {
    profileDetails,
    originalProfileDetails,
    onEditProfileDetailProp,
    areProfileDetailsChanged,
    saveProfileDetails,
  };
}
