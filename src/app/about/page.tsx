"use client";
 
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import { MdArrowBack } from "react-icons/md";
 
export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-primary overflow-x-hidden">
      {/* Navigation / Header */}
      <nav className="relative z-20 px-6 md:px-16 py-8 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ x: -10 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <MdArrowBack className="text-2xl text-secondary group-hover:text-primary transition-colors" />
            <span className="font-medium text-secondary group-hover:text-primary transition-colors">Volver</span>
          </motion.div>
        </Link>
        <div className="w-16 h-12 relative">
          <Image
            src="/images/logo.png"
            alt="Mariner Group Home"
            fill
            className="object-contain"
          />
        </div>
      </nav>
 
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif leading-[1.1] mb-8">
              Nuestra <span className="text-secondary">Historia</span> y Compromiso
            </h1>
            <p className="text-lg md:text-xl font-light text-primary/80 leading-relaxed mb-6 text-justify">
              Mariner Group Home nació de una visión sencilla pero poderosa: crear un espacio donde la dignidad no sea un servicio adicional, sino la base de todo lo que hacemos.
            </p>
            <div className="w-24 h-1.5 bg-secondary/30 rounded-full mb-8" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <Image
              src="/images/aboutus.jpg"
              alt="Interacción en el hogar"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
 
      {/* Detailed Content */}
      <section className="py-24 bg-sky-50 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-primary/5"
          >
            <h2 className="text-3xl font-serif mb-8 text-secondary">Más que una Residencia</h2>
            <p className="text-lg font-light leading-relaxed mb-6 text-justify">
              En Mariner Group Home, entendemos que cambiar de entorno es un paso importante para cualquier familia. Por eso, no nos consideramos una &quot;facilidad&quot; o una institución. Somos una casa. Una casa con nombres en las puertas, con una cocina donde siempre hay movimiento y con un equipo que conoce los gustos, las historias y las necesidades individuales de cada residente.
            </p>
            <p className="text-lg font-light leading-relaxed mb-6 text-justify">
              Nuestra fundadora, Evelyn Gonzalez, estableció este hogar bajo un principio fundamental: el respeto absoluto. Atendemos a adultos con discapacidades del desarrollo, proporcionando un entorno seguro, estructurado y, sobre todo, empático.
            </p>
          </motion.div>
 
          <div className="grid md:grid-cols-2 gap-8 text-white">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-12 rounded-[2rem] shadow-lg"
            >
              <h3 className="text-2xl font-serif mb-6">Nuestra Misión</h3>
              <p className="font-light opacity-90 leading-relaxed text-justify">
                Empoderar a nuestros residentes para que vivan sus vidas con la mayor independencia posible, brindando el apoyo técnico y emocional necesario para que se sientan valorados y protegidos en su comunidad.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-12 rounded-[2rem] shadow-lg"
            >
              <h3 className="text-2xl font-serif mb-6">Nuestra Visión</h3>
              <p className="font-light opacity-90 leading-relaxed text-justify">
                Ser el referente de excelencia en servicios comunitarios y de hogar en Florida, donde el nombre Mariner Group Home sea sinónimo de integridad, calidez humana y compromiso inquebrantable.
              </p>
            </motion.div>
          </div>
 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <blockquote className="text-2xl font-serif italic text-primary/70 max-w-3xl mx-auto leading-relaxed">
              &quot;No estamos aquí para administrar vidas, estamos aquí para acompañarlas. Cada día es una oportunidad para demostrar que el cuidado real reside en los detalles más pequeños.&quot;
            </blockquote>
            <p className="mt-8 font-medium">— Evelyn Gonzalez, Fundadora</p>
          </motion.div>
        </div>
      </section>
 
      <Footer />
    </main>
  );
}
