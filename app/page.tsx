"use client"

import Header from "../components/header"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Footer from "@/components/footer"
import Banner from "@/components/banner"
import Contact from "@/components/contact"
import Strategic from "@/components/strategic"
import Services from "@/components/services"
import Industries from "@/components/industries"
import Objective from "@/components/objective"

export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Header spacer to prevent content overlap */}
            <div className="header-spacer"></div>

            {/* Hero Section */}
            <Banner />

            {/* Strategic Partner Section */}
            <Strategic />

            {/* Horizontal Services Section */}
            <Services />

            {/* Industries Section - Redesigned with clean, minimalist style inspired by reference image */}
            <Industries />

            {/* Company Objective Section - CHANGE: Updated background to use logo's blue base color with subtle geometric pattern */}
            <Objective />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />

            {/* Botón de WhatsApp flotante */}
            <WhatsAppButton />
        </div>
    )
}
