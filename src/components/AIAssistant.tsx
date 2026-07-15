import React, { useState, useRef, useEffect } from 'react';
import { TranslationSet } from '../types';
import { MessageSquare, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';

interface AIAssistantProps {
  t: TranslationSet;
  lang: 'en' | 'ar';
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ t, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isRtl = lang === 'ar';

  // Welcoming message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: 'ai',
          text: t.aiWelcome,
        },
      ]);
    }
  }, [isOpen, t.aiWelcome]);

  // Scroll to bottom when messages list updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: textToSend, lang }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const aiMsg: Message = { sender: 'ai', text: data.response };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      // Friendly fallback in case server-side Gemini is disabled or key is missing
      const aiMsg: Message = {
        sender: 'ai',
        text: t.aiError,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  const suggestions = [
    t.aiSuggestedPrompt1,
    t.aiSuggestedPrompt2,
    t.aiSuggestedPrompt3,
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-serif" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#4A0404] hover:bg-[#3B0202] text-[#FDFBF7] p-4 rounded-full shadow-2xl border border-[#96B6C5]/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
          id="ai-toggle-btn"
          aria-label="Ask Raghad's AI"
        >
          <MessageSquare className="w-5 h-5 text-[#96B6C5]" />
          <span className="hidden md:inline font-bold text-xs uppercase tracking-widest pl-1 pr-2">
            {t.navAI}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96B6C5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#96B6C5]"></span>
          </span>
        </button>
      )}

      {/* Floating Conversation Tray */}
      {isOpen && (
        <div
          className="w-[90vw] sm:w-[400px] h-[550px] bg-brand-card text-brand-ice rounded-lg border border-brand-ice/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300"
          id="ai-chat-tray"
        >
          {/* Header */}
          <div className="bg-brand-card text-[#FDFBF7] px-4 py-4 flex items-center justify-between border-b border-brand-ice/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-[#96B6C5]/20">
                <Bot className="w-4 h-4 text-[#96B6C5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm tracking-wide text-white">
                  {t.aiTitle}
                </h4>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#96B6C5] animate-pulse"></span>
                  <span className="text-[9px] uppercase tracking-wider text-[#96B6C5]/80 font-bold">
                    Powered by Gemini
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/10 text-[#96B6C5] hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-black/15">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={index}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in duration-150`}
                >
                  <div
                    className={`max-w-[85%] rounded-sm p-3 text-xs leading-relaxed font-sans shadow-md ${
                      isUser
                        ? 'bg-[#96B6C5] text-[#4A0404] font-semibold rounded-tr-none'
                        : 'bg-black/25 border border-[#96B6C5]/10 text-white rounded-tl-none'
                    }`}
                  >
                    {!isUser && (
                      <div className="flex items-center gap-1 mb-1 text-[10px] text-[#96B6C5] font-semibold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-[#96B6C5]" />
                        <span>AI Assistant</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/25 border border-[#96B6C5]/10 rounded-sm p-3 text-xs text-[#96B6C5]/80 rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#96B6C5]" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions Pills */}
          <div className="px-4 py-2 bg-black/20 border-t border-b border-[#96B6C5]/10 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
            {suggestions.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="inline-block px-3 py-1.5 bg-black/30 border border-[#96B6C5]/20 hover:border-white hover:bg-white/5 text-[#96B6C5] hover:text-white rounded-sm text-[11px] font-sans transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none shadow-sm"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Panel */}
          <div className="p-4 bg-black/25 border-t border-[#96B6C5]/10 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              placeholder={t.aiPlaceholder}
              className="flex-grow bg-black/20 border border-[#96B6C5]/20 rounded-sm px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#96B6C5] focus:border-[#96B6C5] text-white placeholder-[#96B6C5]/40 disabled:opacity-50"
              id="ai-input"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
              className="bg-[#96B6C5] hover:bg-white disabled:bg-[#96B6C5]/30 text-[#4A0404] p-2 rounded-sm transition-colors duration-200 cursor-pointer"
              id="ai-send-btn"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-[#4A0404]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
