import { Crud } from "@/components/my/Crud/crud";
import { Combobox } from "@/components/my/forms/combox";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { Row } from "@/components/my/Row";
import { Separator } from "@/components/ui/separator";
import { ErrorMessage, Field } from "formik";

export function Credores() {
  return (
    <Crud
      endPoint="/api/v1/credores"
      displayMenu="Cadastros"
      displayName="Credores"
      emptyObject={{
        id: "",
        nome: "",
        tipo_documento: "",
        cpf: "",
        logradouro: "",
        numero: "",
        cep: "",
        email: "",
        cidade: "",
        telefone: "",
        telefone_complementar: "",
        banco: "",
        agencia: "",
        conta: "",
        observacoes: "",
        bairro: "",
      }}
      fields={[
        {
          label: "Código",
          name: "id",
        },
        {
          label: "Nome",
          name: "nome",
        },
        {
          label: "CPF",
          name: "cpf",
        },
      ]}
      FormWrapper={() => (
        <div className="flex gap-2 flex-wrap">
          <h6>Dados Funcionais</h6>
          <Separator className="bg-zinc-100" />
          <Row>
            <Field
              id="id"
              name="id"
              label="Código"
              disabled
              component={LabelAndInput}
            />
            <Field
              id="nome"
              name="nome"
              label="Nome"
              width="w-[500px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="nome" />}
            />
            <Field
              id="tipo_documento"
              label="Tipos de Documentos"
              path="tipos-documentos"
              width="w-[250px]"
              component={Combobox}
              disabled
            />
            <Field
              id="cpf"
              name="cpf"
              label="CPF"
              mask="999.999.999-99"
              width="w-[200px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="cpf" />}
            />
          </Row>
          <Row>
            <h6>Dados de Endereço</h6>
            <Separator className="bg-zinc-100" />
            <Field
              id="logradouro"
              name="logradouro"
              label="Logradouro"
              width="w-[400px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="logradouro" />}
            />
            <Field
              id="numero"
              name="numero"
              label="Número"
              width="w-[150px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="cpf" />}
            />
            <Field
              id="bairro"
              name="bairro"
              label="Bairro"
              width="w-[400px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="bairro" />}
            />
          </Row>
        </div>
      )}
      validationSchema={(y: any) => {
        return {
          nome: y.string().required("Campo Obrigatório"),
        };
      }}
    />
  );
}
