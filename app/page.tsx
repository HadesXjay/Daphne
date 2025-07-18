"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DaphnePortfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [darkMode, setDarkMode] = useState(false);

  const sections = {
    about: {
      title: "About Me",
      content: `Hi! I'm Daphne Condino, a Junior Architect with a passion for turning dreams into structures.
      Currently exploring the world of digital art as a graphic designer in progress. I love blending creativity
      with logic to design inspiring, functional spaces and visuals.`
    },
    skills: {
      title: "Skills",
      content: ""
    },
    projects: {
      title: "Projects",
      content: `Coming soon: a showcase of architectural designs, 3D models, and graphic design experiments.`
    },
    contact: {
      title: "Contact",
      content: `Let’s connect! You can reach me via email at daphne.architecture@gmail.com or on Instagram @daphne.designs`
    }
  };

  const skillList = [
    {
      name: "AutoCAD",
      logo: "/logos/autocad.png",
      level: 90
    },
    {
      name: "SketchUp",
      logo: "/logos/sketchup.png",
      level: 80
    },
    {
      name: "Photoshop",
      logo: "/logos/photoshop.png",
      level: 70
    },
    {
      name: "Illustrator",
      logo: "/logos/illustrator.png",
      level: 65
    }
  ];

  return (
    <main className={`min-h-screen p-6 font-sans transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#FFEDF0] text-pink-900"}`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Daphne Condino</h1>
          <Button onClick={() => setDarkMode(!darkMode)} className="text-sm px-3 py-1">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </div>
        <p className="text-lg mb-6">Junior Architect & Graphic Designer (in progress)</p>

        <div className="flex justify-center gap-4 flex-wrap">
          {Object.keys(sections).map((key) => (
            <Button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`rounded-xl px-4 py-2 ${
                activeSection === key
                  ? darkMode
                    ? "bg-pink-700 text-white"
                    : "bg-[#FF8DA1] text-white"
                  : "bg-white text-pink-700"
              }`}
            >
              {sections[key].title}
            </Button>
          ))}
        </div>

        <Card className="mt-8 shadow-xl">
          <CardContent className="p-6">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{sections[activeSection].title}</h2>
              {activeSection === "skills" ? (
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-4">
                      <Image src={skill.logo} alt={skill.name} width={32} height={32} />
                      <div className="w-full">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm">{skill.level}%</span>
                        </div>
                        <div className={`w-full h-3 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-pink-200"}`}>
                          <div
                            className={`h-3 rounded-full ${darkMode ? "bg-pink-500" : "bg-[#FF8DA1]"}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-md whitespace-pre-line">{sections[activeSection].content}</p>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
