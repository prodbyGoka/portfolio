import React, { useState } from 'react';
import { Github, Mail, MapPin, Globe, Server, Code, Terminal, ChevronRight, type LucideIcon } from 'lucide-react';

// Define the interface for a single language translation object
interface Translation {
  name: string;
  role: string;
  motto: string;
  aboutTitle: string;
  aboutText: string;
  skillsTitle: string;
  frontendTitle: string;
  backendTitle: string;
  contactTitle: string;
  contactText: string;
  emailLabel: string;
  githubLabel: string;
  location: string;
  ctaButton: string;
  rights: string;
}

// --- CUSTOMIZATION STEP 1: Update Translations (Your Name, Location, Bio, etc.) ---
// Use a Record type to ensure safe indexed access (fixes error 7053)
const translations: Record<'en' | 'mk', Translation> = {
  en: {
    name: "Grozdan Cvetkovski",
    role: "Freelance Full-Stack Developer",
    motto: "A kid who is building the future.",
    aboutTitle: "About Me",
    aboutText: "As a versatile Freelance Full-Stack Developer, I specialize in bringing ideas to life across the entire digital spectrum. My goal is to partner with new clients, offering tailored, high-quality development services from front-end user experience to robust back-end architecture. I focus on modern technologies to deliver scalable and efficient solutions.",
    skillsTitle: "Core Expertise",
    frontendTitle: "Front-End Development",
    backendTitle: "Back-End Development",
    contactTitle: "Get In Touch",
    contactText: "Ready to start your next project or looking to collaborate? Let's build something amazing together.",
    emailLabel: "Email Me",
    githubLabel: "Check my Code",
    location: "Skopje, North Macedonia",
    ctaButton: "Hire Me",
    rights: "All rights reserved."
  },
  // Macedonian translation updated for consistency
  mk: {
    name: "Гроздан Цветковски", 
    role: "Freelance Full-Stack Развивач",
    motto: "„Дете кое ја гради иднината.“",
    aboutTitle: "За Мене",
    aboutText: "Како сестран Freelance Full-Stack Развивач, специјализирам во оживување на идеи низ целиот дигитален спектар. Мојата цел е да соработувам со нови клиенти, нудејќи персонализирани, висококвалитетни развојни услуги, од корисничко искуство до робусна back-end архитектура. Се фокусирам на модерни технологии за да испорачам скалабилни и ефикасни решенија.",
    skillsTitle: "Клучна Експертиза",
    frontendTitle: "Front-End Развој",
    backendTitle: "Back-End Развој",
    contactTitle: "Контакт",
    contactText: "Спремни за вашиот следен проект или сакате да соработуваме? Ајде да изградиме нешто неверојатно заедно.",
    emailLabel: "Испрати Емаил",
    githubLabel: "Види го мојот Код",
    location: "Скопје, Северна Македонија",
    ctaButton: "Ангажирај Ме",
    rights: "Сите права се задржани."
  }
};

// Define the interface for SkillCard props (fixes error 7031)
interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const SkillCard = ({ title, icon: Icon, skills }: SkillCardProps) => (
  <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
    <div className="flex items-center gap-3 mb-4 text-blue-400">
      <Icon size={24} />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {/* Explicitly typing map parameters (fixes error 7006) */}
      {skills.map((skill: string, index: number) => (
        <li key={index} className="flex items-center text-slate-300">
          <ChevronRight size={16} className="text-blue-500 mr-2" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default function Portfolio() {
  // Sets the initial language to English.
  const [lang, setLang] = useState<'en' | 'mk'>('en'); // Explicitly define the state type
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'mk' : 'en');
  };

  // --- CUSTOMIZATION STEP 3 & 7: Set Email Address ---
  const email = "info.cvetkovski@proton.me";

  // --- CUSTOMIZATION STEP 4 & 8: Set GitHub Details ---
  const githubURL = "https://github.com/prodbyGoka";
  const githubUsername = "@prodbyGoka";

  // --- CUSTOMIZATION STEP 5: Example Front-End Skills (Adjusted for freelancer) ---
  const frontendSkills = [
    'React & Vanilla JavaScript', 
    'Responsive HTML/CSS/Tailwind', 
    'UI/UX Implementation', 
    'Cross-Browser Compatibility', 
    'Website Optimization'
  ];

  // --- CUSTOMIZATION STEP 6: Example Back-End Skills (Adjusted for freelancer) ---
  const backendSkills = [
    'Node.js & Express', 
    'Database Setup (SQL/NoSQL)', 
    'API Design & Integration', 
    'Authentication & Security', 
    'Server Management'
  ];


  return (
    // Added 'scroll-smooth' for better navigation experience
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Terminal className="text-blue-500" />
            {/* Logo/Title using the name */}
            <span>{t.name.split(' ')[0]}<span className="text-blue-500">.dev</span></span>
          </div>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-sm font-medium"
          >
            <Globe size={16} />
            {/* The button text shows the opposite language */}
            {lang === 'en' ? 'MK' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Main content wrapper - ensures content fills space and pushes footer down */}
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 -z-10" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-block mb-4 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              {t.role}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
              {t.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto italic mb-8">
              {t.motto}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-400 mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                {t.location}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {/* Primary CTA - Added scale-105 on hover for better interaction */}
              <a href={`mailto:${email}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:scale-[1.02]">
                {t.ctaButton}
              </a>
              {/* Secondary CTA */}
              <a href={githubURL} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* About Section (Uses t.aboutText from translations) */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">{t.aboutTitle}</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.aboutText}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">{t.skillsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Updated Front-End Skills */}
            <SkillCard 
              title={t.frontendTitle} 
              icon={Code}
              skills={frontendSkills}
            />
            {/* Updated Back-End Skills */}
            <SkillCard 
              title={t.backendTitle} 
              icon={Server}
              skills={backendSkills}
            />
          </div>
          {/* You can duplicate the SkillCard component for more categories like DevOps, Mobile, etc. */}
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">{t.contactTitle}</h2>
            <p className="text-slate-400 mb-12 text-lg">{t.contactText}</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                href={`mailto:${email}`}
                className="group flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="p-4 bg-blue-500/10 rounded-full text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <span className="text-slate-300 font-medium mb-1">{t.emailLabel}</span>
                {/* Updated displayed email address */}
                <span className="text-white text-lg font-bold">{email}</span>
              </a>

              <a 
                href={githubURL}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="p-4 bg-purple-500/10 rounded-full text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                  <Github size={32} />
                </div>
                <span className="text-slate-300 font-medium mb-1">{t.githubLabel}</span>
                {/* Updated displayed GitHub username */}
                <span className="text-white text-lg font-bold">{githubUsername}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {t.name}. {t.rights}</p>
      </footer>
    </div>
  );
}