import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Music, User, Send, Copy, Check } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const CreateGift: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    recipientName: '',
    musicLink: ''
  });
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const extractVideoId = (url: string): string => {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    return match ? match[1] : '';
  };

  const generateGiftLink = () => {
    if (!formData.senderName || !formData.recipientName) {
      alert('Please fill in both names!');
      return;
    }

    const params = new URLSearchParams({
      sender: formData.senderName,
      recipient: formData.recipientName,
      music: formData.musicLink
    });

    const link = `${window.location.origin}/gift?${params.toString()}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen animated-background relative overflow-hidden">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="glassmorphism p-8 shadow-2xl">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8"
            >
              <Gift className="w-16 h-16 mx-auto mb-4 text-white" />
              <h1 className="text-3xl font-bold text-white mb-2">Create Birthday Gift</h1>
              <p className="text-white/80">Craft a magical birthday surprise</p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-white font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-white font-medium mb-2">
                  <Gift className="w-4 h-4 inline mr-2" />
                  Birthday Person's Name
                </label>
                <input
                  type="text"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                  placeholder="Enter their name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-white font-medium mb-2">
                  <Music className="w-4 h-4 inline mr-2" />
                  YouTube Music Link (Optional)
                </label>
                <input
                  type="url"
                  name="musicLink"
                  value={formData.musicLink}
                  onChange={handleInputChange}
                  placeholder="Paste YouTube link here"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={generateGiftLink}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5 inline mr-2" />
                Generate Gift Link
              </motion.button>
            </div>

            {generatedLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20"
              >
                <h3 className="text-white font-medium mb-2">Your Gift Link:</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={generatedLink}
                    readOnly
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 text-white rounded text-sm"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors duration-200"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-white/70 text-xs mt-2">
                  Share this link with the birthday person!
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateGift;