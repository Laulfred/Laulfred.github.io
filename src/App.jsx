import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Download, ExternalLink, Github, Linkedin, Code2, Database, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R'],
    frameworks: ['React', 'Node.js', 'Next.js', 'Django', 'FastAPI'],
    tools: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'],
    analytics: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Excel']
  };

  const projects = [
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with real-time updates and custom filters.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      tech: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
      link: '#'
    },
    {
      title: 'ML Prediction Model',
      description: 'Machine learning model for predictive analytics with 94% accuracy rate.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      link: '#'
    }
  ];

  const experience = [
    {
      title: 'Senior Data Analyst',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Led data-driven initiatives that improved operational efficiency by 30%. Developed automated reporting systems and predictive models.'
    },
    {
      title: 'Software Engineer',
      company: 'StartUp Inc',
      period: '2020 - 2022',
      description: 'Built scalable web applications serving 100K+ users. Implemented CI/CD pipelines and optimized database performance.'
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Developed responsive websites and collaborated with design teams. Maintained code quality and documentation standards.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['hero', 'about', 'skills', 'projects', 'experience'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section
                    ? 'text-blue-600 font-semibold'
                    : darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </Button>
              </DialogTrigger>
              <DialogContent className={darkMode ? 'bg-gray-800 border-gray-700' : ''}>
                <DialogHeader>
                  <DialogTitle>Get in Touch</DialogTitle>
                  <DialogDescription>
                    Send me a message and I'll get back to you soon.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Send Message
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Software Engineer & Data Analyst
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm John Doe
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Crafting elegant solutions through code and transforming data into actionable insights.
          </p>
          <div className="flex gap-4 justify-center pt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Download className="w-5 h-5" />
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className={darkMode ? 'bg-gray-800 border-gray-700' : ''}>
                <DialogHeader>
                  <DialogTitle>Download Resume</DialogTitle>
                  <DialogDescription>
                    Choose your preferred format to download my resume.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 mt-4">
                  <Button className="w-full" variant="outline">
                    Download PDF
                  </Button>
                  <Button className="w-full" variant="outline">
                    Download DOCX
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a passionate software engineer and data analyst with over 5 years of experience building scalable applications and deriving insights from complex datasets. I thrive at the intersection of engineering and analytics, where I can leverage both technical skills and data-driven thinking.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  My journey in tech started with a fascination for solving problems through code. Today, I specialize in full-stack development, data visualization, and machine learning, always seeking to create solutions that are both elegant and impactful.
                </p>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  When I'm not coding or analyzing data, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-600" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-purple-600" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-600" />
                  Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.analytics.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full gap-2" size="sm">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/70 backdrop-blur'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white/50'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 John Doe. Built with React & shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}