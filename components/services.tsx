import { motion } from "framer-motion"
import Link from "next/link"

export default function Services() {
    return (
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
    )
}