import { Button } from "@/components/my/Button";
import { LabelAndInput } from "@/components/my/forms/labelAndInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm bg-center w-3/6">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
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
              console.log(res.data.error)
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
                  isUpperCase="none"
                  component={LabelAndInput}
                  onChange={handleChange}
                  messagesErros={errors.login}
                />
                <br />
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Password"
                  required
                  component={LabelAndInput}
                  onChange={handleChange}
                  messagesErros={errors.password}
                />
                <br />
                <Button
                  label="Entrar"
                  variant="success"
                  type="submit"
                  isSubmitting={isSubmitting}
                />
                <div className="mt-4 text-center text-sm">Primeiro Acesso?</div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
