import React, { useState } from 'react';
import { Type, Send } from 'lucide-react';

interface TextInputProps {
  onTextSubmit: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onTextSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onTextSubmit(inputText.trim());
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here to convert to sign language..."
          className="w-full p-4 pr-12 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
          rows={4}
        />
        <Type className="absolute top-4 right-4 h-5 w-5 text-gray-400" />
      </div>
      
      <button
        type="submit"
        disabled={!inputText.trim()}
        className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
          inputText.trim()
            ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <Send className="h-4 w-4" />
        <span>Convert to Sign Language</span>
      </button>
      
      <p className="text-sm text-gray-500 text-center">
        Press Enter to submit or Shift+Enter for new line
      </p>
    </form>
  );
};

export default TextInput;