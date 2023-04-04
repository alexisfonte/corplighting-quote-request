import React from "react";

function Loading() {
  return (
    <div className="w-screen flex items-center justify-center bg-base-100 min-h-screen ">
      <span className="sr-only">Loading...</span>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent animate-spin">
        <div className="h-9 w-9 rounded-full bg-base-100"></div>
      </div>
    </div>
  );
}

export default Loading;
