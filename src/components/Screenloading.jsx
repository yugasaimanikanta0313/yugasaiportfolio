import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "Hello World";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress(Math.min(100, (index / fullText.length) * 100));
      index++;
      
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete(); // Trigger the completion callback
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete, fullText]);

  return (
    <div className="fixed inset-0 z-50 bg-black from-gray-900 to-black text-gray-100 flex flex-col items-center justify-center">
      {/* Logo or icon placeholder */}
      {/* <div className="mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 16L14 16" />
            <path d="M12 12L12 16" />
            <path d="M12 8L12 8.01" />
            <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" />
          </svg>
        </div>
      </div> */}
      
      {/* Text with typewriter effect */}
      <div className="mb-6 text-4xl font-mono font-bold flex items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
          {text}
        </span>
        <span className="animate-blink ml-1 text-blue-400">|</span>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full relative overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/20"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Status text */}
      <div className="text-sm text-white-400 font-mono">
        Loading resources... {Math.round(progress)}%
      </div>
      
      {/* Decorative elements */}
      {/* <div className="absolute bottom-8 flex space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
      </div> */}
    </div>
  );
};