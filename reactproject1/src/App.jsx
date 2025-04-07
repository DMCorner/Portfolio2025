import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

const projects = [
    {
        title: "Task Manager App",
        description: "A full-stack productivity app with user authentication, real-time updates, and drag-and-drop UI.",
        link: "https://github.com/yourusername/task-manager-app",
    },
    {
        title: "Weather Dashboard",
        description: "A responsive React app that uses the OpenWeather API to display real-time weather information.",
        link: "https://github.com/yourusername/weather-dashboard",
    },
    {
        title: "Portfolio Website",
        description: "A modern portfolio showcasing my projects, resume, and contact info.",
        link: "https://github.com/yourusername/portfolio-website",
    },
];

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                <header className="text-center">
                    <h1 className="text-4xl font-bold mb-2">Hi, I'm Jane Doe</h1>
                    <p className="text-lg text-gray-600">Software Engineer | Full-Stack Developer | Tech Enthusiast</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href="mailto:jane.doe@example.com">
                            <Mail className="w-6 h-6 text-gray-700 hover:text-blue-500" />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 text-gray-700 hover:text-blue-500" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-500" />
                        </a>
                    </div>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <Card key={project.title} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline">View Project</Button>
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                    <p className="text-gray-700">
                        I'm a passionate software engineer with experience in building scalable web applications using modern
                        technologies like React, Node.js, and TypeScript. I love solving complex problems and continuously learning
                        new tools and frameworks.
                    </p>
                </section>
            </div>
        </div>
    );
}
