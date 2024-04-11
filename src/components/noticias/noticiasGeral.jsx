"use client";
import { useContext, useEffect, useState } from "react";
import CardNewsHome from "../newsHome/cardNewsHome";
import { Pagination } from "../ui/pagination";
import { NoticiasContext } from "../context/noticias";
import CardNewsNoticia from "./cardNewsNoticia";

export default function NoticiasGeral() {
  const { noticias, getNoticias } = useContext(NoticiasContext);

  useEffect(() => {
    console.log("🚀 ~ getNoticias ~ noticias:", noticias);
  }, [noticias]);
  return (
    <section>
      <CardNewsNoticia />

      <Pagination />
    </section>
  );
}
