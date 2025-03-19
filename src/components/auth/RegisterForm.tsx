"use client"

import { useActionState, useEffect } from "react";
import { register } from "@/actions/register-action";
import { toast } from "react-toastify";

export default function RegisterForm({ children }: { children: React.ReactNode }) {
  const [state, dispatch, isPending] = useActionState(register, {
    errors: []
  })

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach(error => toast.error(error))
    }
  }, [state.errors])

  return (
    <form
      className="space-y-5 sm:w-96 w-72 bg-white p-6 mx-auto rounded-md bg-opacity-10 border border-gray-100"
      action={dispatch}
    >
      {children}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-yellow-100"
        >Username</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ej. Luis"
          className="border border-gray-300 w-full p-2"
        />
      </div>
      <input
        type="submit"
        className="bg-black bg-opacity-40 hover:bg-opacity-70 cursor-pointer p-3 w-full font-bold text-white disabled:cursor-auto"
        disabled={isPending}
        value={"Registrar"}
      />
    </form>
  )
}
