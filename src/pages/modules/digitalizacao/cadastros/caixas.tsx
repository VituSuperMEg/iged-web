import { Crud } from "@/components/my/Crud/crud";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { ErrorMessage, Field } from "formik";

export function Caixas() {
  return (
    <Crud
      endPoint="/api/v1/caixas"
      displayMenu="Cadastros"
      displayName="Caixas"
      emptyObject={{
        id: "",
        descricao: "",
      }}
      fields={[
        {
          name: "id",
          label: "Código",
        },
        {
          name: "descricao",
          label: "Descrição",
        },
      ]}
      FormWrapper={() => (
        <div className="flex gap-2 flex-wrap" style={{ marginTop: -40 }}>
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
        </div>
      )}
      validationSchema={(y: any) => {
        return {
          descricao: y.string().required("Campo Obrigatório"),
        }
      }}
    />
  );
}
