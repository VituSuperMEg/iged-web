import { Crud } from "@/components/my/Crud/crud";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { ErrorMessage, Field } from "formik";

export function Estantes() {
  return (
    <Crud
      endPoint="/api/v1/estantes"
      displayMenu="Cadastros"
      displayName="Estantes"
      emptyObject={{
        id: "",
        descricao: "",
      }}
      fields={[
        { label: "Código", name: "id" },
        { label: "Descrição", name: "descricao" },
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
          descricao: y.string().required("Campo obrigatório"),
        };
      }}
    />
  );
}
