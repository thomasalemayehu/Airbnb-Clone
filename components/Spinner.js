import React from "react";
import LoadingIcons from "react-loading-icons";

function Spinner() {
  return (
    <LoadingIcons.Puff
      className="h-6 mx-auto"
      stroke="#5c40ff"
      strokeWidth={5}
      speed={0.95}
      strokeOpacity={1}
    />
  );
}

export default Spinner;
