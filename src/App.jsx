import "./App.css";

import { isInsideEditor } from "@dotcms/client";
import { DotcmsLayout } from "@dotcms/react";

import useDotCMS from "./hooks/useDotCms";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Banner from "./content-type/Banner";

function App() {
  const { pageAsset } = useDotCMS({ path: "/example", language_id: 1 });

  if (!pageAsset) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-slate-200">
      {pageAsset?.layout.header && <Header />}
      <main className="container m-auto">
        <DotcmsLayout
          pageContext={{
            pageAsset,
            components: {
              Banner: Banner,
            },
            isInsideEditor: isInsideEditor(),
          }}
          config={{ pathname: "/example" }}
        />
      </main>
      {pageAsset?.layout.footer && <Footer />}
    </div>
  );
}

export default App;
