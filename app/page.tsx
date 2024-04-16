"use client";
import useLinks from "./hooks/useLinks";
import ActionPage from "./components/containers/ActionPage";
import useProfileDetails from "./hooks/useProfileDetails";
import useProfiles from "./hooks/useProfiles";
import Profiles from "./components/profiles/Profiles";
import React from "react";
import ProfilesBanner from "./components/profiles/ProfilesBanner";

export default function HomePage() {
  const { profileDetails } = useProfileDetails();
  const { links } = useLinks();
  const { profiles } = useProfiles();


  return (
    <ActionPage
      links={links}
      profileDetails={profileDetails}
      headerComponent={React.createElement(ProfilesBanner)}
      actionComponent={React.createElement(Profiles, { profiles })}
    />
  );
}
