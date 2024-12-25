
export default function AuthForm() {
  return (
    <>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-yellow-100"
        >Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-yellow-100"
        >Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*********"
          className="border border-gray-300 w-full p-2"
        />
      </div>
    </>
  )
}
