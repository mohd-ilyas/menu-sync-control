
export const getWebSocketUrl = () => {
  // In production mobile app, use a configurable WebSocket server
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    return 'wss://your-websocket-server.com'; // Replace with your actual WebSocket server
  }
  
  // For development and web deployment
  return 'ws://localhost:3001';
};

export const WEBSOCKET_CONFIG = {
  reconnectInterval: 3000,
  maxReconnectAttempts: 10,
  heartbeatInterval: 30000
};
