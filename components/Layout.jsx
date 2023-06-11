import Menu from "./Menu";
import { useState } from "react";
import { StylingContext } from "../contexts/StylingContext.js";

const Layout = ({children}) => {

    const [isStyling, setStyling] = useState(true);

    return (
      <>
        <Menu isStyling={isStyling} setStyling={setStyling}></Menu>
        <StylingContext.Provider value={isStyling}>
            <main className="container">{children}</main>
        </StylingContext.Provider>
      </>
    );
  };
  
  export default Layout;