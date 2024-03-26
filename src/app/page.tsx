import Header from "../header/header.js";
import History from "../history/history.js";
import Add from "../add/add.js";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <History />
      <Add />
      </main>

  );
}
