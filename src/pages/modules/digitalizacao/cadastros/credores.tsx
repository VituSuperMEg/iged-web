import { Crud } from "@/components/my/Crud/crud";
import { Combobox } from "@/components/my/forms/combox";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { LabelAndTextarea } from "@/components/my/forms/labelAndTexteare";
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
        <div className="flex gap-2 flex-wrap" style={{ marginTop: -40 }}>
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
            <h6>Enderaçamento</h6>
            <Separator className="bg-zinc-100" />
            <Field
              id="logradouro"
              name="logradouro"
              label="Logradouro"
              width="w-[500px]"
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
              width="w-[500px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="bairro" />}
            />
            <Field
              id="cep"
              name="cep"
              label="CEP"
              width="w-[200px]"
              mask="99.999-999"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="cep" />}
            />
            <Field
              id="cidade"
              name="cidade"
              label="Cidade"
              width="w-[200px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="cidade" />}
            />
            <Field
              id="email"
              name="email"
              label="E-mail"
              width="w-[350px]"
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="email" />}
            />
            <Field
              id="telefone"
              name="telefone"
              label="Telefone"
              width="w-[200px]"
              mask="(99) 999999999"
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="telefone" />}
            />
            <Field
              id="telefone_complementar"
              name="telefone_complementar"
              label="Telefone Complementar"
              width="w-[230px]"
              mask="(99) 999999999"
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="telefone_complementar" />}
            />
          </Row>
          <Row>
            <h6>Conta Bancária</h6>
            <Separator className="bg-zinc-100" />
            <Field
              id="banco"
              label="Bancos"
              path="bancos"
              width="w-[250px]"
              component={Combobox}
              messagesErros={<ErrorMessage name="banco" />}
            />
            <Field
              id="agencia"
              name="agencia"
              label="Agência"
              width="w-[250px]"
              mask="9999"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="agencia" />}
            />
            <Field
              id="conta"
              name="conta"
              label="Conta"
              mask="9999999-9"
              width="w-[250px]"
              required
              component={LabelAndInput}
              messagesErros={<ErrorMessage name="conta" />}
            />
          </Row>
          <Row>
            <Field
              id="observacoes"
              name="observacoes"
              label="Observações"
              component={LabelAndTextarea}
            />
          </Row>
        </div>
      )}
      validationSchema={(y: any) => {
        return {
          nome: y.string().required("Campo Obrigatório"),
          cpf: y.string().required("Campo Obrigatório"),
          logradouro: y.string().required("Campo Obrigatório"),
          numero: y.string().required("Campo Obrigatório"),
          bairro: y.string().required("Campo Obrigatório"),
          cep: y.string().required("Campo Obrigatório"),
          banco: y.string().required("Campo Obrigatório"),
          agencia: y.string().required("Campo Obrigatório"),
          conta: y.string().required("Campo Obrigatório"),
        };
      }}
    />
  );
}
