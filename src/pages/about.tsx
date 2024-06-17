// src/app/pages/about.tsx
import NavBar from '@/app/components/NavBar';

export default function AboutPage() {
  const navItems = [
    { name: 'Home', link: '/', icon: <span>🏠</span> },
    { name: 'About', link: '/about', icon: <span>ℹ️</span> },
    { name: 'Services', link: '/services', icon: <span>🛠️</span> },
    { name: 'Contact', link: '/contact', icon: <span>📞</span> },
  ];

  return (
    <>
      <NavBar navItems={navItems} />
      <h1>About Page</h1>
    </>
  );
}
