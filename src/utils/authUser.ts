import { UserSchema } from "@/schemas";
import { cookies } from "next/headers";

export async function getUser() {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value;
    const url = `${process.env.API_URL}/auth/profile`;
    const req = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await req.json();
    const userJSON = UserSchema.parse(json);
    const user = {
      userId: userJSON.id,
      username: userJSON.name,
      rol: userJSON.rol,
      email: userJSON.email,
    };
    return user;
  } catch {
    return null;
  }
}
