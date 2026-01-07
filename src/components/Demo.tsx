'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

interface TerminalLine {
  type: 'command' | 'output' | 'prompt';
  content: string;
  delay?: number;
}

export function Demo() {
  const t = useTranslations('demo');
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const demoLines: TerminalLine[] = [
    { type: 'prompt', content: '$ cd ~/my-project' },
    { type: 'command', content: 'cd ~/my-project', delay: 500 },
    { type: 'prompt', content: '$ iabuilder' },
    { type: 'command', content: 'iabuilder', delay: 1000 },
    { type: 'output', content: '🤖 IABuilder v3.0 - Universal AI Development Tool', delay: 500 },
    { type: 'output', content: 'No API providers configured. Let\'s set one up!', delay: 300 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: '🔧 Select provider to configure:', delay: 300 },
    { type: 'output', content: '1. Google AI (Free daily limits, best for getting started)', delay: 200 },
    { type: 'output', content: '2. Groq (Free daily tokens)', delay: 200 },
    { type: 'output', content: '3. OpenRouter (Free daily tokens)', delay: 200 },
    { type: 'output', content: '4. OpenAI (Premium - GPT-4)', delay: 200 },
    { type: 'output', content: '5. Anthropic (Premium - Claude)', delay: 200 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: 'Selected: 1 (Google Gemini)', delay: 500 },
    { type: 'output', content: 'Get your API key from: https://aistudio.google.com/apikey', delay: 300 },
    { type: 'output', content: 'API key configured successfully! ✅', delay: 500 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: '🤖 Select model for Google:', delay: 300 },
    { type: 'output', content: '1. Gemini 2.0 Flash (Fast, good for coding)', delay: 200 },
    { type: 'output', content: '2. Gemini 1.5 Pro (More capable)', delay: 200 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: 'Selected: Gemini 2.0 Flash ✅', delay: 500 },
    { type: 'output', content: 'Project detected: Python web application', delay: 300 },
    { type: 'output', content: '', delay: 500 },
    { type: 'prompt', content: '> Read the main.py file and explain what it does' },
    { type: 'command', content: '> Read the main.py file and explain what it does', delay: 1500 },
    { type: 'output', content: 'Reading main.py...', delay: 800 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: 'The main.py file contains a Flask web application that:', delay: 500 },
    { type: 'output', content: '• Serves a REST API for user management', delay: 300 },
    { type: 'output', content: '• Uses SQLAlchemy for database operations', delay: 300 },
    { type: 'output', content: '• Includes JWT authentication', delay: 300 },
    { type: 'output', content: '• Has endpoints for CRUD operations on users', delay: 300 },
    { type: 'output', content: '', delay: 500 },
    { type: 'prompt', content: '> Create a new endpoint for password reset functionality' },
    { type: 'command', content: '> Create a new endpoint for password reset functionality', delay: 2000 },
    { type: 'output', content: 'Creating password reset endpoint...', delay: 1000 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: '✅ Added POST /api/auth/reset-password endpoint', delay: 500 },
    { type: 'output', content: '✅ Created password reset token generation', delay: 300 },
    { type: 'output', content: '✅ Added email sending functionality', delay: 300 },
    { type: 'output', content: '✅ Updated authentication routes', delay: 300 },
    { type: 'output', content: '', delay: 500 },
    { type: 'prompt', content: '> Run the tests to make sure everything works' },
    { type: 'command', content: '> Run the tests to make sure everything works', delay: 1500 },
    { type: 'output', content: 'Running pytest...', delay: 1000 },
    { type: 'output', content: '============================= test session starts ==============================', delay: 500 },
    { type: 'output', content: 'tests/test_auth.py .............                                      [ 70%]', delay: 300 },
    { type: 'output', content: 'tests/test_api.py ...........                                         [ 30%]', delay: 300 },
    { type: 'output', content: '======================== 23 passed, 0 failed in 2.34s ========================', delay: 500 },
    { type: 'output', content: '', delay: 300 },
    { type: 'output', content: '🎉 All tests passed! The password reset functionality is working correctly.', delay: 500 },
    { type: 'output', content: '', delay: 400 },
    { type: 'output', content: '💡 Pro tip: For intensive/heavy development usage, switch to premium providers:', delay: 500 },
    { type: 'output', content: '   Use /provider openai or /provider anthropic in the chat.', delay: 300 },
  ];

  useEffect(() => {
    if (currentLine < demoLines.length) {
      const line = demoLines[currentLine];
      const delay = line.delay || 100;

      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line]);
        setCurrentLine(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [currentLine, demoLines]);

  const resetDemo = () => {
    setCurrentLine(0);
    setDisplayedLines([]);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <button
              onClick={resetDemo}
              className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded border border-gray-600 hover:border-gray-500 transition-colors"
            >
              {t('reset')}
            </button>
          </div>

          <div className="space-y-1 max-h-96 overflow-y-auto">
            {displayedLines.map((line, index) => (
              <div key={index} className="flex">
                {line.type === 'prompt' && (
                  <span className="text-green-400 mr-2">$</span>
                )}
                {line.type === 'command' && (
                  <span className="text-blue-400 mr-2">{'>'}</span>
                )}
                {line.type === 'output' && (
                  <span className="text-gray-500 mr-2"></span>
                )}
                <span
                  className={`${
                    line.type === 'command'
                      ? 'text-blue-300'
                      : line.type === 'output'
                      ? 'text-gray-300'
                      : 'text-green-400'
                  }`}
                >
                  {line.content}
                </span>
              </div>
            ))}
            {currentLine < demoLines.length && (
              <div className="flex">
                <span className="text-green-400 mr-2">$</span>
                <span className="text-green-400 animate-pulse">_</span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}