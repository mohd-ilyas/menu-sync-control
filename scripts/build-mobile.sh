
#!/bin/bash

echo "Building for mobile deployment..."

# Build the web app
npm run build

# Sync with Capacitor
npx cap sync

echo "Build complete! Ready for mobile deployment."
echo ""
echo "Next steps:"
echo "1. Export to GitHub and pull the project locally"
echo "2. Run 'npm install' to install dependencies"
echo "3. Add platforms: 'npx cap add android' and/or 'npx cap add ios'"
echo "4. Update platforms: 'npx cap update android' or 'npx cap update ios'"
echo "5. Build: 'npm run build'"
echo "6. Sync: 'npx cap sync'"
echo "7. Run: 'npx cap run android' or 'npx cap run ios'"
