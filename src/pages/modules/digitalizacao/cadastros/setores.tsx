import { Crud } from "@/components/my/Crud/crud";
import { Filter } from "@/components/my/forms/filter";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { ErrorMessage, Field } from "formik";

export function Setores() {
  return (
    <Crud
      displayName="Setores"
      emptyObject={{
        id: "",
        descricao: "",
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
            erros={<ErrorMessage name="descricao" />}
          />
          <Filter  width="w-[300px]" path="unidade-orcamentaria" label="Unidade Orcamentaria" />
        </div>
      )}
      validationSchema={(y) => {
        return {
          descricao: y.string().required("Campo Obrigatório"),
        };
      }}
      endPoint="/api/v1/setores"
    />
  );
}
