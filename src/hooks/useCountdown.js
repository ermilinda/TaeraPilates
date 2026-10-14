import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

/**
 * Live countdown to a target date.
 * Returns days / hours / minutes / seconds, updated every second.
 */
export default function useCountdown(target) {
  const targetMs = new Date(target).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  let diff = Number.isNaN(targetMs) ? 0 : Math.max(0, targetMs - now);
  const days = Math.floor(diff / 86_400_000);
  diff -= days * 86_400_000;
  const hours = Math.floor(diff / 3_600_000);
  diff -= hours * 3_600_000;
  const minutes = Math.floor(diff / 60_000);
  diff -= minutes * 60_000;
  const seconds = Math.floor(diff / 1000);

  return [
    { label: 'Days', value: String(days) },
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ];
}
