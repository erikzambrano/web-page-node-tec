"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Banner() {
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
        {
            src: "/cloud-computing-infrastructure-servers-digital.png",
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
    );
}