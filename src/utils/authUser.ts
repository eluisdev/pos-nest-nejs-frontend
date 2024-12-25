import { TokenSchema } from "@/schemas";
import { cookies } from "next/headers";

export async function getUser() {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token")?.value;
    const url = `${process.env.API_URL}/auth/profile`;
    const req = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const json = await req.json();
    const userToken = TokenSchema.parse(json);
    const user = {
      userId: userToken.userId,
      username: userToken.username,
      rol: userToken.rol,
    };
    return user;
  } catch {
    return null;
  }
}
