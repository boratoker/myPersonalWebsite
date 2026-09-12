'use client';

import { useEffect, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ConstellationBackground() {
  const [docHeight, setDocHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      setDocHeight(`${document.body.scrollHeight}px`);
    };

    // Initial check
    updateHeight();

    // Listen for resize
    window.addEventListener('resize', updateHeight);

    // Listen for DOM changes (like animations rendering in)
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: docHeight, 
        zIndex: -1 
      }}
    >
      <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
        <Particles
          id="tsparticles"
          style={{ width: '100%', height: '100%' }}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.4,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#a0a0a0",
              },
              links: {
                color: "#a0a0a0",
                distance: 120,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 70,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>
    </div>
  );
}
