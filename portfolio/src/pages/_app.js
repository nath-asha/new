import { motion } from 'framer-motion';
import '../app/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
