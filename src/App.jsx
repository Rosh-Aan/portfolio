import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useInView, AnimatePresence, motion } from 'framer-motion'
import { 
  FaGithub,
  FaWhatsapp,
  // FaLinkedinIn, 
  // FaTwitter,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaShopify,
  FaWordpress,
  FaCloud,
  FaDatabase,
  FaBrain,
  FaHandshake,
  FaGlobe,
  FaGem
} from 'react-icons/fa'
import { 
  ExternalLink, 
  Mail, 
  MapPin, 
  Phone,
  Menu,
  X,
  Code2,
  Database,
  Cloud,
  ChevronRight,
  ArrowRight,
  Send,
  Heart,
  Zap,
  Shield,
  Star,
  Users,
  Layers,
  Terminal,
  Gem,
  Box,
  Cpu,
  Layers3,
  Palette,
  ShoppingCart,
  TrendingUp,
  Bot,
  Server,
  Globe
} from 'lucide-react'

const personalInfo = {
  name: "Roshaan Sohail",
  title: "Full Stack Developer",
  subtitle: "Building digital experiences that matter",
  location: "Pakistan",
  email: "work.rosh001@gmail.com",
  phone: "+92 328 4379169",
  bio: "I'm a passionate full-stack developer with expertise in building scalable web applications and microservices. With years of experience in modern technologies, I transform complex problems into elegant, user-friendly solutions.",
  resume: "#"
}

const skills = [
  {
    icon: Gem,
    title: "Ruby on Rails",
    description: "Building robust, scalable web applications with Rails. Deep expertise in API design, database optimization, and background job processing.",
    items: ["Rails 7", "PostgreSQL", "Redis", "Sidekiq", "ActionCable", "Hotwire"]
  },
  {
    icon: FaReact,
    title: "MERN Stack",
    description: "Full-stack JavaScript development with MongoDB, Express, React, and Node.js. Creating modern, responsive single-page applications.",
    items: ["React", "Next.js", "Node.js", "Express", "MongoDB", "GraphQL"]
  },
  {
    icon: FaCloud,
    title: "DevOps & AI",
    description: "Deploying and managing applications with modern cloud infrastructure and AI-powered development tools for faster shipping.",
    items: ["AWS", "Docker", "Kubernetes", "ChatGPT", "Claude", "Cursor"]
  }
]

const techLogos = [
  { icon: Gem, name: "Ruby" },
  { icon: Box, name: "Rails" },
  { icon: FaReact, name: "React" },
  { icon: Server, name: "Node.js" },
  { icon: Database, name: "MongoDB" },
  { icon: Cloud, name: "AWS" },
  { icon: Box, name: "Docker" },
  { icon: ShoppingCart, name: "Shopify" },
  { icon: Globe, name: "WordPress" },
  { icon: Bot, name: "AI Tools" }
]

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "TechVision Solutions",
    period: "2022 - Present",
    description: "Leading development of enterprise SaaS applications serving 50,000+ users. Architected microservices infrastructure reducing response times by 60%. Mentored junior developers and established coding best practices.",
    skills: ["Ruby on Rails", "React", "AWS", "PostgreSQL", "Docker"]
  },
  {
    role: "Full Stack Developer",
    company: "Digital Dynamics",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client-facing web applications. Implemented CI/CD pipelines reducing deployment time by 75%. Collaborated with UX team to improve user engagement by 40%.",
    skills: ["Node.js", "React", "MongoDB", "Redis", "GCP"]
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Built responsive web applications from scratch using React. Optimized frontend performance achieving 90+ Lighthouse scores. Integrated third-party APIs for enhanced functionality.",
    skills: ["React", "JavaScript", "Shopify", "WordPress"]
  }
]

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A comprehensive e-commerce solution with real-time inventory, payment processing, and analytics dashboard. Features include AI-powered recommendations and multi-vendor support.",
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Stripe", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    live: "#",
    github: "#"
  },
  {
    title: "Healthcare Platform",
    category: "HealthTech",
    description: "HIPAA-compliant healthcare platform with telemedicine integration, appointment scheduling, and patient management. Serving 100+ healthcare providers.",
    tech: ["Rails", "React", "PostgreSQL", "WebRTC", "AWS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: "#",
    github: "#"
  },
  {
    title: "AI Content Generator",
    category: "AI/ML Application",
    description: "AI-powered content generation platform leveraging GPT models for marketing copy, blog posts, and social media content with brand voice customization.",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI", "Docker"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    live: "#",
    github: "#"
  },
  {
    title: "FinTech Dashboard",
    category: "FinTech",
    description: "Real-time financial analytics dashboard with investment tracking, portfolio management, and automated reporting for institutional investors.",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    live: "#",
    github: "#"
  }
]

const clients = [
  "USA", "UK", "Canada", "Finland", "Germany", "Pakistan"
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

const particleData = [
  { left: '10%', delay: '2s', duration: '18s' },
  { left: '20%', delay: '5s', duration: '22s' },
  { left: '30%', delay: '8s', duration: '20s' },
  { left: '40%', delay: '1s', duration: '25s' },
  { left: '50%', delay: '12s', duration: '17s' },
  { left: '60%', delay: '3s', duration: '21s' },
  { left: '70%', delay: '7s', duration: '19s' },
  { left: '80%', delay: '10s', duration: '23s' },
  { left: '90%', delay: '4s', duration: '16s' },
  { left: '15%', delay: '6s', duration: '24s' }
]

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <a href="#" className="logo">
            {personalInfo.name.split(' ')[0]}<span>.</span>
          </a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <li>
              <a href={personalInfo.resume} className="nav-cta">Resume</a>
            </li>
          </ul>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-nav active"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="mobile-nav-close"
              onClick={() => setMobileOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href={personalInfo.resume} onClick={() => setMobileOpen(false)}>
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Particles() {
  return (
    <div className="particles">
      {particleData.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration
          }}
        />
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
      
      <div className="hero-content">
        <div className="hero-left">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero-badge-dot" />
            Available for freelance work
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="gold">{personalInfo.name.split(' ')[0]}</span><br />
            {personalInfo.name.split(' ')[1]}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Senior Full Stack Developer specializing in <strong>Ruby on Rails</strong> & <strong>MERN Stack</strong>. 
            Building scalable applications with AI integration for HealthTech, FinTech, E-Commerce & Real Estate.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#contact" className="btn-primary">
              Get in Touch
              <ArrowRight size={18} />
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Exp</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clients</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="profile-container">
            <div className="profile-ring" />
            <div className="profile-ring" />
            <div className="profile-ring" />
            <div className="profile-img">
              <img 
                src="/profile-image.jpg" 
                alt={personalInfo.name}
              />
            </div>
            <div className="tech-orbit">
              <div className="tech-item"><Gem size={28} /></div>
              <div className="tech-item"><FaReact size={28} /></div>
              <div className="tech-item"><FaAws size={28} /></div>
              <div className="tech-item"><FaDocker size={28} /></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section section-about">
      <div className="section-bg">
        <div className="section-orb" />
        <div className="section-orb" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="react-atom" style={{top: '15%', left: '8%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{bottom: '20%', right: '12%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{top: '50%', right: '5%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <span className="code-symbol" style={{top: '30%', left: '5%', animationDelay: '0s'}}>{'{}'}</span>
        <span className="code-symbol" style={{top: '60%', right: '8%', animationDelay: '1s'}}>{'<>'}</span>
        <span className="code-symbol" style={{bottom: '15%', left: '15%', animationDelay: '2s'}}>{'/ >'}</span>
        <div className="diamond-symbol" style={{top: '45%', left: '3%', animationDelay: '0.5s'}} />
        <div className="diamond-symbol" style={{bottom: '30%', right: '20%', animationDelay: '1.5s'}} />
        <span className="bracket-symbol" style={{top: '20%', right: '15%', animationDelay: '0.3s'}}>{'{'}</span>
      </div>
      <div className="section-content">
        <div className="about-grid" ref={ref}>
          <motion.div 
            className="about-image-wrap"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about-img">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                alt="Team collaboration"
              />
            </div>
            <div className="exp-badge">
              <div className="exp-badge-num">5+</div>
              <div className="exp-badge-text">Years Exp</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>
              Building <span className="gold">Premium</span> Digital Solutions
            </h2>
            <p>{personalInfo.bio}</p>
            <p>
              My core expertise spans <strong>Ruby on Rails</strong> and the <strong>MERN Stack</strong> (MongoDB, Express.js, React, Node.js), 
              with deep hands-on experience in React, Shopify, and WordPress.
            </p>
            <p>
              I'm equipped with the latest AI tools — ChatGPT, Claude, Cursor, GitHub Copilot, and Midjourney — and no-code platforms 
              like Lovable, Emergent, Bubble, and Webflow to ship products up to 3x faster.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><Zap /></div>
                <div className="highlight-text">
                  <h4>Fast Delivery</h4>
                  <p>Ship products 3x faster</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><FaGlobe /></div>
                <div className="highlight-text">
                  <h4>Global Clients</h4>
                  <p>USA, UK, Canada, EU</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><FaBrain /></div>
                <div className="highlight-text">
                  <h4>AI-Powered</h4>
                  <p>Latest AI tools integrated</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><FaHandshake /></div>
                <div className="highlight-text">
                  <h4>Trusted Partner</h4>
                  <p>Long-term relationships</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stack" className="section section-stack">
      <div className="section-bg">
        <div className="section-orb" />
        <div className="section-orb" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="react-atom" style={{top: '10%', right: '20%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{bottom: '15%', left: '25%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{top: '50%', left: '5%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <span className="code-symbol" style={{top: '30%', left: '15%', animationDelay: '0.5s'}}>{'{}'}</span>
        <span className="code-symbol" style={{bottom: '30%', right: '10%', animationDelay: '1.5s'}}>{'<>'}</span>
        <span className="code-symbol" style={{top: '70%', left: '8%', animationDelay: '2.5s'}}>{'/ >'}</span>
        <div className="diamond-symbol" style={{top: '25%', left: '3%', animationDelay: '0.8s'}} />
        <div className="diamond-symbol" style={{bottom: '40%', right: '25%', animationDelay: '1.8s'}} />
        <div className="diamond-symbol" style={{top: '60%', right: '5%', animationDelay: '2.8s'}} />
        <span className="bracket-symbol" style={{top: '20%', right: '5%', animationDelay: '0.3s'}}>{'}'}</span>
        <span className="bracket-symbol" style={{bottom: '25%', left: '12%', animationDelay: '1.3s'}}>{'{'}</span>
      </div>
      <div className="section-content">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My Stack</p>
          <h2 className="section-title">Tech <span className="gold">Expertise</span></h2>
          <p className="section-desc">
            A powerful combination of traditional development and cutting-edge AI tools 
            to deliver exceptional results faster than ever.
          </p>
        </motion.div>
        
        <div className="stack-grid" ref={ref}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="stack-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stack-icon">
                <skill.icon />
              </div>
              <h3 className="stack-title">{skill.title}</h3>
              <p className="stack-desc">{skill.description}</p>
              <div className="stack-tags">
                {skill.items.map(item => (
                  <span key={item} className="stack-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="tech-logos"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="tech-logos-title">Technologies I Work With</p>
          <div className="tech-logos-grid">
            {techLogos.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="tech-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              >
                <div className="tech-logo-icon">
                  <tech.icon />
                </div>
                <span className="tech-logo-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="section section-experience">
      <div className="section-bg">
        <div className="section-orb" />
        <div className="section-orb" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="react-atom" style={{top: '20%', left: '8%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{bottom: '25%', right: '12%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{top: '5%', right: '30%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <span className="code-symbol" style={{top: '60%', right: '5%', animationDelay: '0.7s'}}>{'{}'}</span>
        <span className="code-symbol" style={{top: '15%', left: '10%', animationDelay: '1.7s'}}>{'<>'}</span>
        <span className="code-symbol" style={{bottom: '40%', left: '5%', animationDelay: '2.7s'}}>{'/ >'}</span>
        <div className="diamond-symbol" style={{top: '10%', right: '20%', animationDelay: '0.4s'}} />
        <div className="diamond-symbol" style={{bottom: '15%', left: '20%', animationDelay: '1.4s'}} />
        <span className="bracket-symbol" style={{top: '35%', left: '3%', animationDelay: '0.9s'}}>{'}'}</span>
      </div>
      <div className="section-content">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Work <span className="gold">Experience</span></h2>
          <p className="section-desc">
            A proven track record of delivering high-impact projects for clients across the globe.
          </p>
        </motion.div>
        
        <div className="exp-timeline" ref={ref}>
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="exp-item"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="exp-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-date">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="exp-skill">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="projects" className="section section-projects">
      <div className="section-bg">
        <div className="section-orb" />
        <div className="section-orb" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="react-atom" style={{top: '15%', left: '10%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{bottom: '20%', right: '20%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{top: '40%', left: '5%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{top: '5%', right: '10%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <span className="code-symbol" style={{top: '25%', right: '15%', animationDelay: '0.2s'}}>{'{}'}</span>
        <span className="code-symbol" style={{bottom: '35%', left: '8%', animationDelay: '1.2s'}}>{'<>'}</span>
        <span className="code-symbol" style={{top: '70%', right: '25%', animationDelay: '2.2s'}}>{'/ >'}</span>
        <div className="diamond-symbol" style={{bottom: '15%', left: '20%', animationDelay: '0.6s'}} />
        <div className="diamond-symbol" style={{top: '50%', right: '5%', animationDelay: '1.6s'}} />
        <span className="bracket-symbol" style={{top: '70%', right: '8%', animationDelay: '0.4s'}}>{'{'}</span>
        <span className="bracket-symbol" style={{bottom: '30%', left: '15%', animationDelay: '1.4s'}}>{'}'}</span>
      </div>
      <div className="section-content">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured <span className="gold">Projects</span></h2>
          <p className="section-desc">
            A selection of projects showcasing my expertise across different industries and technologies.
          </p>
        </motion.div>
        
        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.live} className="project-link" title="View Live">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.github} className="project-link" title="View Code">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Clients() {
  const clientData = [
    { country: 'USA', flag: '🇺🇸', region: 'North America' },
    { country: 'UK', flag: '🇬🇧', region: 'Europe' },
    { country: 'Canada', flag: '🇨🇦', region: 'North America' },
    { country: 'Finland', flag: '🇫🇮', region: 'Europe' },
    { country: 'Germany', flag: '🇩🇪', region: 'Europe' },
    { country: 'Pakistan', flag: '🇵🇰', region: 'Asia' }
  ]

  return (
    <section className="section-clients">
      <div className="section-bg">
        <div className="section-orb section-orb-glow" />
        <div className="section-orb" />
        <div className="globe-container">
          <div className="globe">
            <div className="globe-inner">
              <div className="globe-ring" />
              <div className="globe-ring" />
              <div className="globe-ring" />
              <div className="globe-dot globe-dot-1" />
              <div className="globe-dot globe-dot-2" />
              <div className="globe-dot globe-dot-3" />
              <div className="globe-dot globe-dot-4" />
              <div className="globe-dot globe-dot-5" />
              <div className="globe-dot globe-dot-6" />
            </div>
          </div>
        </div>
        <div className="react-atom" style={{top: '10%', right: '5%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{bottom: '10%', left: '10%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <span className="code-symbol" style={{top: '25%', left: '5%', animationDelay: '0s'}}>{'{}'}</span>
        <span className="code-symbol" style={{bottom: '30%', right: '8%', animationDelay: '1s'}}>{'<>'}</span>
        <div className="diamond-symbol" style={{top: '40%', right: '3%', animationDelay: '0.5s'}} />
        <div className="diamond-symbol" style={{bottom: '35%', left: '3%', animationDelay: '1.5s'}} />
        <div className="pulse-ring pulse-ring-1" />
        <div className="pulse-ring pulse-ring-2" />
        <div className="pulse-ring pulse-ring-3" />
      </div>
      <div className="clients-content">
        <div className="clients-header">
          <p className="section-label">Global Reach</p>
          <h2 className="section-title">Clients <span className="gold">Worldwide</span></h2>
          <p className="section-desc">
            Proud to partner with amazing clients across multiple continents
          </p>
        </div>
        <div className="clients-grid">
          {clientData.map((client, index) => (
            <motion.div 
              key={client.country}
              className="client-card"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -8 }}
            >
              <div className="client-flag">{client.flag}</div>
              <div className="client-info">
                <h3 className="client-country">{client.country}</h3>
                <span className="client-region">{client.region}</span>
              </div>
              <div className="client-glow" />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="clients-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="client-stat">
            <div className="client-stat-num">6+</div>
            <div className="client-stat-label">Countries</div>
          </div>
          <div className="client-stat-divider" />
          <div className="client-stat">
            <div className="client-stat-num">4</div>
            <div className="client-stat-label">Continents</div>
          </div>
          <div className="client-stat-divider" />
          <div className="client-stat">
            <div className="client-stat-num">30+</div>
            <div className="client-stat-label">Global Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '', title: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      setError(false)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: '', email: '', title: '', message: '' })
    } catch (err) {
      setError(true)
      console.error('EmailJS error:', err)
    }
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="section-bg">
        <div className="section-orb section-orb-main" />
        <div className="section-orb" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="section-particle" />
        <div className="contact-bg-element contact-bg-1" />
        <div className="contact-bg-element contact-bg-2" />
        <div className="contact-bg-element contact-bg-3" />
        <div className="react-atom" style={{top: '8%', left: '5%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <div className="react-atom" style={{bottom: '15%', right: '8%'}}>
          <div className="react-atom-core" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
          <div className="react-atom-orbit" />
        </div>
        <span className="code-symbol" style={{top: '20%', right: '3%', animationDelay: '0s'}}>{'{}'}</span>
        <span className="code-symbol" style={{bottom: '25%', left: '3%', animationDelay: '1s'}}>{'<>'}</span>
        <div className="diamond-symbol" style={{top: '60%', left: '2%', animationDelay: '0.5s'}} />
        <div className="diamond-symbol" style={{bottom: '35%', right: '3%', animationDelay: '1.5s'}} />
        <span className="bracket-symbol" style={{top: '35%', right: '12%', animationDelay: '0.3s'}}>{'}'}</span>
        <span className="bracket-symbol" style={{bottom: '10%', left: '15%', animationDelay: '1.3s'}}>{'{'}</span>
      </div>
      <div className="section-content">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Build Something <span className="gold">Amazing</span></h2>
          <p className="section-desc">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>
        
        <div className="contact-container" ref={ref}>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon"><Mail /></div>
                <div>
                  <h3>Email Me</h3>
                  <p>For project inquiries</p>
                </div>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="contact-info-link">{personalInfo.email}</a>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon"><Phone /></div>
                <div>
                  <h3>Call Me</h3>
                  <p>Available Mon-Fri, 9am-6pm</p>
                </div>
              </div>
              <a href={`tel:${personalInfo.phone}`} className="contact-info-link">{personalInfo.phone}</a>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon"><MapPin /></div>
                <div>
                  <h3>Location</h3>
                  <p>Remote-friendly</p>
                </div>
              </div>
              <span className="contact-info-text">{personalInfo.location}</span>
            </div>
            
            <div className="contact-social-section">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <motion.a 
                  href="https://github.com/Rosh-Aan" 
                  className="social-link" 
                  title="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://wa.me/923284379169" 
                  className="social-link" 
                  title="WhatsApp"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                </motion.a>
                {/* 
                <motion.a 
                  href="https://linkedin.com" 
                  className="social-link" 
                  title="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  className="social-link" 
                  title="Twitter"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter />
                </motion.a>
                */}
              </div>
            </div>
            
            <div className="contact-availability">
              <div className="availability-indicator">
                <span className="availability-dot" />
                <span>Available for new projects</span>
              </div>
              <p>Typically respond within 24 hours</p>
            </div>
          </motion.div>
          
          <motion.form 
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you shortly.</p>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="title"
                  id="subject"
                  placeholder="Project Discussion"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <div className="input-wrapper textarea-wrapper">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project requirements, timeline, and budget..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
            </div>
            
            {error && (
              <p className="form-error">Failed to send message. Please try again or email directly.</p>
            )}
            
            <motion.button 
              type="submit" 
              className={`btn-primary form-submit ${submitted ? 'submitted' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>
                  <span>Message Sent!</span>
                  <Zap size={18} />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 {personalInfo.name}. Built with <Heart size={16} style={{ display: 'inline', color: '#2DD4BF' }} /> and React
        </p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
