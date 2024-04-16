"use client";
import LinksHeader from "../components/links/LinksHeader";
import Links from "../components/links/Links";
import useLinks from "../hooks/useLinks";
import SaveButton from "../components/SaveButton";
import ActionPage from "../components/containers/ActionPage";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import React from "react";

export default withPageAuthRequired(function LinksPage() {
  const {
    links,
    originalLinks,
    areOriginalLinksChanged,
    onAddNewLink,
    onEditLink,
    saveLinks,
    onRemoveLink,
  } = useLinks();

  return (
    <ActionPage
      links={originalLinks}
      headerComponent={React.createElement(LinksHeader, { onAddNewLink })}
      actionComponent={React.createElement(Links, {
        links,
        onEditLink,
        onRemoveLink,
      })}
      saveComponent={React.createElement(SaveButton, {
        isDataChanged: areOriginalLinksChanged,
        onSave: saveLinks,
      })}
    />
  );
});
