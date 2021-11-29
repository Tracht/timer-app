# Focus Time App using Expo

## What it does
A countdown timer that helps you stay focused on a task. Type in the task you want to focus on and select the amount of time. You can see a history of all your tasks. Red tasks indicate you've cleared the timer before it ended. Green tasks indicate that the countown ran until the end. 

- A status bar running horizontally provides a visual indication of progress. 
- Your task history will is saved even when exiting the App. 
- Phone vibrates on countdown completion. 
- Most recent task shows up at the bottom of the list.

## Tech Stack & Libraries
- Expo project
- React Native, Javascript
- Async Storage from React Native
- Progress bar & Text Input from React Native Paper library

## Key React Native elements
- FlastList
- SafeAreaView
- TouchableOpacity
- Platform
- Vibration
- Progress bar

## Try the App Live / Developing locally using Expo
- In the project root folder, type `expo start` in the terminal
- The Browser should open with a url of `localhost:19002` 
- Follow the instructions in the terminal.
- To run the App on your physical device, scan the QR code above with Expo Go (Android) or the Camera app (iOS). 
- The Metro Bundler running in the browser should auto detect your device if it is connected. 
  - If it does not detect your device, you may need to enable developer tools. Steps to do that are here: `https://developer.android.com/training/basics/firstapp/running-app`.
- The Metro Bundler browser, running on localhost:19002 also has the option to run the android and iOS simulators. 
