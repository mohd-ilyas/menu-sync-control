
export const getWebSocketUrl = () => {
  // Detect if running in an Android emulator (Capacitor/Android WebView)
  const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
  const isCapacitor = typeof window !== 'undefined' && ((window as any).Capacitor || (window as any).cordova);
  
  // If running on Android emulator, use 10.0.2.2 to reach local machine
  if (isAndroid && isCapacitor) {
    return 'ws://10.0.2.2:3001';
  }

  // In production mobile app or PWA over HTTPS
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    return 'wss://your-websocket-server.com'; // Replace with your deployed WebSocket server
  }
  
  // For development and web deployment
  return 'ws://localhost:3001';
};

export const WEBSOCKET_CONFIG = {
  reconnectInterval: 3000,
  maxReconnectAttempts: 10,
  heartbeatInterval: 30000
};
