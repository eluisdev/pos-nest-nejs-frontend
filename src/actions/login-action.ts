"use server";

import { ErrorResponseSchema, LoginSchema, TokenSchema } from "@/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateType = {
  errors: string[];
};
export async function login(prevState: ActionStateType, formData: FormData) {
  const login = LoginSchema.safeParse({
    password: formData.get("password"),
    email: formData.get("email"),
  });
  if (!login.success) {
    return {
      errors: login.error.issues.map((issue) => issue.message),
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
    };
  }
  // POSTNESTNEXT_TOKEN
  const { token } = TokenSchema.parse(json);
  const cookiesStore = await cookies();

  cookiesStore.set("POSTNESTNEXT_TOKEN", token, {
    httpOnly: true,
    path: "/",
  });
  redirect("/1");
}
