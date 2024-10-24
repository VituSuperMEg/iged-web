import { Button } from "@/components/my/Button";
import { Content } from "@/components/my/content";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { Row } from "@/components/my/Row";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";

export function Documentos() {
  const [codDoc, setCodDoc] = useState("");
  const [codData, setCodData] = useState("");
  const [exercicioData, setExercicioData] = useState("");
  const [mesRef, setMesRef] = useState("");

  useEffect(() => {
    const split = codData.split("-");
    setExercicioData(split[0]);
    setMesRef(split[1]);
    setCodDoc("2023");
  }, [codData]);

  return (
    <Content displayMenu="Documentos" displayName="Documentos">
      <Formik
        enableReinitialize
        initialValues={{
          codigo_doc: codDoc,
          exercicio_doc: exercicioData,
          mes_ref: mesRef,
        }}
        onSubmit={() => {}}
      >
        {({ submitForm }) => (
          <Form className="mt-5">
            <Row>
              <Field
                name="codigo_doc"
                id="codigo_doc"
                label="Data do documento"
                component={LabelAndInput}
                required
                disabled
              />
              <Field
                name="data_doc"
                type="date"
                label="Data do documento"
                required
                component={LabelAndInput}
                onChange={(e: any) => setCodData(e.target.value)}
              />
              <Field
                name="exercicio_doc"
                id="exercicio_doc"
                label="Excercio"
                component={LabelAndInput}
                required
              />
              <Field
                name="mes_ref"
                id="mes_ref"
                label="Mês Ref"
                component={LabelAndInput}
                required
              />
              <Button  label="Cadastrar" onClick={submitForm} />
            </Row>
          </Form>
        )}
      </Formik>
    </Content>
  );
}
