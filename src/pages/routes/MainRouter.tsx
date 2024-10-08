import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="orders" element={<Documentos />} />
            <Route path="orgaos" element={<Orgaos />} />
            <Route path="configuracao" element={<Configuracao />} />
            <Route path="tipos-documentos" element={<TiposDocumentos />} />
            <Route path="setores" element={<Setores />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
