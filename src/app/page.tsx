import Link from "next/link";

export default function page() {
    return (
        <> <nav className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10 max-w-3xl mx-auto">
            <Link
                href="/auth/register"
                className="text-white text-sm uppercase text-center"
            >¿No tienes cuenta? Crea una</Link>
            <Link
                href="/auth/login"
                className="text-white text-sm uppercase text-center"
            >¿Ya tienes cuenta? Iniciar Sesión</Link>
        </nav>
            <main className="max-w-4xl mx-auto p-10 space-y-5 mt-10 text-gray-200 shadow-lg shadow-white/50">
                <h1 className="font-black text-3xl lg:text-6xl text-center text-yellow-600">Proyecto POS</h1>
                <p className="text-3xl font-bold">Un sistema simple para <span className="text-blue-400">gestionar ventas</span></p>
                <p className="text-lg">Este proyecto es una demostración de mis habilidades con NestJS (backend) y Next.js (frontend). Se trata de un sistema básico de Point of Sale (POS) que permite registrar ventas, gestionar productos y visualizar transacciones de manera sencilla y eficiente.</p>

                <h2 className="font-black text-3xl text-blue-400">Características del Proyecto</h2>

                <ol className="grid grid-cols-1 gap-5 items-start">
                    <li className="p-5 shadow-lg text-lg bg-black/20 rounded-lg">
                        <span className="text-blue-200 font-black">Registro de Ventas: </span>
                        Interfaz intuitiva para registrar ventas rápidamente, con un formulario sencillo y eficiente.
                    </li>
                    <li className="p-5 shadow-lg text-lg bg-black/20 rounded-lg">
                        <span className="text-blue-200 font-black">Gestión de Productos: </span>
                        Añade, edita o elimina productos desde una interfaz amigable, con datos almacenados en una base de datos.
                    </li>
                    <li className="p-5 shadow-lg text-lg bg-black/20 rounded-lg">
                        <span className="text-blue-200 font-black">Listado de Transacciones: </span>
                        Visualiza un historial de todas las ventas realizadas, con detalles como fecha, productos y total.
                    </li>
                    <li className="p-5 shadow-lg text-lg bg-black/20 rounded-lg">
                        <span className="text-blue-200 font-black">Tecnologías Utilizadas: </span>
                        Backend con NestJS (API RESTful) y frontend con Next.js (renderizado del lado del servidor y enrutamiento dinámico).
                    </li>
                    <li className="p-5 shadow-lg text-lg bg-black/20 rounded-lg">
                        <span className="text-blue-200 font-black">Fácil de Usar: </span>
                        Diseño minimalista y enfocado en la usabilidad, ideal para demostrar habilidades de desarrollo full-stack.
                    </li>
                </ol>

                <h2 className="font-black text-3xl text-yellow-500">¿Por qué este proyecto?</h2>
                <p className="text-lg">Este proyecto es ideal para mostrar mis habilidades en el desarrollo de aplicaciones full-stack. Utiliza tecnologías modernas como NestJS para crear una API robusta y escalable, y Next.js para construir una interfaz rápida y dinámica. Además, es un ejemplo práctico de cómo resolver problemas reales con código limpio y eficiente.</p>
            </main>

            <nav className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10 pb-20 max-w-3xl mx-auto ">
                <Link
                    href="/auth/register"
                    className="text-white text-sm uppercase text-center"
                >¿No tienes cuenta? Crea una</Link>
                <Link
                    href="/auth/login"
                    className="text-white text-sm uppercase text-center"
                >¿Ya tienes cuenta? Iniciar Sesión</Link>
            </nav>
        </>
    )
}
