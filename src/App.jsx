import './App.css'
import { useEffect, useState } from 'react'
import { DotCmsClient } from '@dotcms/client';

const client = DotCmsClient.init({
  dotcmsUrl: `${import.meta.env.VITE_DOTCMS_HOST_KEY}`,
  authToken: `${import.meta.env.VITE_DOTCMS_AUTH_TOKEN_KEY}`,
  siteId: `${import.meta.env.VITE_DOTCMS_SITE_ID_KEY}`
});

function App() {
  const [pageAsset, setPageAsset] = useState(null);

  useEffect(() => {
    client.page
      .get({ path: "/example", language_id: 1 })
      .then((pageAsset) => {
        console.log("DOTCMS PAGE ASSET:", pageAsset);
        setPageAsset(pageAsset);
      })
      .catch((error) => console.log(error));
  }, []);

  return <div>EMPTY Example</div>;
}

export default App
