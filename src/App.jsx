import "./App.css";
import { useEffect, useState } from "react";

import { DotCmsClient } from "@dotcms/client";
import { DotcmsLayout } from "@dotcms/react";

import Banner from "./content-type-components/Banner";

const client = DotCmsClient.init({
  dotcmsUrl: `${import.meta.env.VITE_DOTCMS_HOST_KEY}`,
  authToken: `${import.meta.env.VITE_DOTCMS_AUTH_TOKEN_KEY}`,
  siteId: `${import.meta.env.VITE_DOTCMS_SITE_ID_KEY}`,
});

function App() {
  const [pageAsset, setPageAsset] = useState(null);

  useEffect(() => {
    client.page
      .get({ path: "/example", language_id: 1 })
      .then((pageAsset) => setPageAsset(pageAsset))
      .catch((error) => console.log(error));
  }, []);

  if (!pageAsset) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-slate-200">
      <main className="container m-auto">
        <DotcmsLayout
          pageContext={{
            pageAsset,
            components: {
              Banner: Banner
            },
          }}
          config={{ pathname: "/example" }}
        />
      </main>
    </div>
  );
}

export default App;
