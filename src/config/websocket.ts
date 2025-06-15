
export const getWebSocketUrl = () => {
  // If deployed (https), connect to your remote websocket server
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    return 'wss://your-websocket-server.com'; // Set this to your production WebSocket server
  }

  // For local development
  return 'ws://localhost:3001';
};

export const WEBSOCKET_CONFIG = {
  reconnectInterval: 3000,
  maxReconnectAttempts: 10,
  heartbeatInterval: 30000
};

