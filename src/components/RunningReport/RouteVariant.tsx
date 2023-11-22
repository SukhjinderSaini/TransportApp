import React from "react";

interface Props {
  formatString: string;
}

function RouteVariant({ formatString }: Props) {
  if (formatString === "UNKNOWN" || formatString.length < 3) {
    return <span>{formatString}</span>;
  }
  const charactersToFormat = formatString.slice(0, 3);
  return (
    <>
      <span className="fw-bold">{charactersToFormat}</span>
      <span>{formatString.substring(3)}</span>
    </>
  );
}

export default RouteVariant;
