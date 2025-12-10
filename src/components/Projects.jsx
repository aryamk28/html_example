







import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Double C&B",
    category: "Web",
    img: "db.png",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Calculator",
    category: "App",
    img: "calc.png",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Expense Tracker",
    category: "App",
    img: "exp.png",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Plant UI",
    category: "Web",
    img: "plant.png",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Todo App",
    category: "App",
    img: "todo.png",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Portfolio",
    category: "Web",
    img: "portfolio.png",
    demo: "https://example.com",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="py-20 w-full" style={{ backgroundColor: 'white', color: "black" }}>


      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
        <p className="text-gray-500 mt-2">Most recent works</p>
      </div>


      <div className="flex justify-center gap-6 text-lg mb-10">
        {["All", "Web", "App"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`transition font-medium ${activeFilter === filter
              ? "text-violet-600"
              : "text-gray-600 hover:text-violet-400"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow p-5 cursor-pointer border"
          >

            <img
              src={project.img}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />


            <h2 className="text-xl font-semibold">{project.title}</h2>


          </motion.div>
        ))}
      </div>
    </div>
  );
}

