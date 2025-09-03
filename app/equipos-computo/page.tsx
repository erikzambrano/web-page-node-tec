"use client"
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EquiposComputoPage() {
  const computerTypes = [
    {
      title: "Laptops",
      description:
        "Las laptops o computadoras portátiles son dispositivos compactos y autónomos que ofrecen funcionalidad informática completa en un formato fácilmente transportable, permitiendo a los usuarios trabajar, estudiar o entretenerse en cualquier lugar.",
      icon: (
        <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      title: "Desktop",
      description:
        "Las desktop o computadoras de escritorio, también conocidas como ordenadores de sobremesa, son dispositivos electrónicos diseñados para realizar tareas de procesamiento de datos y brindar una amplia gama de funciones a los usuarios en un entorno de escritorio.",
      icon: (
        <svg className="w-16 h-16 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h6l-2 2v1h8v-1l-2-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 14V5h16v9H4z" />
        </svg>
      ),
    },
    {
      title: "All in One",
      description:
        "Las computadoras All-in-One, también conocidas como AIO, son dispositivos compactos que integran en un solo equipo todos los componentes esenciales de una computadora de escritorio, incluyendo la pantalla, la unidad central de procesamiento (CPU), la memoria, el almacenamiento y los periféricos.",
      icon: (
        <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Workstations",
      description:
        "Las computadoras Workstations, o estaciones de trabajo, son sistemas informáticos diseñados específicamente para realizar tareas intensivas y exigentes en campos como el diseño gráfico, la ingeniería, la animación, la arquitectura y la edición de video.",
      icon: (
        <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Tablets",
      description:
        "Las tablets son dispositivos portátiles que se sitúan entre los teléfonos inteligentes y las computadoras portátiles en términos de tamaño y funcionalidad. Estas computadoras de mano cuentan con una pantalla táctil que ocupa la mayor parte de su superficie.",
      icon: (
        <svg className="w-16 h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Header spacer to prevent content overlap */}
      <div className="header-spacer"></div>

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Equipos de Cómputo</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Da vida a tus ideas con las herramientas que necesitas. Descubre las mejores marcas de equipos
              informáticos para potenciar la productividad y desempeño.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Computer Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {computerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="flex items-center mb-6">
                      {type.icon}
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ml-4">{type.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{type.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/soluciones-hardware">
                        <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg">
                          Solicitar Cotización
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl p-8 flex items-center justify-center h-64">
                      <div className="text-8xl text-cyan-500 opacity-20">{type.icon}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas ayuda para elegir el equipo perfecto?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nuestros expertos están listos para asesorarte y encontrar la solución ideal para tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/soluciones-hardware">
                <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Contáctenos Ahora
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 text-lg bg-transparent"
                >
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
