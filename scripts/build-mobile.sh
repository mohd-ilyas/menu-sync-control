
#!/bin/bash

echo "Building MenuSync Control for Android deployment..."

# Clean previous builds
rm -rf dist/
rm -rf node_modules/.vite/

# Build the web app
echo "Building React app..."
npm run build

# Sync with Capacitor
echo "Syncing with Capacitor..."
npx cap sync

echo "✅ Build complete! Ready for Android deployment."
echo ""
echo "📱 Next steps to deploy on Android:"
echo "1. Export to GitHub and pull the project locally"
echo "2. Run 'npm install' to install dependencies"
echo "3. Add Android platform: 'npx cap add android'"
echo "4. Update platform: 'npx cap update android'"
echo "5. Build: 'npm run build && npx cap sync'"
echo "6. Open in Android Studio: 'npx cap open android'"
echo "7. Build APK in Android Studio or run: 'npx cap run android'"
echo ""
echo "📺 For Android TV optimization:"
echo "- The app will automatically detect TV vs mobile interface"
echo "- Use D-pad navigation on Android TV"
echo "- Deploy the same APK to both TV and mobile devices"
