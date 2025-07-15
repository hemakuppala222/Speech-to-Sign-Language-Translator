import React, { useState } from 'react';
import { Hand, Mic, Upload, Type, Settings, Info, RotateCcw } from 'lucide-react';
import SpeechRecognition from './components/SpeechRecognition';
import SignLanguageDisplay from './components/SignLanguageDisplay';
import FileUpload from './components/FileUpload';
import TextInput from './components/TextInput';
import { textToSigns, SignData } from './utils/signLanguageMapper';

function App() {
  const [currentSigns, setCurrentSigns] = useState<SignData[]>([]);
  const [originalText, setOriginalText] = useState('');
  const [activeTab, setActiveTab] = useState<'speech' | 'upload' | 'text'>('speech');
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTranscript = (text: string) => {
    setError(null);
    setIsProcessing(true);
    
    setTimeout(() => {
      const signs = textToSigns(text);
      setCurrentSigns(signs);
      setOriginalText(text);
      setIsProcessing(false);
    }, 500);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setIsProcessing(false);
  };

  const handleFileSelect = (file: File) => {
    console.log('File selected:', file.name);
  };

  const handleTextExtract = (text: string) => {
    handleTranscript(text);
  };

  const handleTextSubmit = (text: string) => {
    handleTranscript(text);
  };

  const clearAll = () => {
    setCurrentSigns([]);
    setOriginalText('');
    setError(null);
    setIsProcessing(false);
  };

  const resetToDefault = () => {
    clearAll();
    setActiveTab('speech');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Hand className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">VoiceToSign</h1>
                <p className="text-sm text-gray-500">Speech-to-Sign Language Translator</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={clearAll}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={resetToDefault}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Input Methods</h2>
                <div className="bg-gray-100 rounded-lg p-1 flex">
                  <button
                    onClick={() => setActiveTab('speech')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'speech'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Mic className="h-4 w-4 inline mr-1" />
                    Speech
                  </button>
                  <button
                    onClick={() => setActiveTab('text')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'text'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Type className="h-4 w-4 inline mr-1" />
                    Text
                  </button>
                  <button
                    onClick={() => setActiveTab('upload')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'upload'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Upload className="h-4 w-4 inline mr-1" />
                    Upload
                  </button>
                </div>
              </div>

              {activeTab === 'speech' && (
                <SpeechRecognition
                  onTranscript={handleTranscript}
                  onError={handleError}
                />
              )}
              
              {activeTab === 'text' && (
                <TextInput onTextSubmit={handleTextSubmit} />
              )}
              
              {activeTab === 'upload' && (
                <FileUpload
                  onFileSelect={handleFileSelect}
                  onTextExtract={handleTextExtract}
                />
              )}
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-red-500 mr-2" />
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            )}

            {/* Processing Indicator */}
            {isProcessing && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-2"></div>
                  <p className="text-blue-700">Processing text to sign language...</p>
                </div>
              </div>
            )}
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Sign Language Translation</h2>
            <SignLanguageDisplay signs={currentSigns} originalText={originalText} />
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About VoiceToSign</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How It Works</h3>
                <p className="text-blue-100 leading-relaxed">
                  VoiceToSign uses advanced speech recognition to convert spoken words into 
                  American Sign Language (ASL) descriptions. The system processes natural 
                  speech, simplifies complex phrases, and provides detailed instructions 
                  for each sign including hand shape, movement, and location.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Input Methods</h3>
                <ul className="text-blue-100 space-y-1">
                  <li>• Real-time speech recognition</li>
                  <li>• Direct text input with instant conversion</li>
                  <li>• Audio file upload support</li>
                  <li>• Visual hand position guides</li>
                  <li>• Keyboard navigation friendly</li>
                  <li>• Screen reader compatible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              VoiceToSign - Breaking down communication barriers through technology
            </p>
            <p className="text-sm">
              Designed for accessibility and ease of use. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;