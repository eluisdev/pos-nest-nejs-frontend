
import ClientWrapper from "@/components/auth/ClientWrapper";
import MainNav from "@/components/ui/MainNav";
import ToastNotification from "@/components/ui/ToastNotification";
import { getUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser()
    if (!user) {
        redirect("/auth/login")
    }

    return (
        <>
            <MainNav />
            <ClientWrapper user={user}>
                <main>
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </ClientWrapper>

            <ToastNotification />
        </>
    );
}
