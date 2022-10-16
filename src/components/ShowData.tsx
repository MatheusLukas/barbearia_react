import React from "react";

export const ShowData = () => {
  const date = new Date();

  let month = date.toLocaleDateString("pt-BR", { month: "long" });
  let year = date.toLocaleDateString("pt-BR", { year: "numeric" });

  let data = month.charAt(0).toUpperCase() + month.slice(1) + " " + year;

  return <div>{data}</div>;
};
