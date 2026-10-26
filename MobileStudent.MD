# Mobile App Notes - Jacob Lau

Date: 2026-10-26

## React Native and Expo

* React Native uses View, Text, TextInput, ScrollView, and TouchableOpacity instead of HTML elements.
* StyleSheet.create defines component styles. State hooks update the screen when data changes.
* Expo starts Metro to bundle JavaScript. Run npm ci, then npx expo start in mobile/; press W for the web preview.
* This checkout uses Expo SDK 55, React 19.2, React Native 0.83, and React Native Web 0.21.
* babel-preset-expo must be installed because babel.config.js names it. Its absence caused Metro to return JSON errors instead of a JavaScript bundle.

## Navigation and authentication

* React Navigation provides an authentication stack and authenticated bottom tabs.
* navigation.navigate must be called with registered screen names. navigation is an object, not a function.
* AuthContext holds the session. Stable callback functions prevent the startup effect from repeatedly restoring a stale session.
* The success screen reads login from AuthContext rather than passing a function through route parameters.
* Built-in tab buttons correctly select screens on web; the custom TouchableOpacity tab button only changed the browser URL.
* Web uses localStorage. Native JWT storage uses SecureStore; other native data uses AsyncStorage.
* API helpers use fetch against localhost:4000 on web. A physical phone requires the computer's reachable LAN address or EXPO\_PUBLIC\_API\_BASE; localhost on a phone refers to the phone.
* The Books screen refreshes on focus so a newly added book appears when returning from Add Book.

## Verified behavior

* Home, Login, Register, Books, Add Book, and Logout screens rendered in the browser.
* Fresh signup, login, authenticated book retrieval, book creation, listing refresh, saved-session restoration, and logout were tested against the actual backend and MongoDB.
* Metro returned HTTP 200 with application/javascript. Expo dependency compatibility check passed.
* Production web export completed successfully.
* Earlier screenshots were taken in a regular browser window at 885 x 932, not in mobile device emulation.
* A separate screenshot, Mobile Application.png, captures the running Expo web app in Chrome/Edge DevTools using Pixel 8/9 device emulation at 412 x 915.
* Browser device emulation was verified. Execution on a physical Android or iOS device remains unverified.

## Git workflow

The status, add, commit, and push commands are documented in Git-workflow-Jacob.txt.

