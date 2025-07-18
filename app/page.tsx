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
      content: `Coming soon: a showcase of archite
