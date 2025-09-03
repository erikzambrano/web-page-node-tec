import { Button } from "./ui/button";

export default function Contact() {
    return (
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
    )
}