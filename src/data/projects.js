// To add a project, copy one object and change the values.
// Set `live` or `code` to null to hide that button.
// `image` is optional: import a screenshot from ../assets and put it here.
// Without an image, the card shows a colored cover with the project's icon.

import { FiGrid, FiMaximize, FiUsers } from 'react-icons/fi'

export const projects = [
  {
    title: 'Khedma',
    description:
      'A platform that connects clients with workers. Clients describe the job they need done and find a worker who can do it.',
    tags: ['PHP', 'Laravel', 'MySQL'],
    icon: FiUsers,
    accent: '#7c5cff',
    image: null,
    code: 'https://github.com/Likeyoudont/Khedma',
    live: null,
  },
  {
    title: 'Perfect Pixel',
    description:
      'A pixel-perfect rebuild of a design mockup. I measured every size and spacing in Photoshop so the page matches the design exactly.',
    tags: ['HTML', 'CSS', 'Photoshop', 'GitLab Pages'],
    icon: FiMaximize,
    accent: '#22c3ee',
    image: null,
    code: 'https://github.com/Likeyoudont/Driss-Challenge',
    live: null,
  },
  {
    title: 'QR Code Maker',
    description:
      'A web app that turns any text or link into a QR code you can download and share.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    icon: FiGrid,
    accent: '#f59e0b',
    image: null,
    code: null,
    live: null,
  },
]
