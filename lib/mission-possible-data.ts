export const MISSION_POSSIBLE_MOTTO = 'Learn • Build • Collaborate • Deploy'

export const MISSION_POSSIBLE_TAGLINE =
  '15-Day Full Stack Development & AI Internship Program'

export const MISSION_POSSIBLE_SUMMARY =
  'A structured, hybrid industry-oriented internship for beginner-level engineering students — specifically final-year Computer Science students. The first five days are delivered offline (bootcamp + hackathon); the capstone sprint runs online with mentor supervision throughout.'

export const MISSION_POSSIBLE_GOAL =
  'The objective is to provide students with practical exposure to industry workflows including software planning, design, development, testing, deployment, collaboration, and AI-assisted engineering — blending in-person foundation training with remote, sprint-based product delivery.'

export const PROGRAM_START_DATE = '27-07-2026'

export const PROGRAM_DURATION = '15 Days'

export const PROGRAM_MODE = 'Hybrid'

export const PROGRAM_MODE_DETAIL = 'Days 1–5 offline · Days 6–15 online'

export const PROGRAM_PHASES = [
  { name: 'Phase I — Foundation Bootcamp', duration: '4 Days', mode: 'Offline' as const },
  { name: 'Phase II — Hackathon Challenge', duration: '1 Day', mode: 'Offline' as const },
  { name: 'Phase III — Guided Capstone Project Sprint', duration: '10 Days', mode: 'Online' as const },
] as const

export const CORE_OUTCOMES = [
  'Exposure to modern software engineering workflows',
  'Hands-on experience in frontend and backend development',
  'Practical knowledge of AI-assisted development',
  'Experience participating in a hackathon environment',
  'Contribution to a real-world product development cycle',
  'Industry-style collaboration and project delivery experience',
]

export const PHASE_ONE = {
  title: 'Phase I — Foundation Bootcamp',
  subtitle: 'Offline Sessions',
  duration: '4 Days',
  mode: 'Offline',
  audience: 'Final Year CSE Students (CS1 & CS2)',
  days: [
    {
      day: 1,
      title: 'Orientation, AI & Prompt Engineering, UI/UX Fundamentals',
      sessions: [
        {
          title: 'Inauguration & Engineering Mindset',
          topics: [
            'Welcome and Program Overview',
            'Industry Expectations',
            'How Modern Software Engineers Solve Problems',
            'Opportunities in the AI Era',
          ],
        },
        {
          title: 'AI & Prompt Engineering',
          topics: [
            'Introduction to AI Tools',
            'Prompt Engineering Fundamentals',
            'Structured Prompting Techniques',
            'AI-Assisted Coding',
            'Debugging with AI',
            'Documentation Generation',
            'Practical Prompt Exercises',
          ],
        },
        {
          title: 'UI/UX Design Fundamentals',
          topics: [
            'Design Thinking',
            'Principles of Good UI/UX',
            'Color Theory and Typography',
            'Wireframing',
            'Components and Layouts',
            'Figma Fundamentals',
            'Prototyping Basics',
          ],
          activity: 'Design a simple landing page.',
        },
      ],
    },
    {
      day: 2,
      title: 'Front-End Development',
      sessions: [
        {
          title: 'Front-End Development',
          topics: [
            'HTML',
            'CSS',
            'Flexbox and Grid',
            'Responsive Design',
            'JavaScript Basics',
            'DOM Manipulation',
            'React Fundamentals',
          ],
          activity: 'Build a responsive interface.',
        },
      ],
    },
    {
      day: 3,
      title: 'Backend Development & APIs',
      sessions: [
        {
          title: 'Backend Development & APIs',
          topics: [
            'Client–Server Architecture',
            'REST APIs',
            'Databases',
            'Authentication Basics',
            'Node.js and Express Introduction',
            'API Testing using Postman',
          ],
          activity: 'Build and test APIs.',
        },
      ],
    },
    {
      day: 4,
      title: 'Developer Ecosystem & AI Development',
      sessions: [
        {
          title: 'Developer Ecosystem & AI Development',
          topics: [
            'Git and GitHub',
            'Collaboration Workflow',
            'Deployment using Vercel and Netlify',
            'AI IDEs & Development Tools',
            'Rapid Prototyping using AI',
            'Career Roadmaps',
            'Portfolio Building',
            'Hackathons & Open Source',
          ],
          activity: 'Deploy a mini project.',
        },
      ],
    },
  ],
}

export const PHASE_HACKATHON = {
  title: 'Phase II — Hackathon Challenge',
  subtitle: 'Hackathon Event',
  duration: '1 Day (Day 5)',
  mode: 'Offline',
  description:
    'A fast-paced product-building challenge simulating a real hackathon environment.',
  day: 5,
  dayTitle: 'Hackathon Event',
  sessions: [
    {
      title: 'Morning Session — Problem Discovery & Planning',
      topics: [
        'Theme / Problem Statement Release',
        'Team Formation (3–5 Members)',
        'Brainstorming',
        'Solution Design',
        'Architecture Planning',
        'Task Distribution',
      ],
    },
    {
      title: 'Build Session',
      topics: [
        'Frontend',
        'Backend',
        'APIs',
        'AI Tools',
        'Rapid Prototyping Platforms',
        'Mentor guidance throughout',
      ],
    },
    {
      title: 'Evening Session — Demo & Judging',
      topics: [
        'Problem Statement',
        'Solution',
        'Live Demo',
      ],
    },
  ],
  closingNote: 'Hackathon winners will be announced at the end of the day.',
}

export const PHASE_THREE = {
  title: 'Phase III — Guided Capstone Project Sprint',
  subtitle: 'Online capstone sprint',
  duration: '10 Days (Day 6–15)',
  mode: 'Online',
  description:
    'Students work on a live company project or internal product under development, contributing to real engineering workflows under mentor supervision — sprint-based execution, collaborative engineering, and deployment workflows.',
  days: [
    {
      day: 6,
      sdlcTag: 'Analyze',
      title: 'Product Discovery',
      activities: [
        'Project walkthrough',
        'Product requirement discussion',
        'Existing architecture overview',
        'Codebase introduction',
        'Team role allocation',
        'Sprint objective definition',
      ],
    },
    {
      day: 7,
      sdlcTag: 'Plan',
      title: 'Sprint Planning',
      activities: [
        'Requirement analysis',
        'Feature decomposition',
        'User story creation',
        'Task estimation',
        'Sprint board setup',
        'Milestone planning',
      ],
    },
    {
      day: 8,
      sdlcTag: 'Plan',
      title: 'System Design',
      activities: [
        'Wireframe analysis',
        'Component architecture planning',
        'Design system review',
        'Routing structure planning',
        'State flow mapping',
        'API contract discussion',
      ],
    },
    {
      day: 9,
      sdlcTag: 'Build',
      title: 'Frontend Sprint',
      activities: [
        'UI component development',
        'Page implementation',
        'Responsive design integration',
        'State management setup',
        'Form handling',
        'Client-side validations',
      ],
    },
    {
      day: 10,
      sdlcTag: 'Build',
      title: 'Backend Development',
      activities: [
        'API development',
        'Route configuration',
        'Middleware integration',
        'Authentication workflows',
        'Request validation',
        'Service-layer implementation',
      ],
    },
    {
      day: 11,
      sdlcTag: 'Build',
      title: 'Database Integration',
      activities: [
        'Schema review',
        'Database modeling',
        'CRUD implementation',
        'Query optimization',
        'Data validation',
      ],
    },
    {
      day: 12,
      sdlcTag: 'Build',
      title: 'Feature Integration',
      activities: [
        'API integration',
        'Frontend-backend communication',
        'Feature merging',
        'Business logic integration',
        'Error handling',
      ],
    },
    {
      day: 13,
      sdlcTag: 'Test',
      title: 'Testing & Review',
      activities: [
        'Functional testing',
        'Debugging sessions',
        'Code review',
        'Bug fixing',
        'Refactoring',
        'Performance improvements',
      ],
    },
    {
      day: 14,
      sdlcTag: 'Deploy',
      title: 'Deployment Setup',
      activities: [
        'Deployment configuration',
        'Environment variable setup',
        'Build optimization',
        'Hosting setup',
        'Technical documentation',
        'Demo preparation',
      ],
    },
    {
      day: 15,
      sdlcTag: 'Review',
      title: 'Final Demo',
      activities: [
        'Final project demonstration',
        'Code walkthrough',
        'Engineering review',
        'Mentor feedback',
      ],
    },
  ],
}

export const GAMIFICATION = {
  title: 'Gamification & Engagement Activities',
  subtitle: 'Throughout the Program',
  dailyChallenges: ['Prompt Battle', 'UI Challenge', 'Debugging Challenge', 'Quick Coding Tasks'],
  leaderboardPoints: [
    'Attendance',
    'Task Completion',
    'Asking Questions',
    'Team Collaboration',
    'Creativity',
    'Helping Others',
  ],
  recognition: [
    'Best Hackathon Team',
    'Best Contributor',
    'Best Team Player',
    'Best Problem Solver',
    'Outstanding Performer',
  ],
  mentorReviews: [
    'Progress Tracking',
    'Doubt Clearing Sessions',
    'Code Reviews',
    'Feedback and Improvements',
  ],
}
