'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type OS = 'linux' | 'macos' | 'windows';

export function Install() {
  const t = useTranslations('install');
  const tNav = useTranslations('nav');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [selectedOS, setSelectedOS] = useState<OS>('linux');

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const getStepsForOS = (os: OS) => {
    const steps = {
      linux: [
        { key: '1', command: 'git clone https://github.com/cryptohousestar/Iabuilder.git\ncd Iabuilder\n./install_iabuilder.sh' },
        { key: '2', command: 'iabuilder\n/configure-api groq' },
        { key: '3', command: 'cd ~/your-project\niabuilder' }
      ],
      macos: [
        { key: '1', command: 'git clone https://github.com/cryptohousestar/Iabuilder.git\ncd Iabuilder\n./install_iabuilder_macos.sh' },
        { key: '2', command: 'iabuilder\n/configure-api groq' },
        { key: '3', command: 'cd ~/your-project\niabuilder' }
      ],
      windows: [
        { key: '1', command: 'git clone https://github.com/cryptohousestar/Iabuilder.git\ncd Iabuilder\n.\\install_iabuilder_windows.ps1' },
        { key: '2', command: 'iabuilder\n/configure-api groq' },
        { key: '3', command: 'cd C:\\your-project\niabuilder' }
      ]
    };
    return steps[os];
  };

  const steps = getStepsForOS(selectedOS);

  return (
    <section id="install" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>

          {/* OS Selector */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setSelectedOS('linux')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedOS === 'linux'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🐧 Linux
            </button>
            <button
              onClick={() => setSelectedOS('macos')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedOS === 'macos'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🍎 macOS
            </button>
            <button
              onClick={() => setSelectedOS('windows')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedOS === 'windows'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🪟 Windows
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.key} className="text-center">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.key}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t(`steps.${step.key}.title`)}
              </h3>
              <div className="relative bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <button
                  onClick={() => copyToClipboard(step.command)}
                  className="absolute top-2 right-2 p-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                  title="Copiar al portapapeles"
                >
                  {copiedCommand === step.command ? (
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
                <pre className="whitespace-pre-wrap pr-12">{step.command}</pre>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {t('finalText')}
          </p>

          {/* Provider Switching Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {t('providerSwitch.title')}
            </h3>
            <p className="text-blue-800 text-sm mb-3">
              {t('providerSwitch.description')}
            </p>
            <div className="relative bg-blue-100 p-3 rounded inline-block">
              <button
                onClick={() => copyToClipboard(t('providerSwitch.command'))}
                className="absolute top-2 right-2 p-1 rounded bg-white hover:bg-gray-50 transition-colors border"
                title={tNav('install') === 'Install' ? 'Copy to clipboard' : 'Copiar al portapapeles'}
              >
                {copiedCommand === t('providerSwitch.command') ? (
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
              <code className="text-blue-800 font-mono pr-12 text-sm">
                {t('providerSwitch.command')}
              </code>
            </div>
            <p className="text-blue-700 text-xs mt-2">
              {t('providerSwitch.note')}
            </p>
          </div>

          <div className="relative bg-gray-100 p-4 rounded-lg inline-block">
            <button
              onClick={() => copyToClipboard(t('helpCommand'))}
              className="absolute top-2 right-2 p-1 rounded bg-white hover:bg-gray-50 transition-colors border"
              title={tNav('install') === 'Install' ? 'Copy to clipboard' : 'Copiar al portapapeles'}
            >
              {copiedCommand === t('helpCommand') ? (
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
            <code className="text-gray-800 font-mono pr-12">
              {t('helpCommand')}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}