import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  // Quando se exporta sem o default, quem usa esse componente necessariamente deve usar esse nome.
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
