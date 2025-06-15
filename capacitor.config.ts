
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.biryani.menusync',
  appName: 'menu-sync-control',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://07be41e2-ca0f-4903-b176-b0134ec8dcf1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
