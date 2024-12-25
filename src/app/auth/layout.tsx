import ToastNotification from "@/components/ui/ToastNotification";
import { getUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

export default async function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const user = await getUser()

    if (user?.rol === "client") {
        redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/1` || "/1")
    }

    if (user?.rol === "admin") {
        redirect(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/sales` || "/admin/sales")
    }
    return (
        <>
            <div className="grid md:grid-cols-2 h-screen items-center px-10">
                {children}
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-100">POS {''} <br />
                        <span className="text-5xl text-blue-300 md:text-7xl font-light">Next.js / NestJS</span>
                    </h1>
                </div>
            </div>
            <ToastNotification />
        </>
    );
}