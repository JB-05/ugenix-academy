export const MISSION_POSSIBLE_MOTTO = 'Learn • Build • Collaborate • Deploy'

export const MISSION_POSSIBLE_TAGLINE =
  '15-Day Full Stack Development & AI Internship Program'

export const MISSION_POSSIBLE_SUMMARY =
  'An industry-style internship for final-year CSE students — offline foundation bootcamp, guided team sprint, gamified challenges, and mentor-led reviews from day one to deployment.'

export const MISSION_POSSIBLE_GOAL =
  'The goal of the program is not just to teach technologies, but to provide students with an industry-style development experience — helping them build real-world projects, collaborate in teams, and leverage AI tools effectively.'

export const PHASE_ONE = {
  title: 'Phase I: Foundation Bootcamp',
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
          time: '09:30 AM – 10:30 AM',
          title: 'Inauguration & Engineering Mindset',
          topics: [
            'Welcome and Program Overview',
            'Industry Expectations',
            'How Software Engineers Solve Problems',
            'Opportunities in the AI Era',
          ],
        },
        {
          time: '10:45 AM – 01:00 PM',
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
          time: '02:00 PM – 04:30 PM',
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
          time: '09:30 AM – 01:00 PM',
          title: 'Front-End Fundamentals',
          topics: [
            'HTML',
            'CSS',
            'Flexbox and Grid',
            'Responsive Design',
            'JavaScript Basics',
            'DOM Manipulation',
          ],
        },
        {
          time: '02:00 PM – 04:30 PM',
          title: 'Practical Session',
          topics: [
            'Building Responsive Interfaces',
            'Introduction to React',
            'Components and State',
          ],
          activity: 'Build a personal portfolio or landing page.',
        },
      ],
    },
    {
      day: 3,
      title: 'Backend Development, Git & Deployment',
      sessions: [
        {
          time: '09:30 AM – 01:00 PM',
          title: 'Backend Fundamentals',
          topics: [
            'Client–Server Architecture',
            'APIs',
            'Databases',
            'REST APIs',
            'Node.js and Express Introduction',
          ],
        },
        {
          time: '02:00 PM – 04:30 PM',
          title: 'Developer Workflow',
          topics: [
            'Git and GitHub',
            'Branching and Collaboration',
            'Repository Management',
            'Pull Requests',
            'Postman API Testing',
            'Deployment using Vercel and Netlify',
          ],
          activity: 'Push and deploy a project.',
        },
      ],
    },
    {
      day: 4,
      title: 'AI Tools & Career Ecosystem',
      sessions: [
        {
          time: '09:30 AM – 01:00 PM',
          title: 'AI-Powered Development Ecosystem',
          topics: [
            'Introduction to ChatGPT, Claude, Gemini, Cursor, Windsurf, Lovable, Bolt, and v0',
            'AI-Assisted Development',
            'Rapid Prototyping',
            'Building Applications Faster',
            'Debugging and Optimization',
          ],
        },
        {
          time: '02:00 PM – 04:30 PM',
          title: 'Career and Developer Ecosystem',
          topics: [
            'GitHub Portfolio Building',
            'LeetCode and Problem Solving',
            'LinkedIn Optimization',
            'Resume Building',
            'Hackathons',
            'Open Source Contributions',
            'Freelancing Opportunities',
            'Career Roadmaps',
          ],
        },
      ],
    },
  ],
}

export const PHASE_TWO = {
  title: 'Phase II: Guided Project Sprint',
  duration: '7 Days',
  description: 'Students work in teams with mentor support.',
  days: [
    { day: 5, focus: 'Team Formation, Problem Statement Selection, Requirement Analysis, UI Planning' },
    { day: 6, focus: 'Front-End Development' },
    { day: 7, focus: 'Backend Development' },
    { day: 8, focus: 'Database and APIs' },
    { day: 9, focus: 'Integration' },
    { day: 10, focus: 'Testing and Deployment' },
    { day: 11, focus: 'Documentation and Presentation Preparation' },
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
    'Best Team',
    'Best UI Design',
    'Most Innovative Project',
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
