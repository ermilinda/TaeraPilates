import React from 'react';
import useCountdown from '../hooks/useCountdown.js';

export default function Countdown({ target, variant = 'classic' }) {
  const units = useCountdown(target);

  if (variant === 'pills') {
    return (
      <div className="countdown-pills" role="timer" aria-label="Countdown to opening">
        {units.map((unit) => (
          <span key={unit.label} className="countdown-pills__pill">
            <strong>{unit.value}</strong> {unit.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="countdown" role="timer" aria-label="Countdown to opening">
      {units.map((unit, i) => (
        <React.Fragment key={unit.label}>
          {i > 0 && (
            <span className="countdown__sep" aria-hidden="true">
              ·
            </span>
          )}
          <div className="countdown__unit">
            <span className="countdown__value">{unit.value}</span>
            <span className="countdown__label">{unit.label}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
