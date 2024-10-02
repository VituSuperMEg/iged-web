import { Crud } from "@/components/my/Crud/crud";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { Field } from "formik";

const emptyObejct = {
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
};
export function Orgaos() {
  return (
    <Crud
      displayName="Unidade Orcamentárias"
      emptyObject={emptyObejct}
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
          <Field
            id="id"
            name="id"
            label="Código"
            width="w-24"
            component={LabelAndInput}
            disabled
          />
          <Field
            id="descricao"
            name="descricao"
            label="Descrição"
            width="w-[850px]"
            required="required"
            component={LabelAndInput}
          />
          <Field
            id="cnpj"
            name="cnpj"
            label="Cnpj"
            width="w-[200px]"
            required="required"
            component={LabelAndInput}
          />
          <Field
            id="responsavel"
            name="responsavel"
            label="Responsável"
            width="w-[350px]"
            required="required"
            component={LabelAndInput}
          />
          <Field
            id="cod_orgao"
            name="cod_orgao"
            label="Cod.Orgao"
            width="w-[140px]"
            required="required"
            component={LabelAndInput}
          />
          <Field
            id="cod_unidade_orcamentaria"
            name="cod_unidade_orcamentaria"
            label="Cod.Unidade Orc"
            width="w-[180px]"
            required="required"
            component={LabelAndInput}
          />
        </div>
      )}
      validationSchema={() => {
        return {};
      }}
      endPoint="/api/v1/unidade-orcamentaria"
    />
  );
}
