import React from "react";

export default function Background() {
  return (
    <img
      src={process.env.PUBLIC_URL + "/background.png"}
      className="background"
    />
  );
}
