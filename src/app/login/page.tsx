export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md p-8 border rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4"
        />

        <button
          className="
            w-full
            bg-orange-600
            text-white
            py-3
            rounded-lg
          "
        >
          Login
        </button>

      </div>

    </div>
  );
}