"use client"

import { login } from "@/actions/login-action"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function LoginForm({ children }: { children: React.ReactNode }) {

  const router = useRouter()
  const [state, dispatch] = useActionState(login, {
    errors: [],
    token: null,
    rol: null
  })

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error))
    }
  }, [state, router])

  return (
    <form className="space-y-5 sm:w-96 w-72 bg-white p-6 mx-auto rounded-md bg-opacity-10 border border-gray-100" action={dispatch}>
      {children}
      <input
        type="submit"
        className="bg-black bg-opacity-40 hover:bg-opacity-70 cursor-pointer p-3 w-full font-bold text-white"
        value={"Ingresar"}
      />
    </form>
  )
}