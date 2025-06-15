
export interface MenuItem {
  id: string;
  name: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuState {
  items: MenuItem[];
  connectionStatus: 'connected' | 'disconnected' | 'connecting';
  deviceType: 'tv' | 'mobile';
}

export interface WebSocketMessage {
  type: 'MENU_UPDATE' | 'ITEM_TOGGLE' | 'ITEM_ADD' | 'ITEM_DELETE' | 'SYNC_REQUEST';
  payload: any;
  timestamp: number;
}
