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
      {/* Text with typewriter effect */}
      <div className="mb-6 text-4xl font-mono font-bold flex items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
          {text}
        </span>
        <span className="animate-blink ml-1 text-green-400">|</span>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full relative overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-lg shadow-green-500/20"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Status text */}
      <div className="text-sm text-white-400 font-mono">
        Loading resources... {Math.round(progress)}%
      </div>

      {/* Optional green dots at bottom (uncomment if desired) */}
      {/* 
      <div className="absolute bottom-8 flex space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-150"></div>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
      </div> 
      */}
    </div>
  );
};
