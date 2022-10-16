import React from "react";

export const ShowData = () => {
  const date = new Date().toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return <div className="capitalize">{date}</div>;
};
