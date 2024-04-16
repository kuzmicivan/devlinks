"use client";
import useLinks from "../hooks/useLinks";
import ProfileDetailsBanner from "../components/profileDetails/ProfileDetailsBanner";
import ProfileDetails from "../components/profileDetails/ProfileDetails";
import ProfilePicture from "../components/profileDetails/ProfilePicture";
import ProfileInfoContainer from "../components/profileDetails/ProfileInfoContainer";
import SaveButton from "../components/SaveButton";
import ActionPage from "../components/containers/ActionPage";
import useProfileDetails from "../hooks/useProfileDetails";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import React from "react";

export default withPageAuthRequired(function ProfileDetailsPage() {
  const {
    profileDetails,
    originalProfileDetails,
    onEditProfileDetailProp,
    areProfileDetailsChanged,
    saveProfileDetails,
  } = useProfileDetails();
  const { links } = useLinks();
  return (
    profileDetails && (
      <ActionPage
        links={links}
        profileDetails={originalProfileDetails}
        headerComponent={React.createElement(ProfileDetailsBanner)}
        actionComponent={React.createElement(
          ProfileDetails,
          null,
          React.createElement(ProfilePicture, {
            label: "Profile picture",
            picture: profileDetails.picture,
            name: profileDetails.name,
            onEditProfilePicture: (value: string) =>
              onEditProfileDetailProp("picture", value),
          }),
          React.createElement(ProfileInfoContainer, {
            name: profileDetails.name,
            email: profileDetails.email,
            onEditName: (value: string) =>
              onEditProfileDetailProp("name", value),
          })
        )}
        saveComponent={React.createElement(SaveButton, {
          isDataChanged: areProfileDetailsChanged,
          onSave: saveProfileDetails,
        })}
      />
    )
  );
});
