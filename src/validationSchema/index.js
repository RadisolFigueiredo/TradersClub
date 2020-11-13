import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required("Descrição do veículo obrigatório"),
  model: yup.string().required("Informe o modelo"),
  brand: yup.string().required("Selecione a marca"),
  year: yup.number().positive().min(1500, 'Insira um ano válido').max(2020, 'Insira um ano válido').required("Informe o ano"),
  color: yup.string().required("Informe a cor"),
  km: yup.number().positive().required("Informe a quilometragem"),
  price: yup.number().positive().required("Informe o preço"),
});
