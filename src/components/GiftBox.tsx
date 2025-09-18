import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ onOpen }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) return;
    
    setIsClicked(true);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Sparkles around gift box */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="cursor-pointer transform-gpu"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isClicked ? {
          rotateY: [0, 360],
          scale: [1, 1.2, 0.8, 1],
        } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="relative gift-shadow pulse-glow">
          {/* Gift Box Base */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 rounded-lg relative overflow-hidden"
            animate={isClicked ? {
              rotateX: [0, 10, -5, 0],
            } : {}}
          >
            {/* Box Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            
            {/* Vertical Ribbon */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-1/2"
              animate={isClicked ? {
                scaleY: [1, 0.8, 1.2, 1],
              } : {}}
            />
            
            {/* Horizontal Ribbon */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 transform -translate-y-1/2"
              animate={isClicked ? {
                scaleX: [1, 0.8, 1.2, 1],
              } : {}}
            />
            
            {/* Bow */}
            <motion.div
              className="absolute top-4 left-1/2 transform -translate-x-1/2"
              animate={isClicked ? {
                rotateZ: [0, 360],
                scale: [1, 1.5, 1],
              } : {
                y: [0, -5, 0],
              }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                {/* Left bow part */}
                <div className="absolute -left-4 w-8 h-6 bg-gradient-to-r from-gold to-yellow-500 rounded-full transform rotate-45 origin-bottom-right"></div>
                {/* Right bow part */}
                <div className="absolute -right-4 w-8 h-6 bg-gradient-to-l from-gold to-yellow-500 rounded-full transform -rotate-45 origin-bottom-left"></div>
                {/* Bow center */}
                <div className="w-4 h-6 bg-gradient-to-b from-yellow-600 to-yellow-700 rounded mx-auto"></div>
              </div>
            </motion.div>

            {/* Gift box shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0"
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Shadow */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/20 rounded-full blur-lg"
            animate={isClicked ? {
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.2, 0.1, 0.3, 0.2],
            } : {}}
          />
        </div>
      </motion.div>

      {!isClicked && (
        <motion.div
          className="mt-4 text-white/80 text-lg"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨ Click to open! ✨
        </motion.div>
      )}
    </div>
  );
};

export default GiftBox;