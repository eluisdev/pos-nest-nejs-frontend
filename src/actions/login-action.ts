"use server";

import { ErrorResponseSchema, LoginSchema } from "@/schemas";
import { cookies } from "next/headers";

type ActionStateType = {
  errors: string[];
  token: null | string;
  rol: null | string;
};
export async function login(prevState: ActionStateType, formData: FormData) {
  const cookiesStore = await cookies();
  const login = LoginSchema.safeParse({
    password: formData.get("password"),
    email: formData.get("email"),
  });
  if (!login.success) {
    return {
      errors: login.error.issues.map((issue) => issue.message),
      token: null,
      rol: null,
    };
  }

  const url = `${process.env.API_URL}/auth/login`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login.data),
  });

  const json = await req.json();

  if (!req.ok) {
    const errors = ErrorResponseSchema.parse(json);
    return {
      errors: errors.message.map((issue) => issue),
      token: null,
      rol: null,
    };
  }
  cookiesStore.set("token", json.token);
  return {
    errors: [],
    token: json.token,
    rol: json.rol,
  };
}
