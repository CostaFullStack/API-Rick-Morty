import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Organism/Layout";
import { Characters } from "./pages/Characters";
import { Character } from "./pages/Character";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";
import { NotFound } from "./pages/Error";
import { GlobalStyles } from "./utils/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Characters />} />
          <Route path="/personagem/:id" element={<Character />} />
          <Route path="episodios" element={<Episodes />} />
          <Route path="localizacoes" element={<Locations />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
