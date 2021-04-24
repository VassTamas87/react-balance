import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  item: Yup.string().max(100, "Túl hosszú!").required("Kötelező"),
  price: Yup.number().positive("Nem lehet negatív!").required("Kötelező"),
  type: Yup.string().required("Kötelező"),
});

export default SignupSchema;
