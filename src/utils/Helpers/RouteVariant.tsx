import React from "react";
import { RouteVariantException } from "../constants";
interface Props {
  formatString: string;
}

function RouteVariant({ formatString }: Props) {
  if (
    formatString === RouteVariantException.UNKNOWN ||
    formatString.length < 3
  ) {
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
