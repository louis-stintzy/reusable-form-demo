import { useEffect } from 'react';

import './DemoSection.css';

const demonstrations = [
  {
    title: 'User Profile',
    image: '/placeholder.svg?height=200&width=300',
    features: ['Text', 'Email', 'Date', 'File', 'Checkbox'],
    url: '/demo/user-profile',
  },
  {
    title: 'Demo under construction',
    image: '/placeholder.svg?height=200&width=300',
    featured: true,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    url: '/demo/under-construction',
  },
  {
    title: 'Flight Reservation',
    image: '/placeholder.svg?height=200&width=300',
    features: ['Select', 'Date', 'Number', 'Switch'],
    url: '/demo/flight-reservation',
  },
];

function DemoSection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="demo-section" id="demo">
      <div className="demo-header">
        <span className="demo-badge">Demo</span>
        <h2 className="demo-title">Demo</h2>
      </div>
    </div>
  );
}

export default DemoSection;
