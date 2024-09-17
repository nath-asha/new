import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

export default function ThemeSwitcher() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [enabled]);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-stars' : 'bg-glow'}
      relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
      />
    </Switch>
  );
}
