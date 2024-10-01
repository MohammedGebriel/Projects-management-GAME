import { GlobalProvider } from "./context/GlobalContext";
import AllRoutesProvider from "./routing/AllRoutes";


export default function App() {
  return (
    <GlobalProvider>
      <AllRoutesProvider />
    </GlobalProvider>
  )
}
