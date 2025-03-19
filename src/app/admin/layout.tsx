import { verifySession } from "@/auth/dal";
import AdminNav from "@/components/ui/AdminNav";
import ToastNotification from "@/components/ui/ToastNotification";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = await verifySession();

    if (!user) {
        redirect("/auth/login");
    }

    return (
        <>
            <AdminNav />
     
            <div className="container mx-auto px-10 pt-24">
                <div className="bg-gray-300 shadow w-full mx-auto p-8 lg:w-4/5" >
                    {children}
                </div>
            </div>
            <ToastNotification />
        </>
    );
}