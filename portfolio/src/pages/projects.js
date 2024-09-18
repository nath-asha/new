import { motion } from 'framer-motion';
import projects from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white dark:bg-galaxy rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-4">{project.description}</p>
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
// index.js
// │   │   ├── about.js
// │   │   ├── projects.js
// │   │   ├── experience.js
// │   │   ├── contact.js
// _app.js                # Custom App component with page transitions
// │   │   ├── index.js               # Home page with art-profile book animation
// │   │   ├── about.js               # About page
// │   │   ├── projects.js            # Projects page with Framer Motion cards
// │   │   ├── contact.js  