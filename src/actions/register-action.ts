"use server";

import { ErrorResponseSchema, RegisterSchema } from "@/schemas";
import { cookies } from "next/headers";

type ActionStateType = {
  errors: string[];
  token: null | string;
};
export async function register(prevState: ActionStateType, formData: FormData) {
  const cookiesStore = await cookies();
  const register = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!register.success) {
    return {
      errors: register.error.issues.map((issue) => issue.message),
      token: null,
    };
  }

  const url = `${process.env.API_URL}/auth/register`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(register.data),
  });

  const json = await req.json(); //Respuesta

  if (!req.ok) {
    const errors = ErrorResponseSchema.parse(json);
    return {
      errors: errors.message.map((issue) => issue),
      token: null,
    };
  }
  cookiesStore.set("token", json.token);
  return {
    errors: [],
    token: json.token,
  };
}
