
# Restaurant Menu Management System

A cross-platform client-server application for managing restaurant menu availability in real-time between Android TV displays and mobile controller devices.

## 🚀 Features

### 📺 TV Interface (Client)
- **Large Screen Display**: Optimized for restaurant displays and Android TV
- **Real-time Updates**: Instant synchronization with mobile controllers
- **Visual Status Indicators**: Blinking buttons for active availability states
- **Auto-reconnect**: Automatically reconnects to mobile controllers
- **Clean Design**: Card-based layout with high visibility for kitchen staff

### 📱 Mobile Interface (Controller)
- **Material Design**: Intuitive mobile interface for restaurant staff
- **Menu Management**: Add, delete, and rename menu items
- **Availability Toggle**: Real-time status control with instant TV updates
- **Network Status**: Visual connection indicators
- **Offline Storage**: Local storage for menu persistence

### 🔄 Real-time Synchronization
- **WebSocket Communication**: Instant updates between devices
- **Local Network**: No internet dependency - works on local WiFi
- **Graceful Reconnection**: Handles network interruptions seamlessly
- **Data Persistence**: Menu items saved locally on both devices

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Communication**: WebSocket for real-time updates
- **Storage**: LocalStorage for menu persistence
- **Icons**: Lucide React
- **State Management**: Custom React hooks

## 🏗️ Architecture

The application follows a **client-server architecture** with:
- **TV Interface**: Display client optimized for large screens
- **Mobile Interface**: Controller client for menu management
- **WebSocket Server**: Real-time communication hub (mock implementation included)
- **Local Storage**: Offline-first data persistence

## 📋 Usage Instructions

### Getting Started
1. **Choose Device Type**: Select TV or Mobile interface on launch
2. **TV Setup**: Use TV interface for kitchen/display area
3. **Mobile Setup**: Use mobile interface for staff control
4. **Connect**: Both devices automatically connect via WebSocket

### TV Interface
- View all menu items in large, readable cards
- See real-time availability status with blinking indicators
- Monitor connection status in the header
- Automatic synchronization with mobile updates

### Mobile Interface
- **Add Items**: Tap "Add New Menu Item" to create entries
- **Toggle Status**: Tap Available/Not Available buttons
- **Delete Items**: Use delete button to remove items
- **Monitor Stats**: View total, available, and unavailable counts

## 🔧 Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Network Configuration

For production deployment:

1. **WebSocket Server**: Implement a real WebSocket server (mock included)
2. **Local Discovery**: Use mDNS/Bonjour for device discovery
3. **QR Pairing**: Implement QR code pairing for easy setup
4. **Network Resilience**: Handle WiFi changes and reconnections

## 📱 Android Deployment

### For Android TV:
1. Build APK with Android TV launcher intent
2. Optimize for D-pad navigation
3. Configure for kiosk mode if needed

### For Mobile:
1. Standard Android APK build
2. Request network permissions
3. Implement background service for persistent connection

## 🔒 Security Features

- **Local Network Only**: No external server dependencies
- **Device Authentication**: Can be extended with pairing codes
- **Message Validation**: All WebSocket messages are validated
- **Graceful Degradation**: Works offline with local storage

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for both TV and mobile screens
- **Smooth Animations**: Blinking effects and transitions
- **Visual Feedback**: Connection status and loading states
- **Accessibility**: High contrast colors and large touch targets

## 📊 Menu Statistics

The system tracks:
- Total menu items
- Available items count
- Unavailable items count
- Real-time status updates
- Connection health monitoring

## 🚀 Future Enhancements

- **Multi-device Support**: Multiple mobile controllers
- **Menu Categories**: Group items by course type
- **Image Support**: Add photos to menu items
- **Analytics**: Track availability patterns
- **Voice Control**: Add voice commands for hands-free operation

## 🤝 Contributing

This is a demonstration project showing cross-platform restaurant management system architecture. To extend for production:

1. Implement real WebSocket server
2. Add Android TV and mobile native builds
3. Integrate with restaurant POS systems
4. Add user authentication and roles
5. Implement advanced networking features

---

Built with ❤️ for restaurant efficiency and staff productivity.
