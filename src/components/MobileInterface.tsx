
import React, { useEffect } from 'react';
import { MenuItem, WebSocketMessage } from '../types/menu';
import { useMenuStore } from '../hooks/useMenuStore';
import { useWebSocket } from '../hooks/useWebSocket';
import { MenuItemCard } from './MenuItemCard';
import { AddItemForm } from './AddItemForm';
import { ConnectionStatus } from './ConnectionStatus';
import { Smartphone } from 'lucide-react';

export const MobileInterface: React.FC = () => {
  const { items, addItem, toggleItem, deleteItem, updateItems } = useMenuStore();

  const handleWebSocketMessage = (message: WebSocketMessage) => {
    console.log('Mobile received message:', message);
    
    switch (message.type) {
      case 'SYNC_REQUEST':
        // Send current menu to TV
        sendMessage({
          type: 'MENU_UPDATE',
          payload: { items },
          timestamp: Date.now()
        });
        break;
      case 'ITEM_TOGGLE':
        toggleItem(message.payload.itemId);
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

  const handleAdd = (name: string) => {
    const newItem = addItem(name);
    // Send updated menu to TV
    setTimeout(() => {
      sendMessage({
        type: 'MENU_UPDATE',
        payload: { items: [...items, newItem] },
        timestamp: Date.now()
      });
    }, 100);
  };

  const handleDelete = (id: string) => {
    deleteItem(id);
    const updatedItems = items.filter(item => item.id !== id);
    sendMessage({
      type: 'MENU_UPDATE',
      payload: { items: updatedItems },
      timestamp: Date.now()
    });
  };

  // Sync menu when connected
  useEffect(() => {
    if (connectionStatus === 'connected' && items.length > 0) {
      sendMessage({
        type: 'MENU_UPDATE',
        payload: { items },
        timestamp: Date.now()
      });
    }
  }, [connectionStatus, items, sendMessage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Smartphone className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Menu Controller</h1>
          </div>
          <ConnectionStatus status={connectionStatus} />
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
      </div>

      {/* Add Item Form */}
      <AddItemForm onAdd={handleAdd} className="mb-6" />

      {/* Menu Items */}
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-400 mb-2">No Menu Items</h2>
            <p className="text-gray-500">Add your first menu item above</p>
          </div>
        ) : (
          items.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onToggle={handleToggle}
              onDelete={handleDelete}
              isTV={false}
            />
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-6 bg-white rounded-xl shadow-lg p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-800">{items.length}</div>
            <div className="text-sm text-gray-500">Total Items</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">{items.filter(item => item.isAvailable).length}</div>
            <div className="text-sm text-gray-500">Available</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">{items.filter(item => !item.isAvailable).length}</div>
            <div className="text-sm text-gray-500">Unavailable</div>
          </div>
        </div>
      </div>
    </div>
  );
};
