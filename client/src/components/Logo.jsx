import React from "react";
import { Link } from "react-router-dom";

function Logo({ divClass, linkClass, logoSize}) {

    const corpClass = `${logoSize} font-bold leading-6 text-primary`
    const lightingClass = `${logoSize} font-bold leading-6 text-neutral-focus`
  return (
    <div className={divClass}>
        <Link to="/" className={linkClass}>
        <span className={corpClass}>Corp</span>
        <span className={lightingClass}>
          Lighting
        </span>
        </Link>
    </div>
  );
}

export default Logo;
