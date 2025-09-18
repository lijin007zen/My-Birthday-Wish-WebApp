import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import GiftBox from './GiftBox';
import BirthdayMessage from './BirthdayMessage';
import FloatingParticles from './FloatingParticles';
import { birthdayMessages } from '../utils/messages';

const GiftPage: React.FC = () => {
  const location = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftData, setGiftData] = useState({
    sender: '',
    recipient: '',
    music: ''
  });
  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sender = params.get('sender') || 'Someone special';
    const recipient = params.get('recipient') || 'You';
    const music = params.get('music') || '';

    setGiftData({ sender, recipient, music });
    
    // Select random birthday message
    const messages = birthdayMessages(recipient);
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  }, [location]);

  const handleGiftOpen = () => {
    setIsOpened(true);
    setShowConfetti(true);
    
    // Play music if provided
    if (giftData.music) {
      playMusic(giftData.music);
    }
    
    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const extractVideoId = (url: string): string => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : '';
  };

  const playMusic = (musicLink: string) => {
    const videoId = extractVideoId(musicLink);
    if (videoId) {
      // Create hidden iframe to play YouTube music
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0`;
      iframe.style.display = 'none';
      iframe.allow = 'autoplay';
      document.body.appendChild(iframe);
    }
  };

  return (
    <div className="min-h-screen animated-background relative overflow-hidden">
      <FloatingParticles />
      
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.div
                key="unopened"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg"
                >
                  🎉 Surprice Gift 🎉
                </motion.h1>
                
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/90 mb-8 glassmorphism p-4 rounded-lg inline-block"
                >
                  <span className="font-semibold text-yellow-300">{giftData.sender}</span> wants to give this to you.<br />
                  Please open this giftbox, <span className="font-semibold text-pink-300">{giftData.recipient}</span>! 🎁
                </motion.p>

                <GiftBox onOpen={handleGiftOpen} />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-white/70 mt-6"
                >
                  Tap the gift box to unwrap your surprise! ✨
                </motion.p>
              </motion.div>
            ) : (
              <BirthdayMessage
                key="opened"
                recipient={giftData.recipient}
                sender={giftData.sender}
                message={randomMessage}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GiftPage;