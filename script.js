// --- DATA ---
const projects = [
    {
      title: 'Kisan Vaani',
      role: 'AI Agricultural Platform',
      desc: 'A full-stack platform providing farmers with real-time market data, localized weather forecasts, and AI-driven crop diagnostics.',
      tech: ['React', 'Node.js', 'Gemini AI'],
      link: 'https://kisan-vani-client.onrender.com',
      iconName: 'globe',
      theme: 'theme-emerald'
    },
    {
      title: 'AI Interview Copilot',
      role: 'Autonomous Interview Agent',
      desc: 'An AI-powered mock interview platform that parses resumes, generates context-aware technical questions, and streams live voice.',
      tech: ['React', 'WebRTC', 'Gemini API'],
      link: 'https://interview-ai-client-1mwd.onrender.com/login',
      iconName: 'cpu',
      theme: 'theme-blue'
    },
    {
      title: 'Social Media App',
      role: 'Full Stack Social Platform',
      desc: 'A dynamic, real-time social networking application allowing users to share updates, interact with content, and connect.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://social-app-chi-peach.vercel.app',
      iconName: 'layers',
      theme: 'theme-purple'
    },
    {
      title: 'E-commerce Platform',
      role: 'Digital Storefront',
      desc: 'A robust digital storefront featuring secure payment processing, shopping cart state management, and an intuitive UI.',
      tech: ['React', 'Redux', 'Express'],
      link: 'https://ecommerce-website-frontend-hhuq.onrender.com',
      iconName: 'database',
      theme: 'theme-orange'
    },
    {
      title: 'Universal Auth Portal',
      role: 'Security Infrastructure',
      desc: 'A centralized, secure authentication gateway featuring JWT session management and role-based access control.',
      tech: ['React', 'JWT', 'Tailwind CSS'],
      link: 'https://authentication-app-clientt.onrender.com',
      iconName: 'terminal',
      theme: 'theme-rose'
    }
  ];
  
  const skills = [
    "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", 
    "HTML5 & CSS3", "Tailwind CSS", "REST APIs", "Google Gemini API", "Git & GitHub"
  ];
  
  // --- RENDER SKILLS ---
  const skillsContainer = document.getElementById('skills-container');
  skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = "skill-tag";
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });
  
  // --- RENDER PROJECTS ---
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(project => {
    const techSpans = project.tech.map(t => 
      `<span class="tech-tag">${t}</span>`
    ).join('');
  
    const cardHtml = `
      <div class="project-card ${project.theme}">
        <div class="project-header">
          <div class="icon-wrapper">
            <i data-lucide="${project.iconName}" class="icon-md project-icon"></i>
          </div>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="link-wrapper" title="View Live Project">
            <i data-lucide="external-link" class="icon-sm"></i>
          </a>
        </div>
        
        <h3 class="project-title">${project.title}</h3>
        <p class="project-role">${project.role}</p>
        <p class="project-desc">${project.desc}</p>
        
        <div class="project-tech-list">
          ${techSpans}
        </div>
      </div>
    `;
    projectsContainer.insertAdjacentHTML('beforeend', cardHtml);
  });
  
  // --- DYNAMIC COPYRIGHT YEAR ---
  document.getElementById('copyright-text').textContent = `© ${new Date().getFullYear()} Yashdeep. Built with Vanilla JS & Pure CSS.`;
  
  // --- INITIALIZE LUCIDE ICONS ---
  lucide.createIcons();