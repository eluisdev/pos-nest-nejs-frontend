import AuthForm from "@/components/auth/AuthForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <section className="mx-auto">
            <RegisterForm>
                <AuthForm />
            </RegisterForm>
            <Link
                href={"/auth/login"}
                className="mt-5 block text-blue-200"
            >¿Ya tienes una cuenta?</Link>
        </section>
    )
}
