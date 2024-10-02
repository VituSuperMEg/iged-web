import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { Separator } from "@/components/ui/separator";
import { Formik, Form, Field } from "formik";

export function Documentos() {
  return (
    <div className="flex flex-col max-w-full">
      <h6>Pesquisa</h6>
      <Separator className="bg-zinc-200 w-full h-[0.1px] mt-2" />
      <Formik initialValues={{ num: "" }} onSubmit={() => {}}>
        {({}) => (
          <Form className="mt-6 flex-wrap flex gap-10">
            <Field
              label="Núm. do processo"
              component={LabelAndInput}
              width="w-52"
            />
            <Field
              label="Núm. da Licitação"
              component={LabelAndInput}
              width="w-52"
            />
            <Field
              label="Data Inicial"
              component={LabelAndInput}
              width="w-52"
              type="date"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
