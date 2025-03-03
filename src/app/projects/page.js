'use client';

import React from "react";
import styles from "./projects.module.scss";
import Rethink from "@/static/projects/rethink.png";
import Esummit from "@/static/projects/esummit.png";
import Radio from "@/static/projects/radio.png";
import Srishti from "@/static/projects/srishti.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      "image": Rethink,
      "alt": "Rethink Portal",
      "title": "Tinkering Lab",
      "description": "Rethink Portal is the official portal of Tinkering Lab. It helps in the dissemination of information such as Events, Achievement, Projects, etc. It also enables users to create a project, get approval for the project, submit report & get an item issued from the lab.",
      "link": "https://tinkeringlab.iitr.ac.in/",
      "codeLink": null,
      "tags": ["Web Development", "Portal"]
    },
    {
      "image": Radio,
      "alt": "College Radio",
      "title": "College Radio",
      "description": "College Radio allows simultaneous live viewing of videos in real-time, akin to facebook's watch party. It also allows real-time changes in track and queues. Synchronization is achieved using WebSockets.",
      "link": null,
      "codeLink": "https://github.com/rohitjha941/radio",
      "tags": ["Real-time", "WebSockets", "Video Streaming"]
    },
    {
      "image": Srishti,
      "alt": "Srishti Website",
      "title": "Srishti Website",
      "description": "Srishti is the Annual Technical Exhibition of IIT Roorkee that aims towards integrating all realms of technical activities conducted within the R-land. Srishti has inspired the brilliant minds of our institute to come up with creative ideas and practical innovations",
      "link": "https://srishti.iitr.ac.in/",
      "codeLink": "https://github.com/rohitjha941/srishti",
      "tags": ["Technical Exhibition", "Web Development"]
    },
    {
      "image": Esummit,
      "alt": "E-Summit Website",
      "title": "E-Summit Website",
      "description": "E-Summit IIT Roorkee brings a platform to celebrate the history and the spirit of entrepreneurship; and to inspire the leaders and roblem solvers of today and tomorrow. This 2-day extravaganza will see students and budding enthusiasts on a common stage.",
      "link": "https://esummit.in/",
      "codeLink": null,
      "tags": ["Entrepreneurship", "Event Website"]
    },
    {
      "image": Esummit,
      "alt": "E-Summit Website",
      "title": "E-Summit Website",
      "description": "E-Summit IIT Roorkee brings a platform to celebrate the history and the spirit of entrepreneurship; and to inspire the leaders and roblem solvers of today and tomorrow. This 2-day extravaganza will see students and budding enthusiasts on a common stage.",
      "link": "https://esummit.in/",
      "codeLink": null,
      "tags": ["Entrepreneurship", "Event Website"]
    },
    {
      "image": Esummit,
      "alt": "E-Summit Website",
      "title": "E-Summit Website",
      "description": "E-Summit IIT Roorkee brings a platform to celebrate the history and the spirit of entrepreneurship; and to inspire the leaders and roblem solvers of today and tomorrow. This 2-day extravaganza will see students and budding enthusiasts on a common stage.",
      "link": "https://esummit.in/",
      "codeLink": null,
      "tags": ["Entrepreneurship", "Event Website"]
    },
    {
      "image": Esummit,
      "alt": "E-Summit Website",
      "title": "E-Summit Website",
      "description": "E-Summit IIT Roorkee brings a platform to celebrate the history and the spirit of entrepreneurship; and to inspire the leaders and roblem solvers of today and tomorrow. This 2-day extravaganza will see students and budding enthusiasts on a common stage.",
      "link": "https://esummit.in/",
      "codeLink": null,
      "tags": ["Entrepreneurship", "Event Website"]
    },
    {
      "image": Esummit,
      "alt": "E-Summit Website",
      "title": "E-Summit Website",
      "description": "E-Summit IIT Roorkee brings a platform to celebrate the history and the spirit of entrepreneurship; and to inspire the leaders and roblem solvers of today and tomorrow. This 2-day extravaganza will see students and budding enthusiasts on a common stage.",
      "link": "https://esummit.in/",
      "codeLink": null,
      "tags": ["Entrepreneurship", "Event Website"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={styles.projects}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, index) => (
        <motion.div 
          className={styles.projects_unit} 
          key={index}
          variants={item}
        >
          <div className={styles.project_image_wrapper}>
            <Image 
              className={styles.project_image} 
              src={project.image} 
              alt={project.alt}
              width={400}
              height={200}
              priority={index < 2}
            />
          </div>

          <div className={styles.project_details}>
            <div className={styles.project_title}>{project.title}</div>
            
            <div className={styles.project_tags}>
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className={styles.project_tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.project_description}>
              {project.description}
            </div>

            <div className={styles.project_links}>
              {project.link && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.link}
                >
                  <button>Visit Site</button>
                </a>
              )}
              {project.codeLink && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.codeLink}
                >
                  <button>View Code</button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}