"use client";
import { motion } from "framer-motion";

export default function Partners() {
  const partnerLogos = [


    {
      name: "HP",
      logo: (
      <div className="flex flex-col items-center">
        <img
          src="https://lkc.hp.com/themes/hp-lkc/assets/images/logo-hp.png"
          alt="HP"
          className="h-12 w-auto"
        />
        <span className="text-xs text-gray-500 mt-1">Solutions Partner</span>
        </div>
      ),
    },
    {
      name: "Microsoft",
      logo: (

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
            alt="Microsoft"
            className="h-12 w-auto"
          />

      ),
    },
    {
      name: "Huawei",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png"
          alt="Huawei"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Brother",
      logo: (
        <img
          src="https://logodownload.org/wp-content/uploads/2019/12/brother-logo-4.png"
          alt="Brother"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "ViewSonic",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b0/ViewSonic_logo.svg"
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
