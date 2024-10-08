import { Crud } from "@/components/my/Crud/crud";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { ErrorMessage, Field } from "formik";

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
            messagesErros={<ErrorMessage name="descricao" />}
          />
          <Field
            id="cnpj"
            name="cnpj"
            label="Cnpj"
            width="w-[200px]"
            mask="99.999.999/9999-99"
            required="required"
            component={LabelAndInput}
            messagesErros={<ErrorMessage name="cnpj" />}
          />
          <Field
            id="responsavel"
            name="responsavel"
            label="Responsável"
            width="w-[350px]"
            required="required"
            component={LabelAndInput}
            messagesErros={<ErrorMessage name="responsavel" />}
          />
          <Field
            id="cod_orgao"
            name="cod_orgao"
            label="Cod.Orgao"
            width="w-[140px]"
            required="required"
            component={LabelAndInput}
            messagesErros={<ErrorMessage name="cod_orgao" />}
          />
          <Field
            id="cod_unidade_orcamentaria"
            name="cod_unidade_orcamentaria"
            label="Cod.Unidade Orc"
            width="w-[180px]"
            required="required"
            component={LabelAndInput}
            messagesErros={<ErrorMessage name="cod_unidade_orcamentaria" />}
          />
        </div>
      )}
      validationSchema={(y: any) => {
        return {
          descricao: y.string().required("Campo Obrigatório"),
          cnpj: y.string().required("Campo Obrigatório"),
          responsavel: y.string().required("Campo Obrigatório"),
          cod_orgao: y.number().required("Campo Obrigatório"),
          cod_unidade_orcamentaria: y.number().required("Campo Obrigatório"),
        };
      }}
      endPoint="/api/v1/unidade-orcamentaria"
    />
  );
}
