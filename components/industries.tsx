export default function Industries() {
    return (
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
    )
}