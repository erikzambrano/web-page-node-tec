"use client"
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Monitor, Server, Laptop, Printer, Network, Shield, Wrench, Phone } from "lucide-react";

export default function SolucionesHardware() {
  const hardwareCategories = [
    {
      title: "Computadoras de Escritorio",
      description:
        "Equipos de alto rendimiento para oficinas y empresas. Configuraciones personalizadas según sus necesidades específicas.",
      icon: Monitor,
      features: ["Procesadores Intel/AMD", "Memoria RAM hasta 64GB", "Almacenamiento SSD/HDD", "Garantía extendida"],
    },
    {
      title: "Laptops Empresariales",
      description:
        "Portátiles robustas y confiables para trabajo móvil. Ideales para profesionales que requieren movilidad.",
      icon: Laptop,
      features: ["Batería de larga duración", "Seguridad avanzada", "Conectividad completa", "Soporte técnico 24/7"],
    },
    {
      title: "Servidores",
      description:
        "Soluciones de servidor para empresas de todos los tamaños. Desde servidores torre hasta rack mount.",
      icon: Server,
      features: ["Alta disponibilidad", "Escalabilidad", "Redundancia", "Monitoreo remoto"],
    },
    {
      title: "Equipos de Impresión",
      description: "Impresoras, multifuncionales y plotters para todas las necesidades de impresión empresarial.",
      icon: Printer,
      features: ["Impresión en red", "Gestión centralizada", "Consumibles originales", "Mantenimiento incluido"],
    },
    {
      title: "Infraestructura de Red",
      description: "Switches, routers, access points y cableado estructurado para redes empresariales robustas.",
      icon: Network,
      features: ["Redes gigabit", "WiFi empresarial", "Seguridad de red", "Monitoreo 24/7"],
    },
    {
      title: "Seguridad y Respaldo",
      description: "Sistemas de respaldo, UPS y soluciones de seguridad para proteger su infraestructura IT.",
      icon: Shield,
      features: ["Respaldo automático", "UPS empresariales", "Seguridad física", "Recuperación de datos"],
    },
  ];

  const services = [
    {
      title: "Consultoría IT",
      description: "Análisis y recomendaciones para optimizar su infraestructura tecnológica.",
    },
    {
      title: "Instalación y Configuración",
      description: "Implementación profesional de todos los equipos y sistemas.",
    },
    {
      title: "Soporte Técnico",
      description: "Atención técnica especializada 24/7 para resolver cualquier incidencia.",
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento para garantizar el óptimo funcionamiento.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

       {/* Header spacer to prevent content overlap */}
            <div className="header-spacer"></div>

      {/* Header with back button */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Soluciones de Hardware IT</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Equipos y tecnología de vanguardia para impulsar su negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Solicitar Cotización
              </button>
              {/* <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Catálogo
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Categorías de Hardware</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de equipos tecnológicos para satisfacer todas sus necesidades empresariales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios Complementarios</h2>
            <p className="text-xl text-gray-600">Más que equipos, ofrecemos soluciones integrales</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para modernizar su infraestructura IT?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarle a encontrar las mejores soluciones para su empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Teléfono</h3>
              <p className="text-gray-300">+51 959 768 166</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-300">contacto@nodetec.com.pe</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Ubicación</h3>
              <p className="text-gray-300">Lima, Perú</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
