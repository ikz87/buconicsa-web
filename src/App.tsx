import { motion } from "motion/react"
import { 
  ChartNoAxesCombined,
  DollarSign,
} from "lucide-react";


function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/*Navigation */}
      <nav className="bg-white border-b-2  shadow-xl fixed w-full top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 gap-2 flex justify-between items-center">
          <div className="flex flex-row gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold text-slate-800 pr-2">BUCONIC, SA</h1>
            <motion.a 
              href="https://wa.me/50588123313"
              initial={{ 
                backgroundColor: "#7BF1A8",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}
              animate={{ 
                backgroundColor: "#7BF1A8", 
                scale: 1,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 } 
              }}
              whileHover={{
                backgroundColor: "#22c55e",
                scale: 1.05,
                boxShadow: "0 4px 16px rgba(34, 197, 94, 0.4)",
                transition: { duration: 0.15 },
              }}
              className="bg-rose-300 cursor-pointer rounded-full p-2 border-0 hidden md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/buconic_sa/"
              initial={{ 
                backgroundColor: "#fda4af",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
              }}
              animate={{ 
                backgroundColor: "#fda4af", 
                scale: 1,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 } 
              }}
              whileHover={{
                backgroundColor: "#f43f5e",
                scale: 1.05,
                boxShadow: "0 4px 16px rgba(244, 63, 94, 0.4)",
                transition: { duration: 0.15 },
              }}
              className="bg-green-300 cursor-pointer rounded-full p-2 border-0 hidden md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </motion.a>
          </div>
          <motion.a
            href="#contacto"
            className="bg-blue-200 text-slate-800 cursor-pointer border-2 px-6 py-2 rounded-lg"
            initial={{ 
              backgroundColor: "#bfdbfe",
            }}
            animate={{ 
              backgroundColor: "#bfdbfe", 
              scale: 1,
              transition: { duration: 0.3 } 
            }}
            whileHover={{
              backgroundColor: "#60a5fa",
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            Contáctanos
          </motion.a>
        </div>
      </nav>

      {/* Floating Social Media Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 md:hidden">
        <motion.a 
          href="https://wa.me/50588123313"
          initial={{ 
            backgroundColor: "#7BF1A8",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
          animate={{ 
            backgroundColor: "#7BF1A8", 
            scale: 1,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 } 
          }}
          whileHover={{
            backgroundColor: "#22c55e",
            scale: 1.1,
            boxShadow: "0 6px 20px rgba(34, 197, 94, 0.5)",
            transition: { duration: 0.15 },
          }}
          className="bg-rose-300 cursor-pointer rounded-full p-3 border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/buconic_sa/"
          initial={{ 
            backgroundColor: "#fda4af",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
          }}
          animate={{ 
            backgroundColor: "#fda4af", 
            scale: 1,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.3 } 
          }}
          whileHover={{
            backgroundColor: "#f43f5e",
            scale: 1.1,
            boxShadow: "0 6px 20px rgba(244, 63, 94, 0.5)",
            transition: { duration: 0.15 },
          }}
          className="bg-green-300 cursor-pointer rounded-full p-3 border-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
        </motion.a>
      </div>

      {/*hacky padding*/}
      <div className="h-1">
      </div>

      {/* Hero Section */}
      <section className="mt-36 mb-20 lg:border-l-2 max-w-5xl mx-auto md:py-8 px-8 lg:px-0">
        <div className="md:pl-6 mx-auto">
          <div className="max-w-3xl">
            <h2 className="md:text-5xl text-3xl font-bold text-slate-900 mb-6">
              Bursátiles y Contabilidad de Nicaragua, S.A.
            </h2>
            <p className="md:text-xl text-slate-600 mb-8">
              Más de 10 años ayudando a empresas a optimizar ingresos, 
              rentabilidad, productividad de equipos y flujo de efectivo.
            </p>
          </div>
        </div>
        <div className="text-slate-700 w-full mt-16 text-justify bg-white p-6 border-2 lg:border-l-0 rounded-md lg:rounded-l-none shadow-md flex flex-col gap-4 ">
          <p>
            Somos un equipo de profesionales que aporta valor a su organización mediante asesrías personalizadas que fortalecen sus procesos contables, técnicas de control interno y optimización de obligaciones tributarias.
          </p>
          <p>
            Facilitamos al sector Agropecuario el aprovechamiento de los beneficios de la Bolsa Agropecuaria por medio de nuestro puesto de bolsa debidamente autorizado.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="border-y-2 px-6 bg-slate-200">
        <div className="py-8 max-w-5xl mx-auto">
          <h3 className="text-3xl w-fit mx-auto px-10 font-bold text-slate-900 mb-10 text-center">
            Nuestros Servicios
          </h3>
          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            <div className="w-full flex flex-col shadow-md bg-white rounded-lg border-2 overflow-hidden">
              <div className="h-48 bg-slate-400 overflow-hidden border-b-2">
                <img 
                  src="https://images.unsplash.com/photo-1597603600925-aff9d1fd8e7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
                  className="object-cover -translate-y-0"
                />
              </div>
              <div className="p-8 relative">
                <div className="flex items-center justify-center h-24 p-4 aspect-square bg-lime-200 border-2 shadow-lg rounded-full absolute top-0 -translate-y-1/2">
                  <ChartNoAxesCombined className="w-full h-full"/>
                </div>
                <p className="text-lg font-bold mb-2 mt-8">Puesto de Bolsa Agropecuaria</p>
                <div className="">
                {
                  [
                    "Elaboración de Contratos de compra/venta en Bolsa Agropecuaria",
                    "Asesorías fiscales en temas Bursátiles a nuestros clientes",
                    "Elaboración y Declaración de retenciones definitivas",
                    "Talleres y Capacitaciones relacionadas con este Régimen Fiscal",
                  ].map((item) => (
                    <li key={item} className="list-inside text-slate-700">{item}</li>
                  ))
                }
                </div>
              </div>
            </div>


            <div className="w-full  flex flex-col shadow-md bg-white rounded-lg border-2 overflow-hidden">
              <div className="h-48 bg-slate-400 overflow-hidden border-b-2">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                  className="object-cover -translate-y-0"
                />
              </div>
              <div className="p-8 relative">
                <div className="flex items-center justify-center h-24 p-4 aspect-square bg-amber-200 border-2 shadow-lg rounded-full absolute top-0 -translate-y-1/2">
                  <DollarSign className="w-full h-full"/>
                </div>
                <p className="text-lg font-bold mb-2 mt-8">Servicios Profesionales de Contabilidad</p>
                <div className="">
                {
                  [
                    "Certificación de Estados Financieros",
                    "Asesoría de Impuestos",
                    "Software de Contabilidad o Auditoría",
                    "Contabilidad externa para empresas o negocios mediante Software Contable",
                    "Auditorías financieras y especiales",
                  ].map((item) => (
                    <li key={item} className="list-inside text-slate-700">{item}</li>
                  ))
                }
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 max-w-2xl mx-auto gap-4 text-justify mt-8 w-full text-slate-800">
            <p>
              El registro de operaciones de compra-venta de productos agropecuarios, para la realización de contratos es efectuado mediante una plataforma electrónica ágil, dinámica y eficaz, lo que hace que las transacciones se realicen en el menor tiempo posible y con la mayor transparencia posible.
            </p>
            <p>
              Nuestro servicio es ágil, dinámico, confiable y responsable. Garantizamos un tiempo prudencial máximo de 24 horas para la entrega de sus contratos y/o constancias de retención.
            </p>
          </div>

        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="md:py-20 py-6 px-6">
        <div className="mx-auto max-w-5xl flex flex-col md:grid md:grid-rows-2 gap-16">
          <div className="md:grid md:grid-cols-3 w-full">
            <div className="py-8 md:border-r-2 md:h-full mx-auto">
              <img
                src="https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469"
                className="md:rounded-l-md md:rounded-r-none rounded-md shadow-md border-2 md:border-r-0 overflow-hidden h-full object-cover md:w-auto w-full"
              />
            </div>
            <div className="md:pl-4 md:py-4 col-span-2 flex flex-col gap-2 text-justify h-full text-slate-700 items-center justify-center">
              <p className="font-bold md:text-2xl text-xl text-slate-800">
                ¿Qué ventajas y beneficios obtienen nuestros clientes al realizar sus transacciones con nuestro puesto de bolsa Autorizado?
              </p>
              <p>
                Ofertamos las comisiones más bajas del mercado bursátil, sin olvidarse de brindar el mejor servicio con calidad y eficiencia.
              </p>
              <p>
                Contamos con un equipo de respaldo con experiencia de más de 10 años en el mercado bursátil y temas fiscales en el país.
              </p>
              <p>
                Brindamos soporte de asesoría bursátil relacionado con las leyes fiscales en los casos que se nos presente problemas con la Administración Tributaria y las Alcaldías Municipales, así como capacitaciones y asesoría de manera gratuita en los temas de Bolsa y la aplicación de la Ley de Concertación Tributaria.
              </p>
            </div>
          </div>


          <div className="md:grid md:grid-cols-3 w-full">
            <div className="md:pr-4 md:py-6 col-span-2 flex flex-col gap-2 text-justify h-full text-slate-700 items-center justify-center">
              <p className="font-bold md:text-2xl text-xl text-slate-800">
                ¿Cuáles son los beneficios fiscales de las transacciones en Bolsa Agropecuaria?
              </p>
              <p>
                Transacciones de compra-venta de Productos Agropecuarios menores a 40 millones de córdobas, están exentas del pago del IR Anual.
              </p>
                Transacciones de compra-venta de productos agropecuarios, están exentas del de Pago Mínimo (IR Definitivo sobre Ingresos brutos mensuales).
              <p>
              </p>
              <p>
                Transacciones de compra-venta de productos agropecuarios están sujetas a un único pago de impuesto (Retención Definitiva 1%, 1.5% o 2% dependiendo del producto a transar en Bolsa conforme lista taxativa, establecida en el Régimen de Retención Definitiva de la Ley 822 Ley de Concertación Tributaria.
              </p>
              <p>
                Todas las transacciones, independiente del monto y por estar sujetos al Régimen de Retención IR Definitivo están exentas de:
                <br/>
                a. 15% de IVA
                <br/>
                b. 15% de ISC 
                <br/>
                c. 1% Impuestos Municipal sobre Ingresos y egresos
                <br/>
                d. 2% de Matricula Anual
              </p>
            </div>
            <div className="py-8 md:border-l-2 md:h-full mx-auto">
              <img
                src="https://images.unsplash.com/photo-1633526544365-a98d534c9201?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                className="md:rounded-r-md md:rounded-l-none rounded-md shadow-md border-2 md:border-l-0 h-full overflow-hidden object-cover md:w-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos empresariales.
          </p>
          <motion.a
            initial={{ 
              backgroundColor: "#ffffff",
            }}
            animate={{ 
              backgroundColor: "#ffffff", 
              scale: 1,
              transition: { duration: 0.2 } 
            }}
            whileHover={{
              backgroundColor: "#d1d5db",
              scale: 1.05,
              transition: { duration: 0.15 },
            }}
            href="mailto:contacto@buconicsa.com"
            className="inline-block text-slate-950 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Solicitar Consulta
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>&copy; 2025 BUCONIC, S.A. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
