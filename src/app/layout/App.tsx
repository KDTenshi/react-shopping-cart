import { FC } from "react";
import "../style/App.css";
import Header from "../../components/Header/Header";
import { ItemsList } from "../../components/Items";

const App: FC = () => {
  return (
    <main className="App">
      <Header />
      <ItemsList />
    </main>
  );
};

export default App;
