import { useState } from "react";

export default function About() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <section
      aria-labelledby="sign-in-title"
      className="relative isolate flex flex-1 items-center justify-center overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-br from-emerald-100 via-teal-50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <svg
              aria-hidden="true"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 20a8 8 0 0 1 16 0"
              />
            </svg>
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            ChronoReact
          </p>
          <h1
            id="sign-in-title"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            ¡Bienvenido!
          </h1>
          <p className="mt-3 text-slate-600">
            Inicia sesión para continuar con tus compras.
          </p>
        </div>

        <form
          className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitMessage(
              "El acceso todavía no está disponible. Tus datos no se han enviado.",
            );
          }}
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                required
                className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Contraseña
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 transition hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  {showPassword ? (
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.3 4.3 9 7-.3 1.2-1.2 2.6-2.5 3.8M6.2 6.2C4.4 7.4 3.3 9.2 3 12c.7 2.7 4 7 9 7 1.1 0 2.1-.2 3-.6"
                      />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12c.7-2.7 4-7 9-7s8.3 4.3 9 7c-.7 2.7-4 7-9 7s-8.3-4.3-9-7Z"
                      />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              Mantener mi sesión iniciada
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 active:translate-y-px"
            >
              Iniciar sesión
            </button>
            {submitMessage && (
              <p
                aria-live="polite"
                className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800"
                role="status"
              >
                {submitMessage}
              </p>
            )}
          </div>

          <p className="mt-6 border-t border-slate-100 pt-5 text-center text-xs leading-5 text-slate-500">
            Tus datos se utilizan únicamente para acceder a tu cuenta.
          </p>
        </form>
      </div>
    </section>
  );
}
