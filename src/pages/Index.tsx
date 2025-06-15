
import React, { useState } from 'react';
import { DeviceSelector } from '../components/DeviceSelector';
import { TVInterface } from '../components/TVInterface';
import { MobileInterface } from '../components/MobileInterface';

const Index = () => {
  const [selectedDevice, setSelectedDevice] = useState<'tv' | 'mobile' | null>(null);

  const renderInterface = () => {
    switch (selectedDevice) {
      case 'tv':
        return <TVInterface />;
      case 'mobile':
        return <MobileInterface />;
      default:
        return <DeviceSelector onSelectDevice={setSelectedDevice} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderInterface()}
      
      {/* Device Switch Button */}
      {selectedDevice && (
        <button
          onClick={() => setSelectedDevice(null)}
          className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 z-50"
        >
          Switch Device
        </button>
      )}
    </div>
  );
};

export default Index;
