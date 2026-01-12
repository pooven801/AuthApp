# React Native Authentication App

## Overview

This is a **React Native application** implementing user authentication using **React Context**, **Redux**, and **redux-persist**.  
The app includes:

- Login and Signup functionality  
- Persisted authentication state  
- Logout functionality that clears Redux, persisted storage, and context  
- Automatic navigation based on authentication state  
- Loading screen while checking user state  

Built with **TypeScript** for type safety.

---

## Features

### 1. Login
- Validates email and password against stored user data.  
- Persists user session using Redux + redux-persist.  
- Returns success/error messages (`LoginResult` type).

### 2. Signup
- Allows creating a new user with name, email, and password.  
- Returns success/error messages (`SignupResult` type).

### 3. Logout
- Clears user data from Redux, persisted storage, and context.  
- Returns a `"Logged Out"` message.

### 4. Loading Screen
- Checks persisted authentication state.  
- Redirects to `HomeScreen` if logged in, or `LoginScreen` if not.

### 5. Navigation
- Uses React Navigation.  
- Automatically routes users based on authentication state.

---

## Folder Structure

src/
├─ actions/ # Redux action creators (login/logout)
├─ reducers/ # Redux reducers (auth)
├─ store/ # Redux store + redux-persist setup
├─ context/ # AuthContext and AuthProvider
├─ screens/ # LoginScreen, HomeScreen, LoadingScreen
├─ navigation/ # Navigation setup
├─ config/ # Import assets
├─ assets/ # store assets(icons)
├─ utils/ # standard function calls
└─ App.tsx # App entry point


---

## Installation

1. Clone the repository:
git clone <repo-url>
cd <project-directory>

2. Install dependencies:
npm install
# or
yarn install

3. Start Metro Bundler:
npx react-native start

4. Run the app:=
# iOS
npx react-native run-ios

# Android
npx react-native run-android

## Dependencies
   "@react-native-async-storage/async-storage"
    "@react-native/new-app-screen"
    "@react-navigation/native"
    "@react-navigation/native-stack"
    "@reduxjs/toolkit"
    "react"
    "react-native"
    "react-native-safe-area-context"
    "react-native-screens"
    "react-redux"
    "redux"
    "redux-persist"
    "redux-thunk"
    
## Demo Video Link
https://drive.google.com/file/d/19vaQibTWUW8aEsehEtdIvMiGDCYXPn7c/view?usp=sharing

## Author
Pooventhiran Raman