// All personal content lives here, so you can update the site
// without touching any component.

import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa'
import { FiPenTool } from 'react-icons/fi'
import {
  SiBootstrap,
  SiCss,
  SiGit,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
} from 'react-icons/si'

export const profile = {
  firstName: 'Issam',
  lastName: 'Abdelhak',
  role: 'Full-Stack Web Developer',
  location: 'Salé, Morocco',
  email: 'issam.abdelhak19@gmail.com',
  tagline:
    'Digital Development student at OFPPT. I build web apps with React, Laravel and PHP, from the database to the pixels.',
  about: [
    "I'm a full-stack web developer in training, currently in my second year of Digital Development (Technicien Spécialisé) at OFPPT.",
    'Before switching to code, I spent two years studying English at university. That background shows in how I work: I care about clear communication as much as clean code.',
    'I like building practical things: platforms that connect people, interfaces that match the design down to the pixel, and small tools that solve a real problem.',
  ],
}

export const socials = [
  {
    label: 'LinkedIn',
    handle: 'abdelhak-issam',
    url: 'https://www.linkedin.com/in/abdelhak-issam-114127278',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    handle: 'Likeyoudont',
    url: 'https://github.com/Likeyoudont',
    icon: FaGithub,
  },
  {
    label: 'GitLab',
    handle: 'issam.abdelhak19',
    url: 'https://gitlab.com/issam.abdelhak19',
    icon: FaGitlab,
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'PHP', icon: SiPhp },
      { name: 'Python', icon: SiPython },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitLab CI / Pages', icon: SiGitlab },
      { name: 'Photoshop', icon: FiPenTool },
    ],
  },
]

// level is a percentage, used to draw the bar
export const spokenLanguages = [
  { name: 'Arabic', level: 'Native', percent: 100 },
  { name: 'English', level: 'Fluent', percent: 90 },
  { name: 'French', level: 'Fluent', percent: 90 },
  { name: 'Spanish', level: 'Learning', percent: 30 },
]

export const education = [
  {
    period: '2025 — Present',
    title: 'Technicien Spécialisé, Digital Development',
    place: 'OFPPT',
    description:
      'Second year. Full-stack web development: JavaScript, React, PHP, Laravel, MySQL, Git and deployment.',
  },
  {
    period: '2 years',
    title: 'English Studies',
    place: 'University',
    description:
      'Two years of English language and literature, which built my communication and writing skills.',
  },
]
