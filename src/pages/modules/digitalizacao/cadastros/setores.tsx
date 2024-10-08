import { Crud } from "@/components/my/Crud/crud";
import { Combobox } from "@/components/my/forms/combox";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { ErrorMessage, Field } from "formik";

export function Setores() {
  return (
    <Crud
      displayName="Setores"
      emptyObject={{
        id: "",
        descricao: "",
        unidade_orcamentaria_id: "",
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
      ]}
      FormWrapper={() => (
        <div className="flex gap-2 flex-wrap max-w-full">
          <Field
            id="id"
            name="id"
            label="Código"
            disabled
            component={LabelAndInput}
          />
          <Field
            id="descricao"
            name="descricao"
            label="Descrição"
            width="w-[700px]"
            required
            component={LabelAndInput}
            messagesErros={<ErrorMessage name="descricao" />}
          />
          <Field
            id="unidade_orcamentaria_id"
            label="Unidade Orcamentaria"
            path="unidade-orcamentaria"
            width="w-1/4"
            component={Combobox}
            required
            messagesErros={<ErrorMessage name="unidade_orcamentaria_id" />}
          />
        </div>
      )}
      validationSchema={(y: any) => {
        return {
          descricao: y.string().required("Campo Obrigatório"),
          unidade_orcamentaria_id: y.string().required("Campo Obrigatório"),
        };
      }}
      endPoint="/api/v1/setores"
    />
  );
}
