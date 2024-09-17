import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <p className="text-xl font-semibold">Nathasha's Portfolio</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/nath-asha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.475 2 2 6.475 2 12a10 10 0 0 0 6.844 9.504c.5.092.682-.217.682-.484v-1.722c-2.782.603-3.367-1.343-3.367-1.343-.455-1.154-1.11-1.461-1.11-1.461-.908-.622.069-.609.069-.609 1.004.07 1.533 1.032 1.533 1.032.892 1.529 2.341 1.088 2.913.833.09-.647.35-1.088.636-1.339-2.219-.252-4.555-1.107-4.555-4.929 0-1.09.389-1.982 1.029-2.68-.103-.254-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.57 9.57 0 0 1 12 6.845c.853.003 1.711.114 2.51.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.376.202 2.392.099 2.646.642.698 1.03 1.59 1.03 2.68 0 3.832-2.339 4.674-4.566 4.922.36.309.682.92.682 1.854v2.748c0 .269.18.579.688.482A9.99 9.99 0 0 0 22 12c0-5.525-4.475-10-10-10z"/></svg>
          </a>
          <a href="https://linkedin.com/in/nathasha-t-492a4125b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zM9 18H6.5v-8H9v8zm-1.25-9.5A1.252 1.252 0 0 1 6.5 7.25 1.252 1.252 0 0 1 7.75 6 1.252 1.252 0 0 1 9 7.25a1.252 1.252 0 0 1-1.25 1.25zm11.75 9.5H17v-3.75c0-.9-.2-2.25-1.5-2.25-1.5 0-1.75 1.05-1.75 2.15V18H11.5v-8H14v1.05h.05c.346-.646 1.154-1.3 2.45-1.3 2.45 0 2.95 1.6 2.95 3.65V18z"/></svg>
          </a>
        </div>

        <div className="text-sm">
          <p>© {new Date().getFullYear()} Nathasha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
