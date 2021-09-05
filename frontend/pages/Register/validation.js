import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Nome é obrigatório"),
  lastName: Yup.string().required("Sobrenome é obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("Adicione um e-mail"),
  password: Yup.string()
    .required("Senha inválida")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: Yup.string()
    .required("Por favor, confirme a senha")
    .oneOf([Yup.ref("password")], "Senha e confirmação de senham não conferem"),
});
