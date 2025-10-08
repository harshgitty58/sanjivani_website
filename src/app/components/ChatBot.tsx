'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqResponses: { [key: string]: string } = {
  'hi': 'Hi I am Shubham, how can I help you?.',
  'how to donate': 'You can donate by scanning our QR code or visiting the Donate section on our website.',
  'how can i volunteer': 'Fill out the volunteer form on our site and our team will get in touch!',
  'what is your mission': 'Our mission is to provide healthcare and education access to underprivileged communities.',
  'how are donations used': 'Donations are used transparently for medical aid, education supplies, and outreach programs.',
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi - I am here to help answer any questions you have or direct you to the resources you are looking for. How can I assist you?',
    },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const userLower = userMessage.toLowerCase();

    const matchedKey = Object.keys(faqResponses).find((q) =>
      userLower.includes(q)
    );

    const botReply = matchedKey
      ? faqResponses[matchedKey]
      : "For more information, please contact the admin or visit our website https://sanjivani.ngo/";

    const newMessages = [
      ...messages,
      { sender: 'user', text: userMessage },
      { sender: 'bot', text: botReply },
    ];

    setMessages(newMessages);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={toggleChat}
      >
        <div className="relative w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
          <Image
            src="/images/sanjivani-logo.png"
            alt="Chat Icon"
            width={75}
            height={75}
          />    
        </div>
      </div>

      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-xl rounded-2xl overflow-hidden z-50 animate-slide-up">
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
            <span className="font-semibold text-sm">Hi, I'm Sanjvani!</span>
            <button onClick={toggleChat} className="text-gray-600">✕</button>
          </div>

          <div className="p-3 space-y-2 max-h-72 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === 'bot' ? 'items-start' : 'justify-end'
                } gap-2`}
              >
                {msg.sender === 'bot' && (
                  <Image
                    src="/images/owner.jpg"
                    alt="Bot"
                    width={50}
                    height={50}
                  />
                )}
                <div
                  className={`p-2 rounded-lg ${
                    msg.sender === 'bot'
                      ? 'bg-gray-100 text-black'
                      : 'bg-green-600 text-white'
                  } max-w-[220px]`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex border-t p-2 gap-2 items-center">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow px-3 py-2 text-sm border rounded-md outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 py-1 rounded-md text-sm"
            >
              Send
            </button>
          </div>

          <div className="text-center text-[10px] text-gray-400 py-1">
            Powered by NGO
          </div>
        </div>
      )}
    </>
  );
}
