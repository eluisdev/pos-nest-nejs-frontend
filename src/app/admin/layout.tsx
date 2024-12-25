import AdminNav from "@/components/ui/AdminNav";
import ToastNotification from "@/components/ui/ToastNotification";
import { getUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = await getUser();
    if (!user) {
        redirect("/auth/login");
    }
    if (user.rol !== 'admin') {
        redirect("/1");
    }

    return (
        <>
            <AdminNav />
            <div className="lg:min-h-screen container mx-auto mt-10 px-10 lg:px-0 ">
                <div className="bg-gray-300 shadow w-full mx-auto p-10 my-10 lg:w-3/5" >
                    {children}
                </div>
            </div>
            <ToastNotification />
        </>
    );
}