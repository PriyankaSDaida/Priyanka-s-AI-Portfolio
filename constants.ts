import { Project, SkillData } from './types';

export const OWNER_NAME = "Priyanka S Daida";
export const ROLE_TITLE = "Full Stack Developer & AI Enthusiast";

export const RESUME_CONTEXT = `
You are an AI assistant representing ${OWNER_NAME}.
Here is ${OWNER_NAME}'s professional background:

SUMMARY:
Passionate Full Stack Developer with expertise in React, Node.js, and Cloud Technologies. 
Enthusiastic about building scalable web applications and integrating AI solutions.

SKILLS:
- Languages: JavaScript, TypeScript, Python, Java
- Frontend: React, Next.js, Tailwind CSS, Redux
- Backend: Node.js, Express, NestJS, PostgreSQL, MongoDB
- Cloud/DevOps: AWS (EC2, S3, Lambda), Docker, CI/CD
- Tools: Git, VS Code, Figma

EXPERIENCE:
- Senior Software Engineer at TechCorp (2021-Present): Led a team of 5 developers, migrated legacy monolith to microservices, improved site performance by 40%.
- Software Developer at DevSolutions (2019-2021): Developed RESTful APIs, implemented real-time chat features using Socket.io.

PROJECTS:
1. AI Portfolio Website: This current website, built with React, Tailwind and Gemini AI. Source code available at: https://github.com/PriyankaSDaida/PriyankaSDaida
2. Cloud-Native E-Commerce: Scalable microservices architecture on AWS.
3. AI Analytics Dashboard: Visualization tool with predictive modeling.
4. Real-time Collaboration Tool: Document editing platform with WebSockets.

EDUCATION:
- B.Tech in Computer Science.

Tone: Professional, friendly, humble, and concise. 
If asked about contact info, suggest using the contact form on the website.
`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "AI Portfolio Website",
    description: "A modern, interactive developer portfolio featuring a Gemini-powered AI assistant. Built with React, Tailwind CSS, and Google GenAI SDK.",
    tags: ["React", "Gemini API", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/PriyankaSDaida/PriyankaSDaida",
    link: "#"
  },
  {
    id: '2',
    title: "Cloud-Native E-Commerce",
    description: "Scalable microservices architecture handling 10k+ concurrent users with sub-second latency.",
    tags: ["AWS", "Kubernetes", "Node.js", "Redis"],
    github: "https://github.com/PriyankaSDaida",
    link: "#"
  },
  {
    id: '3',
    title: "AI Analytics Dashboard",
    description: "A comprehensive dashboard for visualizing complex datasets using AI-driven insights and predictive modeling.",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    github: "https://github.com/PriyankaSDaida",
    link: "#"
  },
  {
    id: '4',
    title: "Real-time Collaboration Tool",
    description: "Web socket based document editing platform similar to Google Docs with operational transformation.",
    tags: ["WebSocket", "React", "MongoDB"],
    github: "https://github.com/PriyankaSDaida",
    link: "#"
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Frontend', A: 95, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'Cloud/DevOps', A: 75, fullMark: 100 },
  { subject: 'AI/ML Integration', A: 70, fullMark: 100 },
  { subject: 'System Design', A: 80, fullMark: 100 },
  { subject: 'UI/UX', A: 65, fullMark: 100 },
];