import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import FormButtons from "./helpers/form-buttons";

export function Form(props: any) {
  return (
    <>
      {props.FormWrapper && (
        <Formik
          enableReinitialize
          initialValues={props.emptyObject}
          validate={props.validate}
          validationSchema={yup.object().shape({ ...props.validation(yup) })}
          onSubmit={(values, objects) => {
            props.handleSubmit(values, objects);
          }}
        >
          {(objects) => (
            <form>
              <props.FormWrapper
                {...objects}
                ErrorMessage={ErrorMessage}
                Field={Field}
                view={props.status}
                setVisibleBtns={props.setVisibleBtns}
              />
              {props.enableBtns && props.visibleBtns && (
                <FormButtons
                  {...props}
                  handleSave={objects.submitForm}
                  handleReset={objects.handleReset}
                />
              )}
            </form>
          )}
        </Formik>
      )}
    </>
  );
}
