export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      philosophy: "Philosophy",
      contact: "Contact",
    },
    hero: {
      title: "Mariner Group Home",
      subtitle: "Home & Community Services with dignity, care, and a name you can trust.",
      contactBtn: "Contact Us",
      callBtn: "Call Now",
    },
    about: {
      title: "A Home Built on Trust",
      description: "Mariner Group Home is more than a residence; it is a community built on dignity and trust. We provide personalized, daily support for adults with developmental disabilities in a warm, family-oriented environment where every individual is treated with the respect they deserve.",
      readMore: "Read More",
      founderQuote: "“What we give is time, patience, and a sense of belonging. That’s what real care looks like.”",
      founderName: "Evelyn Gonzalez, Founder",
    },
    services: {
      title: "What We Offer",
      subtitle: "Committed to Excellence in Care",
      personalCare: {
        name: "Personal Care",
        desc: "Personalized assistance with daily activities, ensuring comfort, cleanliness, and dignity in every interaction.",
        features: ["Bathing & Dressing", "Grooming", "Oral Hygiene", "Mobility Support"],
      },
      medication: {
        name: "Medication Management",
        desc: "Safe, secure, and professional administration of medications following strict health protocols.",
        features: ["Prescription Coordination", "Timely Reminders", "Health Monitoring", "Dosage Accuracy"],
      },
      dailyLiving: {
        name: "Daily Living Support",
        desc: "A homelike environment where every detail of daily life is managed with care and attention.",
        features: ["Nutritious Meals", "Laundry Service", "Room Cleaning", "Hydration Support"],
      },
      community: {
        name: "Community Integration",
        desc: "Promoting a vibrant social life through activities that connect residents with family and the local community.",
        features: ["Social Outings", "Family Visits", "Recreational Events", "Life Skills Training"],
      },
      disclaimer: "* All services are customized to meet the unique needs and preferences of each resident.",
    },
    gallery: {
      title: "Our Home",
      subtitle: "A safe, comfortable, and dignified space designed for living.",
      kitchen: "Kitchen",
      rooms: "Private Rooms",
      dining: "Dining Area",
      patio: "Outdoor Patio",
    },
    coreValues: {
      title: "Core Values",
      dignity: {
        title: "Dignity & Respect",
        desc: "Every individual is valued and treated with the highest level of honor and regard.",
      },
      personCentered: {
        title: "Person-Centered Care",
        desc: "Our support is tailored specifically to the unique needs, stories, and goals of each resident.",
      },
      safety: {
        title: "Safety & Well-being",
        desc: "A secure environment provided with consistency, ensuring peace of mind for families.",
      },
      independence: {
        title: "Independence",
        desc: "Empowering residents to lead autonomous lives at their own pace and comfort.",
      },
      compassion: {
        title: "Compassion",
        desc: "Care that goes beyond tasks—listening, understanding, and truly being present.",
      },
    },
    philosophy: {
      title: "Our Philosophy",
      p1: "At Mariner Group Home, we believe every person deserves to live with dignity, regardless of their abilities. We don’t start with diagnoses, we start with stories. We don’t organize routines, we build lives.",
      p2: "Our philosophy isn’t written in a manual — it’s a daily practice: respect, consistency, and real presence. We don’t work “for” someone. We live with them. We listen without rush and respond without scripts.",
      p3: "We adapt to each resident’s pace, without imposing structures foreign to their world. We want to be the right ones—the ones who show up when needed and don’t fail at the basics.",
      p4: "This house has no long corridors or closed doors. It has shared armchairs, simple conversations, and a cultivated calm. Our philosophy aims to do what’s right, every day.",
    },
    trust: {
      title: "Licensed & Trusted Care",
      subtitle: "Your trust is our foundation. We maintain the highest standards of accountability and regulatory compliance to ensure the safety of our residents.",
      licensed: {
        title: "Fully Licensed",
        desc: "Operational license verified by state health and community authorities.",
      },
      certified: {
        title: "Certified Care",
        desc: "Our staff holds all required certifications for adult developmental care.",
      },
      compliance: {
        title: "Compliance First",
        desc: "Regularly audited to ensure 100% compliance with safety and health regulations.",
      },
    },
    lifeAtMariner: {
      title: "Life at Mariner",
      subtitle: "Focusing on the atmosphere, the people, and the moments that make this place a true home.",
      sharedMoments: "Shared Moments",
      dailyActivities: "Daily Activities",
      gardening: "Gardening & Outdoors",
      communityBond: "Community Bond",
    },
    contact: {
      formTitle: "Send us a message",
      infoTitle: "Get in touch",
      infoSubtitle: "We are here to answer your questions and provide the support you need.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "How can we help?",
      sendBtn: "Send Message",
      location: "Our Location",
      phone: "Phone",
      email: "Email",
      mockAlert: "Thank you! Your message has been sent (Mockup).",
      viewMap: "View on Google Maps",
      errors: {
        nameReq: "Name is required",
        nameInvalid: "Name should only contain letters",
        emailReq: "Email is required",
        emailInvalid: "Please enter a valid email",
        messageReq: "Message is required",
        messageMax: "Max 500 characters allowed",
      }
    },
    footer: {
      companyName: "Evelyn Gonzalez Inc.",
      tagline: "Home & Community Services",
      rights: "All rights reserved.",
    },
    cta: {
      title: "Built on Integrity",
      p1: "Mariner Group Home operates with full licensure from the Florida Agency for Persons with Disabilities (APD). Our team of caregivers and professionals is certified and trained to deliver compassionate, specialized support for adults with developmental disabilities.",
      p2: "We don’t just meet standards — we build a space where safety, dignity, and quality of life are foundational.",
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      philosophy: "Filosofía",
      contact: "Contacto",
    },
    hero: {
      title: "Mariner Group Home",
      subtitle: "Servicios para el hogar y la comunidad con dignidad, cuidado y un nombre en el que puede confiar.",
      contactBtn: "Contáctenos",
      callBtn: "Llamar Ahora",
    },
    about: {
      title: "Un hogar construido sobre la confianza",
      description: "Mariner Group Home es más que una residencia; es una comunidad construida sobre la dignidad y la confianza. Brindamos apoyo diario y personalizado para adultos con discapacidades del desarrollo en un ambiente cálido y familiar donde cada individuo es tratado con el respeto que merece.",
      readMore: "Leer Más",
      founderQuote: "“Lo que damos es tiempo, paciencia y un sentido de pertenencia. Así es como se ve el verdadero cuidado.”",
      founderName: "Evelyn Gonzalez, Fundadora",
    },
    services: {
      title: "Lo que Ofrecemos",
      subtitle: "Comprometidos con la Excelencia en el Cuidado",
      personalCare: {
        name: "Cuidado Personal",
        desc: "Asistencia personalizada con las actividades diarias, asegurando comodidad, limpieza y dignidad en cada interacción.",
        features: ["Baño y Vestimenta", "Cuidado Personal", "Higiene Bucal", "Apoyo a la Movilidad"],
      },
      medication: {
        name: "Gestión de Medicamentos",
        desc: "Administración segura, protegida y profesional de medicamentos siguiendo estrictos protocolos de salud.",
        features: ["Coordinación de Prescripciones", "Recordatorios Oportunos", "Monitoreo de Salud", "Precisión en la Dosis"],
      },
      dailyLiving: {
        name: "Apoyo a la Vida Diaria",
        desc: "Un ambiente hogareño donde cada detalle de la vida diaria es gestionado con cuidado y atención.",
        features: ["Comidas Nutritivas", "Servicio de Lavandería", "Limpieza de Habitaciones", "Apoyo en la Hidratación"],
      },
      community: {
        name: "Integración Comunitaria",
        desc: "Promoviendo una vida social vibrante a través de actividades que conectan a los residentes con sus familias y la comunidad local.",
        features: ["Salidas Sociales", "Visitas Familiares", "Eventos Recreativos", "Entrenamiento en Habilidades para la Vida"],
      },
      disclaimer: "* Todos los servicios se personalizan para satisfacer las necesidades y preferencias únicas de cada residente.",
    },
    gallery: {
      title: "Nuestro Hogar",
      subtitle: "Un espacio seguro, cómodo y digno diseñado para vivir.",
      kitchen: "Cocina",
      rooms: "Habitaciones Privadas",
      dining: "Comedor",
      patio: "Patio Exterior",
    },
    coreValues: {
      title: "Valores Fundamentales",
      dignity: {
        title: "Dignidad y Respeto",
        desc: "Cada individuo es valorado y tratado con el más alto nivel de honor y consideración.",
      },
      personCentered: {
        title: "Cuidado Centrado en la Persona",
        desc: "Nuestro apoyo se adapta específicamente a las necesidades, historias y metas únicas de cada residente.",
      },
      safety: {
        title: "Seguridad y Bienestar",
        desc: "Un entorno seguro proporcionado con consistencia, garantizando tranquilidad para las familias.",
      },
      independence: {
        title: "Independencia",
        desc: "Empoderar a los residentes para que lleven vidas autónomas a su propio ritmo y comodidad.",
      },
      compassion: {
        title: "Compasión",
        desc: "Cuidado que va más allá de las tareas: escuchar, comprender y estar verdaderamente presente.",
      },
    },
    philosophy: {
      title: "Nuestra Filosofía",
      p1: "En Mariner Group Home, creemos que cada persona merece vivir con dignidad, independientemente de sus capacidades. No empezamos con diagnósticos, empezamos con historias. No organizamos rutinas, construimos vidas.",
      p3: "Nos adaptamos al ritmo de cada residente, sin imponer estructuras ajenas a su mundo. Queremos ser los indicados—aquellos que aparecen cuando se necesitan y no fallan en lo básico.",
      p2: "Nuestra filosofía no está escrita en un manual — es una práctica diaria: respeto, consistencia y presencia real. No trabajamos “para” alguien. Vivimos con ellos. Escuchamos sin prisas y respondemos sin guiones.",
      p4: "Esta casa no tiene pasillos largos ni puertas cerradas. Tiene sillones compartidos, conversaciones simples y una calma cultivada. Nuestra filosofía busca hacer lo correcto, todos los días.",
    },
    trust: {
      title: "Cuidado Licenciado y Confiable",
      subtitle: "Su confianza es nuestra base. Mantenemos los más altos estándares de responsabilidad y cumplimiento normativo para garantizar la seguridad de nuestros residentes.",
      licensed: {
        title: "Totalmente Licenciado",
        desc: "Licencia operativa verificada por las autoridades estatales de salud y comunidad.",
      },
      certified: {
        title: "Cuidado Certificado",
        desc: "Nuestro personal posee todas las certificaciones requeridas para el cuidado del desarrollo de adultos.",
      },
      compliance: {
        title: "Cumplimiento Primero",
        desc: "Auditado regularmente para asegurar el 100% de cumplimiento con las regulaciones de seguridad y salud.",
      },
    },
    lifeAtMariner: {
      title: "La Vida en Mariner",
      subtitle: "Enfocándonos en el ambiente, las personas y los momentos que hacen de este lugar un verdadero hogar.",
      sharedMoments: "Momentos Compartidos",
      dailyActivities: "Actividades Diarias",
      gardening: "Jardinería y Aire Libre",
      communityBond: "Vínculo Comunitario",
    },
    contact: {
      formTitle: "Envíanos un mensaje",
      infoTitle: "Ponte en contacto",
      infoSubtitle: "Estamos aquí para responder tus preguntas y brindarte el apoyo que necesitas.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@correo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "¿Cómo podemos ayudarte?",
      sendBtn: "Enviar Mensaje",
      location: "Nuestra Ubicación",
      phone: "Teléfono",
      email: "Correo electrónico",
      mockAlert: "¡Gracias! Tu mensaje ha sido enviado (Simulación).",
      viewMap: "Ver en Google Maps",
      errors: {
        nameReq: "El nombre es obligatorio",
        nameInvalid: "El nombre solo debe contener letras",
        emailReq: "El correo es obligatorio",
        emailInvalid: "Ingresa un correo válido",
        messageReq: "El mensaje es obligatorio",
        messageMax: "Máximo 500 caracteres permitidos",
      }
    },
    footer: {
      companyName: "Evelyn Gonzalez Inc.",
      tagline: "Servicios para el Hogar y la Comunidad",
      rights: "Todos los derechos reservados.",
    },
    cta: {
      title: "Construido sobre la Integridad",
      p1: "Mariner Group Home opera con licencia completa de la Agencia de Florida para Personas con Discapacidades (APD). Nuestro equipo de cuidadores y profesionales está certificado y capacitado para brindar apoyo compasivo y especializado para adultos con discapacidades del desarrollo.",
      p2: "No solo cumplimos con los estándares — construimos un espacio donde la seguridad, la dignidad y la calidad de vida son fundamentales.",
    }
  }
};
