import Link from "next/link";

// Datos de los enlaces del footer
const serviciosLinks = [
  { name: "Equipos de computo", href: "#" },
  { name: "Audio y video Profesional", href: "#" },
  { name: "Soluciones de impresión", href: "#" },
  { name: "Software y Licencias", href: "#" },
  { name: "Redes y comunicaciones", href: "#" },
  { name: "Seguridad e Informatica", href: "#" },
];

const industriasLinks = [
  { name: "Manufactura", href: "#" },
  { name: "Construcción", href: "#" },
  { name: "Educación", href: "#" },
  { name: "Entretenimiento", href: "#" },
  { name: "Financiero", href: "#" },
  { name: "Libro de Reclamaciones", href: "#" },
  { name: "Logística", href: "#" },
  { name: "Retail", href: "#" },
];

const contactoInfo = [
  { name: "Contáctenos", href: "/soluciones-hardware" },
  { name: "contacto@nodetec.com.pe", href: "mailto:contacto@nodetec.com.pe" },
  { name: "soporte@nodetec.com.pe", href: "mailto:soporte@nodetec.com.pe" },
  { name: "Lima, Perú", isLink: false },
  { name: "Atención 24/7", isLink: false },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo y descripción */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center mb-4">
              <div className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NODE%20TEC%20Color%202-53pjwGeJuj4tNdcfPNQGN81nRdiPPu.png"
                  alt="NODE TEC Logo"
                  className="h-12 w-auto mb-3"
                  loading="lazy"
                />
                <p className="text-gray-400 leading-relaxed">
                  "Conéctanos hoy para transformar el mañana"
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Servicios */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                {serviciosLinks.map((service, index) => (
                  <li key={`service-${index}`}>
                    <Link
                      href={service.href}
                      className="hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industrias */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Industrias</h5>
              <ul className="space-y-2 text-gray-400">
                {industriasLinks.map((industry, index) => (
                  <li key={`industry-${index}`}>
                    <Link
                      href={industry.href}
                      className="hover:text-white transition-colors"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-400">
                {contactoInfo.map((info, index) => (
                  <li key={`contact-${index}`}>
                    {info.isLink === false ? (
                      <span>{info.name}</span>
                    ) : (
                      <Link
                        href={info.href!}
                        className="hover:text-white transition-colors"
                      >
                        {info.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 text-center text-gray-500">
          <p>&copy; {currentYear} NODE TEC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
