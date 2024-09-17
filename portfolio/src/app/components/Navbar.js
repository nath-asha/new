import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6">
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <ThemeSwitcher />
    </nav>
  );
}
