"use client";
import { motion } from "framer-motion";

export default function Partners() {
  const partnerLogos = [
    {
      name: "Apple",
      logo: (
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png"
            alt="Apple"
            className="h-12 w-auto"
          />
          <span className="text-xs text-gray-500 mt-1">Authorized Corporate Reseller</span>
        </div>
      ),
    },
    {
      name: "Lenovo",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lenovo_logo_2015.svg/1200px-Lenovo_logo_2015.svg.png"
          alt="Lenovo"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "HP",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png"
          alt="HP"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Microsoft",
      logo: (
        <div className="flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
            alt="Microsoft"
            className="h-12 w-auto"
          />
          <span className="text-xs text-gray-500 mt-1">Solutions Partner</span>
        </div>
      ),
    },
    {
      name: "Adobe",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Adobe_Corporate_Logo.svg/1200px-Adobe_Corporate_Logo.svg.png"
          alt="Adobe"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Fujitsu",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fujitsu_logo_2020.svg/1200px-Fujitsu_logo_2020.svg.png"
          alt="Fujitsu"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Sony",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sony_logo.svg/1200px-Sony_logo.svg.png"
          alt="Sony"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "WatchGuard",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/WatchGuard_Logo.svg/1200px-WatchGuard_Logo.svg.png"
          alt="WatchGuard"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Ruckus",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ruckus_Wireless_logo.svg/1200px-Ruckus_Wireless_logo.svg.png"
          alt="Ruckus"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Blackmagic Design",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Blackmagic_Design_logo.svg/1200px-Blackmagic_Design_logo.svg.png"
          alt="Blackmagic Design"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Epson",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Epson_logo.svg/1200px-Epson_logo.svg.png"
          alt="Epson"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "ViewSonic",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/ViewSonic_logo.svg/1200px-ViewSonic_logo.svg.png"
          alt="ViewSonic"
          className="h-12 w-auto"
        />
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">NUESTROS PARTNERS</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        {/* Partners Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {partner.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
