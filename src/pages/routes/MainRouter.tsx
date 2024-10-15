import {
  MemoryRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Login } from "../Login/login";
import { AuthProvider } from "@/context/AuthProvider";
import { Documentos } from "../modules/digitalizacao/documentos";
import { Configuracao } from "../modules/digitalizacao/configuracao";
import { Orgaos } from "../modules/digitalizacao/orgaos";
import { TiposDocumentos } from "../modules/digitalizacao/cadastros/tipo-documento";
import { Setores } from "../modules/digitalizacao/cadastros/setores";
import { Dashboard } from "../modules/_layout/layout";

export function MainRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardWithParams />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

function DashboardWithParams() {
  const { "*": dashboardParam } = useParams(); 

  return (
    <>
      <Dashboard />
      {dashboardParam === "orders" && <Documentos />}
      {dashboardParam === "orgaos" && <Orgaos />}
      {dashboardParam === "configuracao" && <Configuracao />}
      {dashboardParam === "tipos-documentos" && <TiposDocumentos />}
      {dashboardParam === "setores" && <Setores />}
    </>
  );
}
