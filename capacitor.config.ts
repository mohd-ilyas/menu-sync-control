
import { CapacitorConfig } from '@capacitor/cli';

// This config is only needed if you also deploy as a native app (not needed for website hosting)
const config: CapacitorConfig = {
  appId: 'com.biryani.menusync',
  appName: 'MenuSync Control',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  },
  android: {
    allowMixedContent: true,
    captureInput: true
  }
};

export default config;
