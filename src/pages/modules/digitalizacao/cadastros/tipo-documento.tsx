import { Crud } from "@/components/my/Crud/crud";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { Field } from "formik";

export function TiposDocumentos() {
  return (
    <Crud
      displayName="Tipo Documento"
      emptyObject={{
        alterado_em: "",
        alterado_por: "",
        ativo: "",
        cnpj: "",
        cod_orgao: "",
        cod_unidade_orcamentaria: "",
        criado_em: "",
        criado_por: "",
        descricao: "",
        id: "",
        responsavel: "",
      }}
      fields={[
        {
          label: "Código",
          name: "id",
        },
        {
          label: "Descrição",
          name: "descricao",
        },
        {
          label: "CNPJ",
          name: "cnpj",
        },
        {
          label: "Responsavel",
          name: "responsavel",
        },
        {
          label: "Ativo",
          name: "ativo",
        },
      ]}
      FormWrapper={() => (
        <div className="flex gap-2 flex-wrap max-w-full">
       
        </div>
      )}
      validationSchema={(y) => {
        return {
          
        };
      }}
      endPoint="/api/v1/tipos-documentos"
    />
  );
}
