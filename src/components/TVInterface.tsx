
import React, { useEffect } from 'react';
import { MenuItem, WebSocketMessage } from '../types/menu';
import { useMenuStore } from '../hooks/useMenuStore';
import { useWebSocket } from '../hooks/useWebSocket';
import { MenuItemCard } from './MenuItemCard';
import { ConnectionStatus } from './ConnectionStatus';

export const TVInterface: React.FC = () => {
  const { items, toggleItem, updateItems } = useMenuStore();

  const handleWebSocketMessage = (message: WebSocketMessage) => {
    console.log('TV received message:', message);
    
    switch (message.type) {
      case 'MENU_UPDATE':
        updateItems(message.payload.items);
        break;
      case 'ITEM_TOGGLE':
        toggleItem(message.payload.itemId);
        break;
      case 'ITEM_ADD':
        // Refresh the entire menu from mobile
        break;
    }
  };

  const { connectionStatus, sendMessage } = useWebSocket('ws://localhost:3001', handleWebSocketMessage);

  const handleToggle = (id: string) => {
    toggleItem(id);
    sendMessage({
      type: 'ITEM_TOGGLE',
      payload: { itemId: id },
      timestamp: Date.now()
    });
  };

  // Send sync request on connection
  useEffect(() => {
    if (connectionStatus === 'connected') {
      sendMessage({
        type: 'SYNC_REQUEST',
        payload: {},
        timestamp: Date.now()
      });
    }
  }, [connectionStatus, sendMessage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-6xl font-bold text-gray-800">Restaurant Menu</h1>
          <ConnectionStatus status={connectionStatus} className="text-lg" />
        </div>
        <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-gray-400 mb-4">No Menu Items</h2>
            <p className="text-2xl text-gray-500">Connect your mobile device to add items</p>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onToggle={handleToggle}
                isTV={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 left-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center">
          <p className="text-xl text-gray-600">
            Use your mobile device to control this menu • Total items: {items.length} • 
            Available: {items.filter(item => item.isAvailable).length}
          </p>
        </div>
      </div>
    </div>
  );
};
