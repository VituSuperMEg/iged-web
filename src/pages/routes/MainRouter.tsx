import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../Login/login";
import { AuthProvider } from "@/context/AuthProvider";
import { Documentos } from "../modules/digitalizacao/documentos";
import { Configuracao } from "../modules/digitalizacao/configuracao";
import { UnidadeOrcamentaria } from "../modules/digitalizacao/cadastros/unidade-orcamentaria";
import { TiposDocumentos } from "../modules/digitalizacao/cadastros/tipo-documento";
import { Setores } from "../modules/digitalizacao/cadastros/setores";
import { Dashboard } from "../modules/_layout/layout";
import { Credores } from "../modules/digitalizacao/cadastros/credores";
import { Salas } from "../modules/digitalizacao/cadastros/salas";
import { Caixas } from "../modules/digitalizacao/cadastros/caixas";
import { Estantes } from "../modules/digitalizacao/cadastros/estantes";

export function MainRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="orders" element={<Documentos />} />
            <Route path="orgaos" element={<UnidadeOrcamentaria />} />
            <Route path="configuracao" element={<Configuracao />} />
            <Route path="tipos-documentos" element={<TiposDocumentos />} />
            <Route path="setores" element={<Setores />} />
            <Route path="credores" element={<Credores />} />
            <Route path="salas" element={<Salas />} />
            <Route path="caixas" element={<Caixas />} />
            <Route path="estantes" element={<Estantes />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
