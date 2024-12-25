"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  const cookiesStore = await cookies();
  cookiesStore.set("token", "", { maxAge: 0 });
  redirect("/auth/login");
};
