"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast"
import { Globe, Mail, Github, Linkedin, Briefcase, Download, Rocket, Code2 } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiPython, SiDjango, SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiApachekafka } from 'react-icons/si';
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function Portfolio() {
  const { toast } = useToast()

  const typeItRef = useRef<TypeIt | null>(null); // ✅ Explicit type for useRef

  useEffect(() => {
    if (typeof window !== "undefined") {
      typeItRef.current = new TypeIt("#typeit-element", {
        strings: [
          "Full-Stack Engineer 💻",
          "Web Architect 🏗️",
          "API Artisan 🛠️",
          "Cloud Developer ☁️",
          "DevOps Advocate 🚀",
          "Database Whisperer 🗄️",
          "UI/UX Alchemist 🎨",
          "Tech Stack Juggler 🤹",
          "Code Optimizer ⚡",
          "Open Source Contributor 🌍",
          "CI/CD Specialist 🔄",
          "Blockchain Builder ⛓️",
          "AI/ML Integrator 🧠",
          "Security Guardian 🛡️",
          "Tech Evangelist 📢",
          "Mobile Maestro 📱",
          "Microservices Maestro 🧩",
          "Serverless Specialist ⚡",
          "Tech Mentor 👨🏫",
          "Code Poet ✍️"
        ],
        speed: 80,               // ⏩ Fast but readable typing
        deleteSpeed: 50,         // ⏳ Smooth and natural deletion
        breakLines: false,
        lifeLike: true,
        loop: true,
        nextStringDelay: 1000,   // ⏳ Slight pause between words
        startDelay: 200,         // ⏳ Initial delay before typing starts
        cursor: true,            // ✅ Ensure cursor is enabled
        cursorChar: "|",         // ✅ Set cursor character explicitly
        cursorSpeed: 100,        // ✅ Control cursor blink speed
        // waitUntilVisible: true,  // 👀 Ensure animation starts only when visible
      }).go();
    }

    return () => {
      if (typeItRef.current) {
        typeItRef.current.destroy();
      }
    };
  }, []);



  const projects = [
    {
      title: "Chat Application",
      description: "Built with Next.js and Django",
      tech: ["Next.js", "TypeScript", "Tailwind", "Rest APIs"],
      link: "#"
    },
    // Add more projects
  ];

  const skills = [
    { name: 'HTML', icon: <FaHtml5 className='text-orange-500 w-12 h-12' /> },
    { name: 'CSS', icon: <FaCss3Alt className='text-blue-500 w-12 h-12' /> },
    { name: 'Javascript', icon: <FaJs className='text-yellow-500 w-12 h-12' /> },
    { name: 'React', icon: <FaReact className='text-cyan-500 w-12 h-12' /> },
    { name: 'Next.js', icon: <SiNextdotjs className='text-gray-900 dark:text-white w-12 h-12' /> },
    { name: 'Python', icon: <SiPython className='text-blue-400 w-12 h-12' /> },
    { name: 'Django', icon: <SiDjango className='text-green-700 w-12 h-12' /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className='text-blue-600 w-12 h-12' /> },
    { name: 'MongoDB', icon: <SiMongodb className='text-green-500 w-12 h-12' /> },
    { name: 'Redis', icon: <SiRedis className='text-red-600 w-12 h-12' /> },
    { name: 'ElasticSearch', icon: <SiElasticsearch className='text-yellow-600 w-12 h-12' /> },
    { name: 'Kafka', icon: <SiApachekafka className='text-black dark:text-white w-12 h-12' /> },
    { name: 'GIT', icon: <FaGitAlt className='text-red-500 w-12 h-12' /> },
    { name: 'Amazon Web Services', icon: <FaAws className='text-orange-400 w-12 h-12' /> },
    { name: 'Docker', icon: <FaDocker className='text-blue-400 w-12 h-12' /> },
  ];


  const experiences = [
    {
      title: "Software Development Engineer - 1",
      company: "Masters India",
      date: "Oct 2022 - Present",
      description: "Leading cross-functional teams in building enterprise-scale applications",
      tech: ["MongoDB", "AWS", "Docker", "Redis", "ELK"],
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "Software Development Engineer Intern",
      company: "Masters India",
      date: "Jul 2022 - Oct 2022",
      description: "Develop Many New Feature & Improvement Legacy Code.",
      tech: ["Python", "Django", "PostgreSQL", "Postman"],
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: "Penetration Tester Intern",
      company: "CyberSocial",
      date: "Jun 2022 - Jul 2022",
      description: "Built client websites and e-commerce solutions",
      tech: ["Burp Suite", "OWASP ZAP", "Nmap", "Wireshark", "SQLmap", "Metasploit"],
      icon: <Briefcase className="h-6 w-6" />,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://routerback.ntgen1.in/api/v1/portfolio/reach-out/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      toast({
        title: data.message,
        // description: "Your message has been sent successfully.",
        // status: "success",
      });

      setFormData({ name: "", email: "", text: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong. Please try again.",
        // description: "Something went wrong. Please try again.",
        // status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="flex items-center justify-end p-4 bg-background">
        <ThemeToggle />
      </nav>


      <div className="min-h-screen px-16 flex-col bg-background">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-5xl font-bold tracking-tight">
              <p className="p-4">Shrey Bhardwaj</p>
              <span
                className=""
                id="typeit-element"
              />
            </div>
            <p className="mt-4 text-xl text-muted-foreground">
              Building scalable web applications with modern technologies
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/Shrey_Bhardwaj_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className='py-16 text-center'>
          <h2 className='text-4xl font-bold mb-8'>🚀 Technical Expertise</h2>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                className='flex justify-center'
              >
                <Card className='hover:shadow-lg transition-all transform hover:scale-105 flex flex-col items-center p-3 w-32 h-32'>
                  <CardHeader className='flex flex-col items-center justify-center h-full'>
                    <div className='mb-1'>{skill.icon}</div>
                    <CardTitle className='text-sm text-center'>{skill.name}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 w-1 h-full bg-primary/10 dark:bg-primary/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8 md:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative md:grid md:grid-cols-2 gap-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />

                  <div className={`${index % 2 === 0 ? "md:text-right" : ""} md:order-1`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0 mb-4">
                        <div className={`${index % 2 === 0 ? "flex items-center gap-2 md:justify-end" : "flex items-center gap-2 md:justify-start"}`}>
                          {index % 2 === 0 ? (
                            // Even index: Show icon first, then title
                            <>
                              <span className="text-primary">{exp.icon}</span>
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
                            </>
                          ) : (
                            // Odd index: Show title first, then icon
                            <>
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
                              <span className="text-primary">{exp.icon}</span>
                            </>
                          )}
                        </div>
                        <p className="text-muted-foreground"> {exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </CardHeader>
                      <CardContent className="p-0 space-y-4">
                        <div className={`${index % 2 === 0 ? "flex flex-wrap gap-2 md:justify-end" : "flex flex-wrap gap-2 md:justify-start"}`}>
                          {exp.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                        <p className="text-sm text-primary font-medium">{exp.date}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty spacer for alternate layout */}
                  <div className={index % 2 === 0 ? "md:order-2" : ""} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className=" py-16">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <CardTitle>{project.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className=" py-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Let&apos;s Work Together</CardTitle>
              <CardDescription>
                Have a project in mind? Reach out and let&apos;s discuss!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Textarea
                    name="text"
                    placeholder="Project Details"
                    rows={5}
                    value={formData.text}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Avatar>
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">SHREY BHARDWAJ</p>
                <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/I-am-shreybhardwaj" target="_blank">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/in/shrey-bhardwaj-15a912202/" target="_blank">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#">
                <Globe className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>

  );
}