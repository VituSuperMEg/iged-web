import { Crud } from "@/components/my/Crud/crud";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { ErrorMessage, Field } from "formik";

export function TiposDocumentos() {
  return (
    <Crud
      displayName="Tipo Documento"
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
      FormWrapper={(props) => (
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
            autoFocus
            required
            component={LabelAndInput}
            messagesErros={props.errors.descricao}
          />
        </div>
      )}
      validationSchema={(y) => {
        return {
          descricao: y.string().required("Campo Obrigatório")
        };
      }}
      endPoint="/api/v1/tipos-documentos"
    />
  );
}
