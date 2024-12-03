import { FiMonitor, FiUsers, FiGlobe, FiCamera, FiBriefcase, FiCoffee } from 'react-icons/fi';

export const memberTypes = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: 'Remote Workers',
    description: 'Escape the home office and join a community of professionals',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: 'Hybrid Workers',
    description: 'A professional space for your remote work days',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
  },
  {
    icon: <FiBriefcase className="w-8 h-8" />,
    title: 'Freelancers',
    description: 'Network and collaborate with other independent professionals',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  },
  {
    icon: <FiCamera className="w-8 h-8" />,
    title: 'Creatives',
    description: 'Find inspiration in our beautifully designed space',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80'
  },
  {
    icon: <FiCoffee className="w-8 h-8" />,
    title: 'Business Owners',
    description: 'A professional environment to grow your business',
    image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&q=80'
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: 'Digital Nomads',
    description: 'Your workspace away from home in wine country',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80'
  }
];