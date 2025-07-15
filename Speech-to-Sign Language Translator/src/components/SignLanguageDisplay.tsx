import React, { useState } from 'react';
import { Hand, ArrowRight, RotateCcw, Move, Play, Pause } from 'lucide-react';

interface SignData {
  word: string;
  description: string;
  handShape: string;
  movement: string;
  location: string;
  emoji: string;
  visualCue: string;
}

interface SignLanguageDisplayProps {
  signs: SignData[];
  originalText: string;
}

const SignLanguageDisplay: React.FC<SignLanguageDisplayProps> = ({ signs, originalText }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const playSignAnimation = (index: number) => {
    setPlayingIndex(index);
    setTimeout(() => {
      setPlayingIndex(null);
    }, 2000);
  };

  const playAllSigns = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setPlayingIndex(null);
      return;
    }

    setIsAutoPlaying(true);
    let currentIndex = 0;

    const playNext = () => {
      if (currentIndex < signs.length && isAutoPlaying) {
        setPlayingIndex(currentIndex);
        setTimeout(() => {
          setPlayingIndex(null);
          currentIndex++;
          if (currentIndex < signs.length) {
            setTimeout(playNext, 500);
          } else {
            setIsAutoPlaying(false);
          }
        }, 2000);
      }
    };

    playNext();
  };

  if (signs.length === 0) {
    return (
      <div className="text-center py-12">
        <Hand className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">Sign language translation will appear here</p>
        <p className="text-gray-400 text-sm mt-2">
          Try saying "hello", "water", "thank you", or "I need help"
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold text-gray-700 mb-2">Original Text:</h3>
        <p className="text-gray-900">{originalText}</p>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700 flex items-center">
          <Hand className="h-5 w-5 mr-2" />
          Sign Language Translation ({signs.length} signs):
        </h3>
        
        <button
          onClick={playAllSigns}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isAutoPlaying
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span>{isAutoPlaying ? 'Stop Animation' : 'Play All Signs'}</span>
        </button>
      </div>
      
      <div className="grid gap-4">
        {signs.map((sign, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
              playingIndex === index ? 'ring-4 ring-blue-300 bg-blue-50 scale-105' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className={`text-4xl transition-transform duration-500 ${
                    playingIndex === index ? 'animate-bounce scale-125' : ''
                  }`}
                >
                  {sign.emoji}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600">{sign.word.toUpperCase()}</h4>
                  <p className="text-sm text-gray-500 italic">{sign.visualCue}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {index + 1}
                </span>
                <button
                  onClick={() => playSignAnimation(index)}
                  className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-label={`Play animation for ${sign.word}`}
                >
                  <Play className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4 text-lg">{sign.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 ${
                playingIndex === index ? 'bg-blue-100' : 'bg-gray-50'
              }`}>
                <Hand className={`h-5 w-5 transition-colors ${
                  playingIndex === index ? 'text-blue-600' : 'text-blue-500'
                }`} />
                <div>
                  <span className="font-medium text-gray-600">Hand Shape:</span>
                  <p className="text-gray-800 font-medium">{sign.handShape}</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 ${
                playingIndex === index ? 'bg-green-100' : 'bg-gray-50'
              }`}>
                <Move className={`h-5 w-5 transition-colors ${
                  playingIndex === index ? 'text-green-600 animate-pulse' : 'text-green-500'
                }`} />
                <div>
                  <span className="font-medium text-gray-600">Movement:</span>
                  <p className="text-gray-800 font-medium">{sign.movement}</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 ${
                playingIndex === index ? 'bg-purple-100' : 'bg-gray-50'
              }`}>
                <RotateCcw className={`h-5 w-5 transition-colors ${
                  playingIndex === index ? 'text-purple-600' : 'text-purple-500'
                }`} />
                <div>
                  <span className="font-medium text-gray-600">Location:</span>
                  <p className="text-gray-800 font-medium">{sign.location}</p>
                </div>
              </div>
            </div>

            {playingIndex === index && (
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <p className="font-medium">Demonstrating: {sign.visualCue}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Practice Tips:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Practice each sign slowly and pay attention to hand shape, movement, and location</li>
              <li>• Use the emoji as a memory aid for each sign</li>
              <li>• Click the play button to see individual sign animations</li>
              <li>• Signs may vary slightly between regions and individuals</li>
              <li>• Try the "Play All Signs" button to see the complete sequence</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageDisplay;