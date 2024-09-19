import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../Login/login";
import { AuthProvider } from "@/context/AuthProvider";
import { Documentos } from "../modules/digitalizacao/documentos";
import { Dashboard } from "../modules/digitalizacao/dashborad";
import { Configuracao } from "../modules/digitalizacao/configuracao";
import { Orgaos } from "../modules/digitalizacao/orgaos";
import { TiposDocumentos } from "../modules/digitalizacao/cadastros/tipo-documento";

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

            {/* Adicione outras rotas aninhadas aqui */}
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
