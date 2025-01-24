import "./App.css";

import { DotcmsLayout } from "@dotcms/react";

import useDotCms from "./hooks/UseDotCms";
import Header from "./layout/header";
import Footer from "./layout/Footer";
import Banner from "./content-type-components/Banner";
import { isInsideEditor } from "@dotcms/client";

function App() {
  const { pageAsset } = useDotCms({ path: "/example", language_id: 1 });

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
              Banner: Banner
            },
            isInsideEditor: isInsideEditor()
          }}
          config={{ pathname: "/example" }}
          />
      </main>
      {pageAsset?.layout.footer && <Footer />}
    </div>
  );
}

export default App;
