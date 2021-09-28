import Joi from "joi";

const NewUserSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(6),
  confirmPassword: Joi.ref("password"),
});

export { NewUserSchema };
