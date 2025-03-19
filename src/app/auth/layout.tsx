import ToastNotification from "@/components/ui/ToastNotification";

export default async function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <div className="grid md:grid-cols-2 h-screen items-center px-10">
                {children}
                <div className="text-center max-md:hidden">
                    <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-100">POS {''} <br />
                        <span className="text-5xl text-blue-300 md:text-7xl font-light">Next.js / NestJS</span>
                    </h1>
                </div>
            </div>
            <ToastNotification />
        </>
    );
}