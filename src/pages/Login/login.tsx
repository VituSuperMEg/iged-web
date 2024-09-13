import { Button } from "@/components/my/Button";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import { api } from "@/services/api";
import useAuthStore from "@/store/useAuth";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as y from "yup";

const LoginSchema = y.object().shape({
  login: y.string().required("Login é obrigatório"),
  password: y.string().required("Senha é obrigatória"),
});

export function Login() {
  const setToken = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="grid gap-4">
            <Formik
              initialValues={{
                login: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                const res = await api.post("/login", {
                  login: values.login,
                  pass: values.password,
                });
                setToken(res.data.session);
                navigate("/dashboard");
                setSubmitting(false);
              }}
            >
              {({ handleChange, handleSubmit, isSubmitting, errors }) => (
                <Form onSubmit={handleSubmit}>
                  <Field
                    id="login"
                    label="Login"
                    name="login"
                    required
                    autoFocus
                    component={LabelAndInput}
                    onChange={handleChange}
                    erros={errors.login}
                  />
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    label="Password"
                    required
                    component={LabelAndInput}
                    onChange={handleChange}
                    erros={errors.password}
                  />
                  <br />
                  <Button
                    label="Entrar"
                    variant="success"
                    type="submit"
                    isSubmitting={isSubmitting}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <div className="bg-zinc-950 h-screen flex items-end justify-end p-10">
          <small className="text-zinc-500">Ⓡ Todos os direitos à w2e</small>
        </div>
      </div>
    </div>
  );
}
