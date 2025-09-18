import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Cake, PartyPopper } from 'lucide-react';

interface BirthdayMessageProps {
  recipient: string;
  sender: string;
  message: string;
}

const BirthdayMessage: React.FC<BirthdayMessageProps> = ({ recipient, sender, message }) => {
  const icons = [Heart, Star, Cake, PartyPopper];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-4xl mx-auto"
    >
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-white/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
              rotate: 360,
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      {/* Main birthday message */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="glassmorphism p-8 md:p-12 rounded-2xl shadow-2xl mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
        >
          <Cake className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          🎊 Happy Birthday, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400">
            {recipient}
          </span>! 🎊
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          <p className="mb-4">{message}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full text-lg shadow-lg"
        >
          <Heart className="w-5 h-5 mr-2" />
          With love from {sender}
          <Heart className="w-5 h-5 ml-2" />
        </motion.div>
      </motion.div>

      {/* Animated celebration elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="flex justify-center space-x-8 text-6xl"
      >
        {['🎂', '🎈', '🎁', '🎉'].map((emoji, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2 + index * 0.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BirthdayMessage;