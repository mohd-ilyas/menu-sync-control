
import React from 'react';
import { Tv, Smartphone } from 'lucide-react';

interface DeviceSelectorProps {
  onSelectDevice: (device: 'tv' | 'mobile') => void;
}

export const DeviceSelector: React.FC<DeviceSelectorProps> = ({ onSelectDevice }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Restaurant Menu System</h1>
          <p className="text-xl text-gray-600">Choose your device type to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TV Interface */}
          <div
            onClick={() => onSelectDevice('tv')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 hover:border-blue-500"
          >
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tv className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">TV Display</h2>
              <p className="text-gray-600 mb-6">
                Large screen interface for kitchen or dining area display. 
                Shows menu items with real-time availability status.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Features:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Large, visible buttons and text</li>
                  <li>• Real-time status updates</li>
                  <li>• Blinking animations for active items</li>
                  <li>• Auto-reconnect capability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Interface */}
          <div
            onClick={() => onSelectDevice('mobile')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 hover:border-green-500"
          >
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Mobile Controller</h2>
              <p className="text-gray-600 mb-6">
                Control interface for restaurant staff. Add, remove, and toggle 
                menu item availability from anywhere in the restaurant.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-700 mb-2">Features:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Add/remove menu items</li>
                  <li>• Toggle availability status</li>
                  <li>• Material Design interface</li>
                  <li>• Real-time sync with TV</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            💡 <strong>Tip:</strong> Connect both devices to the same WiFi network for optimal performance
          </p>
        </div>
      </div>
    </div>
  );
};
