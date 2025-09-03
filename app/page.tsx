"use client"

import Header from "../components/header"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Page() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const techImages = [
        {
            src: "/advanced-ai-neural-network-visualization-with-glow.webp",
            alt: "Visualización avanzada de redes neuronales e inteligencia artificial",
        },
        {
            src: "/data-online-technology-internet-circuit-board-concept.jpg",
            alt: "Visualización avanzada de redes neuronales e inteligencia artificial",
        },
        // {
        //   src: "/advanced-ai-neural-network-visualization-with-glow.png",
        //   alt: "Visualización avanzada de redes neuronales e inteligencia artificial",
        // },
        // {
        //   src: "/cloud-computing-infrastructure-servers-digital.png",
        //   alt: "Infraestructura de computación en la nube y servidores digitales",
        // },
        // {
        //   src: "/cybersecurity-digital-shield-network-protection.png",
        //   alt: "Ciberseguridad y protección digital de redes empresariales",
        // },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % techImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % techImages.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + techImages.length) % techImages.length)
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Header spacer to prevent content overlap */}
            <div className="header-spacer"></div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 relative overflow-hidden h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh]">
                <div className="absolute inset-0">
                    <AnimatePresence mode="sync">
                        <motion.img
                            key={currentSlide}
                            src={techImages[currentSlide].src || "/placeholder.svg"}
                            alt={techImages[currentSlide].alt}
                            className="w-full h-full object-cover absolute inset-0"
                            initial={{ opacity: 0, x: 300, scale: 1.1 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -300, scale: 0.9 }}
                            transition={{
                                duration: 1.5,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                opacity: { duration: 1.0, ease: "easeInOut" },
                                x: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
                                scale: { duration: 1.5, ease: "easeInOut" },
                            }}
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12 h-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
                        <motion.div
                            className="text-left text-white max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-2xl"
                            initial={{ opacity: 0, x: -100, scale: 0.9, rotateY: -15 }}
                            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                            transition={{
                                duration: 2,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                opacity: { duration: 1.5, ease: "easeOut" },
                                x: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
                                scale: { duration: 1.8, ease: "easeOut" },
                                rotateY: { duration: 2.2, ease: "easeOut" },
                            }}
                        >
                            <motion.h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight"
                                initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 20 }}
                                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.4,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    scale: { duration: 1.2, ease: "easeOut" },
                                    rotateX: { duration: 1.8, ease: "easeOut" },
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    x: 20,
                                    y: -5,
                                    rotateX: -2,
                                    textShadow: "0 0 20px rgba(255,255,255,0.3)",
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                        textShadow: { duration: 0.2 },
                                    },
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                TRANSFORMAMOS PROCESOS EN VENTAJAS
                            </motion.h1>
                            <motion.p
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 sm:mb-8 md:mb-10 text-slate-200 leading-relaxed"
                                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
                                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                transition={{
                                    duration: 1.3,
                                    delay: 0.8,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    rotateX: { duration: 1.5, ease: "easeOut" },
                                }}
                                whileHover={{
                                    x: 25,
                                    y: -3,
                                    scale: 1.02,
                                    rotateX: -1,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                    },
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                Innovación para tu crecimiento
                            </motion.p>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-slate-300 leading-relaxed"
                                initial={{ opacity: 0, y: 40, scale: 0.95, rotateX: 10 }}
                                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                transition={{
                                    duration: 1.1,
                                    delay: 1.2,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                    rotateX: { duration: 1.3, ease: "easeOut" },
                                }}
                                whileHover={{
                                    x: 20,
                                    y: -2,
                                    scale: 1.01,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                    },
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                Transformamos ideas en soluciones tecnológicas que impulsan el éxito de tu negocio
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 1,
                                    delay: 1.6,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.08,
                                        x: 8,
                                        y: -3,
                                        rotateZ: 1,
                                        boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                                        transition: {
                                            duration: 0.2,
                                            boxShadow: { duration: 0.3 },
                                        },
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                        rotateZ: -1,
                                        transition: { duration: 0.1 },
                                    }}
                                    style={{ transformStyle: "preserve-3d" }}
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-white text-slate-800 hover:bg-slate-100 font-semibold px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl w-full sm:w-auto"
                                        onClick={() => (window.location.href = "/soluciones-hardware")}
                                    >
                                        Ver soluciones
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors z-20 touch-manipulation"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>

                <motion.button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors z-20 touch-manipulation"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </motion.button>

                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
                    {techImages.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors touch-manipulation ${index === currentSlide ? "bg-white" : "bg-white/50"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            animate={{
                                scale: index === currentSlide ? 1.2 : 1,
                                opacity: index === currentSlide ? 1 : 0.7,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </div>
            </section>

            {/* Strategic Partner Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        <div className="relative order-2 lg:order-1">
                            <img
                                src="/professional-team-meeting-strategic-planning-session.png"
                                alt="Equipo profesional en reunión de planeamiento estratégico colaborativo"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 bg-slate-800 text-white p-4 sm:p-5 md:p-6 rounded-lg shadow-xl">
                                <div className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 mb-2 sm:mb-3 md:mb-4">"</div>
                                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                                    Vocación de servicio para que la tecnología te haga más competitivo y ayudarte en la transformación
                                    digital
                                </p>
                                <div className="w-8 sm:w-10 md:w-12 h-1 bg-cyan-400 mt-3 sm:mt-4"></div>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide mb-2">
                                    Reducción de costes y mejora de la eficiencia
                                </p>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
                                    Tu socio estratégico de confianza
                                </h2>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Somos una compañía independiente con una sólida trayectoria en el sector de las TIC en Perú.
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Utilizamos todo el potencial de las nuevas tecnologías para ayudar a tu organización a ser más
                                    eficiente y lograr sus objetivos
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-gray-900 pt-2">
                                <span className="font-medium text-sm sm:text-base">¿Hablamos?</span>
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-5 md:pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">Te escuchamos</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">Somos flexibles</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">Nos adaptamos a tus necesidades</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">Comprometidos con los resultados</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Services Section */}
            <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600">
                <motion.div
                    className="container mx-auto px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Soluciones TI
                        </motion.h2>
                        <motion.p
                            className="text-blue-100 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Ofrecemos una amplia gama de servicios especializados para cubrir todas las necesidades tecnológicas de
                            tu empresa
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Equipo de Cómputo */}
                        <motion.div
                            className="text-center group cursor-pointer"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <Link href="/equipos-computo">
                                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center mx-auto group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/30">
                                    <svg className="w-12 h-12 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h6l-2 2v1h8v-1l-2-2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM4 14V5h16v9H4z" />
                                    </svg>
                                    <div className="text-white text-xs font-semibold text-center leading-tight">
                                        <div>Equipo de</div>
                                        <div>Cómputo</div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Audio y Video Profesional */}
                        <motion.div
                            className="text-center group cursor-pointer"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center mx-auto group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/30">
                                <svg className="w-12 h-12 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* Camera body */}
                                    <path
                                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    {/* Camera lens */}
                                    <circle cx="12" cy="13" r="4" strokeWidth={2} />
                                    {/* Lens center */}
                                    <circle cx="12" cy="13" r="1.5" strokeWidth={2} />
                                </svg>
                                <div className="text-white text-xs font-semibold text-center leading-tight">
                                    <div>Audio y Video</div>
                                    <div>Profesional</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Soluciones de Impresión */}
                        <motion.div
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center mx-auto group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/30">
                                <svg className="w-12 h-12 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                    />
                                </svg>
                                <div className="text-white text-xs font-semibold text-center leading-tight">
                                    <div>Soluciones de</div>
                                    <div>Impresión</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Software y Licencias */}
                        <motion.div
                            className="text-center group cursor-pointer"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center mx-auto group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/30">
                                <svg className="w-12 h-12 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    />
                                </svg>
                                <div className="text-white text-xs font-semibold text-center leading-tight">
                                    <div>Software y</div>
                                    <div>Licencias</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Redes y Comunicación */}
                        <motion.div
                            className="text-center group cursor-pointer"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center mx-auto group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/30">
                                <svg className="w-12 h-12 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                                    />
                                </svg>
                                <div className="text-white text-xs font-semibold text-center leading-tight">
                                    <div>Redes y</div>
                                    <div>Comunicación</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Seguridad Informática */}
                        <motion.div
                            className="text-center group cursor-pointer"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center mx-auto group-hover:bg-cyan-400 group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-white/30">
                                <svg className="w-12 h-12 text-white mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                                <div className="text-white text-xs font-semibold text-center leading-tight">
                                    <div>Seguridad</div>
                                    <div>Informática</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver Todos los Servicios
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>


            {/* Industries Section - Redesigned with clean, minimalist style inspired by reference image */}
            <section className="py-20 sm:py-24 md:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Header Text - Simplified typography with better hierarchy */}
                    <div className="text-center mb-20 sm:mb-24">
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                            Nuestra experiencia nos permite diseñar soluciones a la medida, asegurando que{" "}
                            <span className="font-semibold text-gray-900">cada paso que tomes sea estratégico y efectivo.</span>
                        </p>
                    </div>

                    {/* Industries Content - Clean card-based layout with soft colors */}
                    <div className="flex flex-col xl:flex-row items-start gap-16 xl:gap-20">
                        {/* Left Side - Simplified title design */}
                        <div className="flex items-start gap-4 xl:flex-shrink-0">
                            <div className="w-1 h-16 bg-orange-400 rounded-full"></div>
                            <div>
                                <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                    Industrias a las
                                    <br />
                                    que servimos
                                </h2>
                                <p className="text-gray-500 text-lg font-light max-w-xs leading-relaxed">
                                    Soluciones tecnológicas especializadas para cada sector
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Clean icons grid with soft colors and minimal effects */}
                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 sm:gap-16">
                                {/* Manufactura - Soft blue background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-blue-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Manufactura</span>
                                </div>

                                {/* Construcción - Soft cyan background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-cyan-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-cyan-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Construcción</span>
                                </div>

                                {/* Educación - Soft indigo background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-indigo-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Educación</span>
                                </div>

                                {/* Entretenimiento - Soft purple background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-purple-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Entretenimiento</span>
                                </div>

                                {/* Financiero - Soft emerald background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-emerald-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Financiero</span>
                                </div>

                                {/* Gobierno - Soft slate background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-slate-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-slate-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Gobierno</span>
                                </div>

                                {/* Logística - Soft orange background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-50 rounded-3xl flex items-center justify-center mb-6 transition-all duration-200 group-hover:bg-orange-100">
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m8.25 4.5V16.5a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5v1.875a1.125 1.125 0 01-1.125 1.125H16.5a1.5 1.5 0 01-1.5-1.5v-3.375m-3.75 0V8.25m0 0a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5v3.75m-6 0V4.5a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5V8.25m-6 0h6m-6 0V6a1.5 1.5 0 011.5-1.5h2.25A1.5 1.5 0 0114.25 6v2 1.5 0 011.5-1.5h2.25A1.5 1.5 0 0114.25 6v2.25"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Logística</span>
                                </div>

                                {/* Retail - Soft pink background */}
                                <div className="flex flex-col items-center text-center group">
                                    <div
                                        className="w-20 h-20 sm:w-24 sm:h-24 bg-pink-50 rounded-3xl flex items-center justify-
center mb-6 transition-all duration-200 group-hover:bg-pink-100"
                                    >
                                        <svg
                                            className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-medium text-gray-800">Retail</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Objective Section - CHANGE: Updated background to use logo's blue base color with subtle geometric pattern */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `
                   radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                   linear-gradient(45deg, rgba(59, 130, 246, 0.05) 25%, transparent 25%),
                   linear-gradient(-45deg, rgba(6, 182, 212, 0.05) 25%, transparent 25%)
                 `,
                            backgroundSize: "200px 200px, 300px 300px, 60px 60px, 60px 60px",
                            backgroundPosition: "0 0, 100px 100px, 0 0, 30px 30px",
                        }}
                    ></div>
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `
                   url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='nodes' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='2' fill='%233b82f6' opacity='0.1'/%3E%3Cline x1='25' y1='25' x2='50' y2='25' stroke='%2306b6d4' strokeWidth='0.5' opacity='0.1'/%3E%3Cline x1='25' y1='25' x2='25' y2='50' stroke='%2306b6d4' strokeWidth='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23nodes)'/%3E%3C/svg%3E"),
                   url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='25' fontFamily='Arial' fontSize='8' fill='%233b82f6' opacity='0.03'%3ENODE%3C/text%3E%3Ctext x='10' y='55' fontFamily='Arial' fontSize='8' fill='%2306b6d4' opacity='0.03'%3ETEC%3C/text%3E%3C/svg%3E")
                 `,
                            backgroundSize: "100px 100px, 160px 160px",
                            backgroundPosition: "0 0, 80px 80px",
                        }}
                    ></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-black">Nuestro Objetivo</h2>
                        <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-gray-700 leading-relaxed">
                            <p>
                                Nuestro objetivo es ser el socio tecnológico de confianza que impulse la transformación digital de tu
                                empresa, proporcionando soluciones innovadoras y personalizadas que optimicen tus procesos, reduzcan
                                costos y maximicen tu competitividad en el mercado.
                            </p>
                            <p>
                                Nos comprometemos a entender profundamente las necesidades específicas de tu negocio para diseñar e
                                implementar estrategias tecnológicas que no solo resuelvan los desafíos actuales, sino que también
                                preparen a tu organización para el futuro digital.
                            </p>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovación Constante</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mantenemos el ritmo de la evolución tecnológica para ofrecerte siempre las mejores soluciones del
                                mercado.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Calidad Garantizada</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Cada proyecto se ejecuta con los más altos estándares de calidad y las mejores prácticas de la
                                industria.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Soporte Integral</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Te acompañamos en cada etapa del proceso, desde la planificación hasta el soporte post-implementación.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `
                   repeating-linear-gradient(
                     45deg,
                     rgba(59, 130, 246, 0.1) 0px,
                     rgba(59, 130, 246, 0.1) 1px,
                     transparent 1px,
                     transparent 20px
                   ),
                   repeating-linear-gradient(
                     -45deg,
                     rgba(6, 182, 212, 0.1) 0px,
                     rgba(6, 182, 212, 0.1) 1px,
                     transparent 1px,
                     transparent 20px
                   ),
                   radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
                   radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)
                 `,
                        }}
                    ></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-black">Nuestros Valores</h2>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            En NODE TEC nos guiamos por principios que reflejan nuestra forma de trabajar y la relación que
                            construimos con nuestros clientes:
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Integridad</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Actuamos con ética, transparencia y respeto en cada acción.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Innovación</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Buscamos siempre soluciones creativas y tecnológicas que generen valor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Excelencia</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Nos esforzamos por superar expectativas con un servicio de alta calidad.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Responsabilidad y Compromiso</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Cumplimos lo que prometemos, acompañando a nuestros clientes en cada proyecto.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Honestidad</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Generamos confianza con una comunicación clara y directa.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Sostenibilidad</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Promovemos prácticas responsables con la sociedad y el entorno.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Pasión por los Clientes</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Nuestra motivación es aportar al crecimiento de quienes confían en nosotros.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Trabajo en Equipo</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Colaboramos para lograr mejores resultados y aprendizajes compartidos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Resolución de Conflictos</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Afrontamos los retos con soluciones efectivas y oportunas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Contáctenos</h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            ¿Listo para transformar tu negocio? Nuestro equipo de expertos está aquí para ayudarte a encontrar la
                            solución perfecta para tus necesidades tecnológicas.
                        </p>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-8 sm:p-10 md:p-12 max-w-4xl mx-auto">
                        <form className="space-y-6 sm:space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        placeholder="tu@empresa.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                    Servicio de interés
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="archiving">Archiving</option>
                                    <option value="design-implementation">Diseño e Implementación</option>
                                    <option value="backup">Respaldo</option>
                                    <option value="migration">Migración y Actualización</option>
                                    <option value="virtualization">Virtualización</option>
                                    <option value="networking">Red (Networking)</option>
                                    <option value="iaas">IAAS</option>
                                    <option value="platform">Plataforma TI</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-vertical"
                                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-12 py-4 text-lg"
                                >
                                    Enviar Mensaje
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
                        <div className="md:col-span-1">
                            <div className="flex flex-col items-center mb-4">
                                <div className="text-center">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NODE%20TEC%20Color%202-53pjwGeJuj4tNdcfPNQGN81nRdiPPu.png"
                                        alt="NODE TEC Logo"
                                        className="h-12 w-auto mb-3"
                                    />

                                    {/* Updated footer tagline text */}
                                    <p className="text-gray-400 leading-relaxed">Conéctanos hoy para transformar el mañana</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                            <div>
                                <h5 className="text-lg font-semibold mb-4">Servicios</h5>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Archiving
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Diseño e Implementación
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Respaldo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Migración y Actualización
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Virtualización
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Red (Networking)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            IAAS
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold mb-4">Industrias</h5>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Manufactura
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Construcción
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Educación
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Entretenimiento
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Financiero
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Libro de Reclamaciones
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Logística
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Retail
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold mb-4">Contacto</h5>
                                <ul className="space-y-2 text-gray-400">
                                    <li></li>
                                    <li></li>
                                    <li>
                                        <a href="/soluciones-hardware" className="hover:text-white transition-colors">
                                            Contáctenos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:contacto@nodetec.com.pe" className="hover:text-white transition-colors">
                                            contacto@nodetec.com.pe
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:soporte@nodetec.com.pe" className="hover:text-white transition-colors">
                                            soporte@nodetec.com.pe
                                        </a>
                                    </li>
                                    <li>
                                        <span className="text-gray-400">Lima, Perú</span>
                                    </li>
                                    <li>
                                        <span className="text-gray-400">Atención 24/7</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 sm:mt-16 text-center text-gray-500">
                        <p>&copy; {new Date().getFullYear()} NODE TEC. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
