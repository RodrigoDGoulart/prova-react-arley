import { Provider } from "./contexts/Contexto";
import TemaProvider from "./contexts/Tema";
import Principal from "./pages/Principal";

export default function App() {
  return (
    <TemaProvider>
      <Provider>
        <Principal />
      </Provider>
    </TemaProvider>
  );
}

