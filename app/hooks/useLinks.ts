"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LinkProps } from "@/app/types/profileDetails";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";

export default function useLinks() {
  const { user } = useUser();
  const originalLinksRef = useRef<LinkProps[]>([]);
  const [areOriginalLinksChanged, setAreOriginalLinksChanged] = useState(false);
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [originalLinks, setOriginalLinks] = useState<LinkProps[]>([]);

  function prepareLinks(links: LinkProps[]) {
    return links.map((link) =>
      link.id.startsWith("new-link-")
        ? {
            id: "",
            url: link.url,
            platform: link.platform,
          }
        : link
    );
  }

  const checkIfLinksChanged = useCallback(() => {
    if (originalLinksRef.current.length !== links.length) {
      setAreOriginalLinksChanged(true);
      return;
    }
    for (let i = 0; i < originalLinksRef.current.length; i++) {
      if (
        originalLinksRef.current[i].url !== links[i].url ||
        originalLinksRef.current[i].platform !== links[i].platform
      ) {
        setAreOriginalLinksChanged(true);
        return;
      }
    }
    setAreOriginalLinksChanged(false);
  }, [links]);

  const getLinks = useCallback(async (userId: string) => {
    const linksResponse = await axios.get(`/api/users/${userId}/links`);
    if (!linksResponse.data.error) {
      setLinks(linksResponse.data.links);
      setOriginalLinks(linksResponse.data.links);
      originalLinksRef.current = [...linksResponse.data.links];
    }
  }, []);

  const onAddNewLink = useCallback(() => {
    const newLink = {
      id: "new-link-" + Date.now(),
      platform: "",
      url: "",
    };
    setLinks((prevLinks) => [newLink].concat(prevLinks));
  }, []);

  const onRemoveLink = useCallback((link: LinkProps) => {
    setLinks((prevLinks) => prevLinks.filter((prevLink) => prevLink !== link));
  }, []);

  const onEditLink = useCallback((link: LinkProps) => {
    setLinks((prevLinks) =>
      prevLinks.map((prevLink) => (prevLink.id === link.id ? link : prevLink))
    );
  }, []);

  const saveLinks = useCallback(async () => {
    const response = await axios.post(
      `/api/users/${user.sub}/links`,
      prepareLinks(links)
    );
    if (response.data) {
      setAreOriginalLinksChanged(false);
      setOriginalLinks(links);
      originalLinksRef.current = [...links];
    }
  }, [links, user]);

  useEffect(() => {
    if (user) {
      checkIfLinksChanged();
    }
  }, [links, checkIfLinksChanged]);

  useEffect(() => {
    if (user) {
      getLinks(user.sub);
    }
  }, [user, getLinks]);

  return {
    links,
    originalLinks,
    areOriginalLinksChanged,
    onAddNewLink,
    onEditLink,
    saveLinks,
    onRemoveLink,
  };
}
