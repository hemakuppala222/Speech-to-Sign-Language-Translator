import React, { useRef, useState } from 'react';
import { Upload, File, X, Play } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  onTextExtract: (text: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, onTextExtract }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && (file.type.startsWith('audio/') || file.type.startsWith('video/'))) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const processFile = async () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    
    // Simulate audio processing (in a real app, you'd use Web Speech API or send to backend)
    try {
      // For demo purposes, we'll simulate extracting text from audio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock extracted text based on file name or generate sample text
      const sampleText = "Hello, I need assistance with my appointment today.";
      onTextExtract(sampleText);
    } catch (error) {
      console.error('Error processing file:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Upload Audio or Video File
          </p>
          <p className="text-gray-500 mb-4">
            Drag and drop your file here, or click to browse
          </p>
          <p className="text-sm text-gray-400">
            Supported formats: MP3, WAV, MP4, AVI, MOV
          </p>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*,video/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <File className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <button
              onClick={removeFile}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove file"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <button
            onClick={processFile}
            disabled={isProcessing}
            className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors ${
              isProcessing
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Play className="h-4 w-4" />
            <span>{isProcessing ? 'Processing...' : 'Extract Speech'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;