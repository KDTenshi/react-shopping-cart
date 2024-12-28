import { FC } from "react";
import "../style/App.css";
import Header from "../../components/Header/Header";
import { ItemsList } from "../../components/Items";
import Cart from "../../components/Cart/Cart";

const App: FC = () => {
  return (
    <main className="App">
      <Header />
      <ItemsList />
      <Cart />
    </main>
  );
};

export default App;
