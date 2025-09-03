export default function Objective() {
    return (
        <>
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
        </>
    )
}