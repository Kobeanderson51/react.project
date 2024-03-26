"use client"
import { ModalProvider } from "styled-react-modal";
import Header from "../header/header.js";
import History from "../history/history.js";
import Add from "../add/add.js";


export default function Home() {
  return (
    <ModalProvider>
      <main className="flex flex-col">
        <Header />
        <History />
        <Add />
      </main>
    </ModalProvider>


  );
}
