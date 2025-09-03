"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkBackground, setIsDarkBackground] = useState(true)
  const { isMobile, headerHeight } = useMobile()

  const menuItems = [
    { name: "Inicio", href: "#" },
    { name: "Soluciones TI", href: "/soluciones-hardware" },
    { name: "Servicios", href: "#servicios", hasDropdown: true },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Proyectos", href: "#proyectos" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsDarkBackground(scrollY < 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/30 shadow-sm mobile-header header-height-transition"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NODE%20TEC%20Color%202%20%281%29-IHr26i7oBTPjQjugvEXVVg5g001guc.png"
              alt="NODE TEC Logo"
              className="h-12 w-auto sm:h-16 md:h-18 lg:h-20"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{ y: -2 }}
              >
                <a
                  href={item.href}
                  className={`flex items-center text-gray-900 hover:text-blue-600 font-semibold text-xl transition-colors duration-300 py-2 drop-shadow-sm`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-2">
                      <motion.a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Desarrollo Web
                      </motion.a>
                      <motion.a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Consultoría
                      </motion.a>
                      <motion.a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Soporte Técnico
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden lg:block bg-gradient-to-r from-blue-800 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-500 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
          >
            Contáctenos
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 ${isDarkBackground ? "text-white hover:text-cyan-300" : "text-gray-900 hover:text-blue-600"} transition-colors duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
            y: isMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="py-4 border-t border-white/20">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block py-3 ${isDarkBackground ? "text-white hover:text-cyan-300" : "text-gray-900 hover:text-blue-600"} font-semibold text-xl transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="w-full mt-4 bg-gradient-to-r from-blue-800 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-900 hover:to-cyan-500 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "/soluciones-hardware")}
            >
              Contáctenos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
