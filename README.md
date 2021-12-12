# Focus Time React Native App (using Expo)

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

## Screenshots

<img width="389" alt="Screenshot 2021-12-12 at 14 52 55" src="https://user-images.githubusercontent.com/28805811/145717492-6ed35fb9-3f6c-4567-8709-62016f400d8c.png">

<img width="396" alt="Screenshot 2021-12-12 at 14 53 08" src="https://user-images.githubusercontent.com/28805811/145717501-14c7a9d6-4dc1-4ab3-8150-f36aef081519.png">

<img width="387" alt="Screenshot 2021-12-12 at 14 54 08" src="https://user-images.githubusercontent.com/28805811/145717521-bd50488d-884e-4c04-a977-c97f60500e32.png">

