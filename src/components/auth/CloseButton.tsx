import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function CloseButton() {

    const handleLogout = async () => {
        "use server"
        const cookiesStore = await cookies()
        cookiesStore.delete("POSTNESTNEXT_TOKEN")
        redirect("/")
    };

    return (
        <>
            <form action={handleLogout}>
                <button
                    className="text-white text-sm relative bg-blue-950/90 hover:bg-blue-900 p-2 rounded-lg"
                    aria-label="Cerrar sesión"
                    title="Cerrar sesión"
                    type="submit"
                >
                    Cerrar Sesión
                </button>
            </form>
        </>
    )


}