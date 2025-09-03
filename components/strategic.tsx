export default function Strategic() {
    return (
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
    )
}