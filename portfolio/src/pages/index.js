import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-full">
        <motion.div
          className="relative p-10 bg-white rounded-lg shadow-xl dark:bg-galaxy"
          whileHover={{ scale: 1.05, rotateY: 180 }}
          transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold dark:text-stars">
            Hi, I'm Nathasha
          </h1>
          <p className="mt-4 text-lg">
            Welcome to my portfolio! I’m a passionate web developer.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
