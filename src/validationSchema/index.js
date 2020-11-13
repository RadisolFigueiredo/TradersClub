import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('Descrição do veículo obrigatório'),
  model: yup.string().required('Informe o modelo'),
  brand: yup.string().required('Selecione a marca'),
  year: yup.number().required('Informe o ano'),
  color: yup.string().required('Informe a cor'),
  km: yup.number().required('Informe a quilometragem'),
  price: yup.number().required('Informe o preço'),
});
