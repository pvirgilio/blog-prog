"use client";
import { createContext, useEffect, useState } from "react";
export const NoticiasContext = createContext();
export const NoticiasProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasId, setNoticiasId] = useState([]);
  var apiBase = "http://localhost:3333";

  async function getNoticias() {
    const res = await fetch(`${apiBase}/news`, {
      cache: "no-store",
      method: "GET",
    });

    // Erro dev api
    if (!res.ok) {
      throw new Error(`Erro ao buscar notícias: ${res.status}`);
    }

    const data = await res.json();
    return data;
  }

  async function getNoticiasId(id) {
    const res = await fetch(`${apiBase}/news/${id}`, {
      cache: "no-store",
      method: "GET",
    });

    // Erro dev api
    if (!res.ok) {
      throw new Error(`Erro ao buscar notícias: ${res.status}`);
    }

    const data = await res.json();
    return data;
  }
  useEffect(() => {
    async function fetchNews() {
      const data = await getNoticias();
      setNoticias(data);
    }
    fetchNews();
  }, []);

  //   async function getNoticiasId(id) {
  //     const response = await fetch(`http://localhost:3333/noticia/${id}`, {
  //       cache: "no-store",
  //       method: "GET",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setNoticiasId(data);
  //       console.log(noticiasId);
  //     } else {
  //       throw new Error("Erro ao enviar a mensagem.");
  //     }
  //   }
  return (
    <NoticiasContext.Provider
      value={{
        getNoticias,
        noticias,
        getNoticiasId,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};
