
import { verifySession } from "@/auth/dal";
import MainNav from "@/components/ui/MainNav";
import ToastNotification from "@/components/ui/ToastNotification";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user } = await verifySession()
    if (!user) {
        redirect("/auth/login")
    }
    return (
        <>
            <MainNav />
            <main className="mb-5">
                {children}
            </main>
            <ToastNotification />
        </>
    );
}
