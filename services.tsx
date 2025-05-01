import React from "react";
import { Button } from "../components/Button"; // Adjusted path based on common conventions
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f6fafe] text-gray-800 py-12 px-6 md:px-20">
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Consultation Services
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We’re here to support your mental well-being. Talk to certified professionals, anytime you need.
        </motion.p>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "One-on-One Counseling",
            description:
              "Private, personalized sessions with a licensed therapist to explore your feelings and experiences.",
            icon: "/icons/therapy.svg",
          },
          {
            title: "Group Sessions",
            description:
              "Join group discussions guided by experts and connect with peers going through similar challenges.",
            icon: "/icons/group.svg",
          },
          {
            title: "Academic Stress Management",
            description:
              "Learn effective techniques to manage academic pressure, exam anxiety, and time management.",
            icon: "/icons/brain.svg",
          },
          {
            title: "Mindfulness & Meditation",
            description:
              "Practice guided breathing and mindfulness to relax your mind and reduce stress.",
            icon: "/icons/meditation.svg",
          },
          {
            title: "Career Guidance",
            description:
              "Discuss future options, passions, and goals with a counselor to find clarity and direction.",
            icon: "/icons/briefcase.svg",
          },
          {
            title: "Emergency Support",
            description:
              "Get immediate help in crisis situations from certified professionals, 24/7.",
            icon: "/icons/emergency.svg",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-center mb-4">
              <Image src={service.icon} alt={service.title} width={48} height={48} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </section>

      <div className="text-center mt-20">
        <Button asChild className="text-lg px-6 py-3 rounded-full">
          <Link href="/book">Book a Consultation</Link>
        </Button>
      </div>
    </main>
  );
}
