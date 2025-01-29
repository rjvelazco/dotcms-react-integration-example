import { DotCmsClient, isInsideEditor } from "@dotcms/client";
import { useEffect, useState } from "react";

const client = DotCmsClient.init({
  dotcmsUrl: `${import.meta.env.VITE_DOTCMS_HOST_KEY}`,
  authToken: `${import.meta.env.VITE_DOTCMS_AUTH_TOKEN_KEY}`,
  siteId: `${import.meta.env.VITE_DOTCMS_SITE_ID_KEY}`,
});

const useDotCMS = (pageParameter) => {
  const [pageAsset, setPageAsset] = useState(null);

  useEffect(() => {
    client.page
      .get(pageParameter)
      .then((pageAsset) => setPageAsset(pageAsset))
      .catch((error) => console.log(error));
  }, [pageParameter]);

  useEffect(() => {
    // If we are not inside dotCMS, we won't listen to the edito
    if (!isInsideEditor()) {
      return;
    }

    // The editor will return the PageAsset everytime we do a change inside dotCMS
    client.editor.on("changes", (page) => setPageAsset(page));

    return;
  }, []);

  return { pageAsset };
};

export default useDotCMS;
