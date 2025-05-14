import React, { useEffect, useRef } from 'react';
// Make sure the CSS is imported in your main CSS file

const ThunderBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create grid
    const gridDiv = document.createElement('div');
    gridDiv.className = 'grid';
    
    // Create lightning container
    const lightningContainer = document.createElement('div');
    lightningContainer.className = 'lightning-container';
    lightningContainer.id = 'lightning-container';
    
    // Create thunder element
    const thunder = document.createElement('div');
    thunder.className = 'thunder';
    
    // Create glow element
    const glow = document.createElement('div');
    glow.className = 'glow';
    glow.style.top = '0';
    glow.style.left = '0';
    
    // Append elements
    container.appendChild(gridDiv);
    container.appendChild(lightningContainer);
    container.appendChild(thunder);
    container.appendChild(glow);
    
    // Lightning creation functions
    const createLightningBolt = () => {
      const lightning = document.createElement('div');
      lightning.className = 'lightning';
      
      // Random position
      const startX = Math.random() * 100;
      lightning.style.left = `${startX}%`;
      lightning.style.top = '0';
      
      // Random width and height
      const width = Math.random() * 2 + 1; // 1-3px
      const height = Math.random() * 40 + 30; // 30-70% of screen height
      lightning.style.width = `${width}px`;
      lightning.style.height = `${height}%`;
      
      // Random rotation
      const rotation = (Math.random() - 0.5) * 40; // -20 to +20 degrees
      lightning.style.transform = `rotate(${rotation}deg)`;
      
      // Random animation duration
      const duration = Math.random() * 0.5 + 0.5; // 0.5-1s
      lightning.style.animation = `flash ${duration}s ease-out forwards`;
      
      // Add to container
      lightningContainer.appendChild(lightning);
      
      // Create branches with 40% probability
      if (Math.random() < 0.4) {
        createBranches(lightning, width, height);
      }
      
      // Remove after animation
      setTimeout(() => {
        if (lightning.parentNode === lightningContainer) {
          lightningContainer.removeChild(lightning);
        }
      }, duration * 1000 + 100);
    };
    
    const createBranches = (parentBolt, parentWidth, parentHeight) => {
      // Number of branches
      const branchCount = Math.floor(Math.random() * 3) + 1; // 1-3 branches
      
      for (let i = 0; i < branchCount; i++) {
        const branch = document.createElement('div');
        branch.className = 'lightning';
        
        // Position relative to parent bolt at a random point
        const branchStart = Math.random() * 0.6 + 0.2; // Start 20-80% down the main bolt
        
        // Calculate absolute position
        const rect = parentBolt.getBoundingClientRect();
        const parentLength = rect.height;
        const startY = branchStart * parentLength;
        
        branch.style.top = `${startY}px`;
        branch.style.left = '0';
        branch.style.width = `${parentWidth * 0.7}px`; // Slightly thinner
        
        // Random length for branch
        const branchLength = Math.random() * 20 + 10; // 10-30% of parent's length
        branch.style.height = `${branchLength}%`;
        
        // Random angle for branch
        const angle = (Math.random() * 30) + 20; // Branch out 20-50 degrees
        const direction = Math.random() > 0.5 ? 1 : -1; // Left or right
        branch.style.transform = `rotate(${angle * direction}deg)`;
        
        // Add to parent bolt
        parentBolt.appendChild(branch);
        
        // Animation
        const duration = Math.random() * 0.4 + 0.3; // 0.3-0.7s
        branch.style.animation = `flash ${duration}s ease-out forwards`;
      }
    };
    
    // Create lightning with delay
    const createLightning = () => {
      // Random timing for next lightning
      const delay = Math.random() * 6000 + 2000; // Between 2-8 seconds
      
      setTimeout(() => {
        // Create 1-4 lightning bolts
        const boltCount = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < boltCount; i++) {
          createLightningBolt();
        }
        
        // Activate thunder effect
        thunder.style.animation = 'thunderFlash 2s ease-out';
        
        // Reset thunder animation
        setTimeout(() => {
          thunder.style.animation = 'none';
          setTimeout(() => {
            // Continue only if component is still mounted
            if (container.isConnected) {
              createLightning();
            }
          }, 100);
        }, 2000);
        
      }, delay);
    };
    
    // Start the lightning effect
    createLightning();
    
    // Cleanup function
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div className="background" ref={containerRef}></div>
  );
};

export default ThunderBackground;