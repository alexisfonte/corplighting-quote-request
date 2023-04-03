import React from "react";
import { Link } from "react-router-dom";

function Logo({ divClass, linkClass, logoSize}) {

    const corpClass = `${logoSize} font-bold leading-6 text-primary`
    const lightingClass = `${logoSize} font-bold leading-6 text-neutral-focus`
  return (
    <div className={divClass}>
        <Link to="/" className={linkClass}>
        <span className="text-3xl font-bold leading-6 text-primary">Corp</span>
        <span className="text-3xl font-bold leading-6 text-neutral-focus">
          Lighting
        </span>
        </Link>
      {/* <a href="#" className="-m-1.5 p-1.5">
      </a> */}
    </div>
  );
}

export default Logo;
