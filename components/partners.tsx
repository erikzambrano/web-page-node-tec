"use client";
import { motion } from "framer-motion";

export default function Partners() {
  const partnerLogos = [


    {
      name: "HP",
      logo: (
        <div className="flex flex-col items-center"> 
        <img
          src="https://pe-media.hptiendaenlinea.com/logo/default/logo_HP_Electric_Blue_keyline_1.svg"
          alt="HP"
          className="h-12 w-auto"
        />
       <span className="text-xs text-gray-500 mt-1"></span> 
        </div>
      ),
    },
    {
      name: "Microsoft",
      logo: (

          <img
            src="https://www.insights.la/wp-content/uploads/2015/04/Microsoft-Logo-3.jpg"
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
    {
      name: "Mikrotik",
      logo: (
        <img
          src="https://mikrotik.com/img/mtv2/newlogo.svg"
          alt="Mikrotik"
          className="h-12 w-auto"
        />
      ),
    },
    {
      name: "Nvidia",
      logo: (

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/1200px-NVIDIA_logo.svg.png"
            alt="Nvidia"
            className="h-12 w-auto"
          />

      ),
    },
    {
      name: "Star",
      logo: (

          <img
            src="https://starmicronics.com/wp-content/uploads/2024/04/Star-Logo-Featured-Image.png"
            alt="Microsoft"
            className="h-12 w-auto"
          />

      ),
    },
    {
      name: "Adobe",
      logo: (

          <img
            src="https://1000marcas.net/wp-content/uploads/2020/01/Adobe-Logo-2017.jpg"
            alt="Adobe"
            className="h-12 w-auto"
          />

      ),
    },
    {
      name: "Forza",
      logo: (

          <img
            src="https://forza-ups-frontend.s3.amazonaws.com/media/img/home-logo-2021.png"
            alt="Forza"
            className="h-12 w-auto"
          />

      ),
    },
    {
      name: "Intel",
      logo: (

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/64/Intel-logo-2022.png"
            alt="Intel"
            className="h-12 w-auto"
          />

      ),
    },
    {
      name: "Kingston",
      logo: (

          <img
            src="https://media.kingston.com/kingston/opengraph/ktc-opengraph-homepage.jpg"
            alt="Kingston"
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
