"use server";

import { ErrorResponseSchema, RegisterSchema, TokenSchema } from "@/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateType = {
  errors: string[];
};
export async function register(prevState: ActionStateType, formData: FormData) {
  const register = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!register.success) {
    return {
      errors: register.error.issues.map((issue) => issue.message),
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
    };
  }

  const { token } = TokenSchema.parse(json);
  const cookiesStore = await cookies();

  cookiesStore.set("POSTNESTNEXT_TOKEN", token, {
    httpOnly: true,
    path: "/",
  });

  redirect("/1");
}
