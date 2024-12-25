import AuthForm from '@/components/auth/AuthForm'
import LoginForm from '@/components/auth/LoginForm'
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
    return (
        <section className='mx-auto'>
            <LoginForm>
                <AuthForm />
            </LoginForm>
            <Link
                href={"/auth/register"}
                className='mt-5 block text-blue-200'
            >¿No tienes una cuenta?</Link>
        </section>
    )
}
