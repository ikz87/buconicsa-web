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
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">BUCONIC, SA</h1>
          <motion.a
            href="#contacto"
            className="bg-blue-200 text-slate-800 border-2 px-6 py-2 rounded-lg"
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

      {/*hacky padding*/}
      <div className="h-1">
      </div>

      {/* Hero Section */}
      <section className="mt-36 mb-20 lg:border-l-2 max-w-5xl mx-auto py-8 px-8 lg:px-0">
        <div className="pl-6 mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Bursátiles y Contabilidad de Nicaragua, S.A.
            </h2>
            <p className="text-xl text-slate-600 mb-8">
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
          <h3 className="text-3xl w-fit mx-auto border-b-2 px-10 font-bold text-slate-900 mb-10 text-center">
            Nuestros Servicios
          </h3>
          <div className="grid md:grid-cols-2 gap-10 px-8">
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
      <section id="questions" className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-rows-2 gap-16">
          <div className="grid grid-cols-3">
            <div className="py-8 border-r-2 h-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469"
                className="rounded-l-md shadow-md border-2 border-r-0 overflow-hidden h-full object-cover"
              />
            </div>
            <div className="pl-4 py-4 col-span-2 flex flex-col gap-2 text-justify h-full text-slate-700 items-center justify-center">
              <p className="font-bold text-2xl text-slate-800">
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


          <div className="grid grid-cols-3">
            <div className="pr-4 py-6 col-span-2 flex flex-col gap-2 text-justify h-full text-slate-700 items-center justify-center">
              <p className="font-bold text-2xl text-slate-800">
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
            <div className="py-8 border-l-2 h-full">
              <img
                src="https://images.unsplash.com/photo-1633526544365-a98d534c9201?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                className="shadow-md rounded-r-md border-2 border-l-0 h-full overflow-hidden object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            ¿Listo para Transformar tu Negocio?
          </h3>
          <p className="text-xl text-slate-300 mb-8">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos empresariales.
          </p>
          <a
            href="mailto:contacto@buconicsa.com"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition"
          >
            Solicitar Consulta
          </a>
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
