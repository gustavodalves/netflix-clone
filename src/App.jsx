import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/components/AppRoutes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
