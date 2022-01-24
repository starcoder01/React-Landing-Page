import React from "react";
import Card from "./Card";
import locations from "./Data";
import Description from "./Description";

function Content() {
  return (
    <>
      <h1>Explore these beautiful places</h1>
      <Card locations={locations} />
      <Description />
    </>
  );
}

export default Content;
