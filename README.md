# React Native Intermittent Crash Bug

This repository demonstrates a common bug in React Native applications: intermittent crashes due to unhandled network request errors. The app fetches data from an API, but occasionally fails silently without proper error handling, leading to unexpected crashes.

## Bug Description
The `bug.js` file contains a React Native component that fetches data from an API. The code includes a `try...catch` block, but it only logs the error to the console.  A more robust error handling mechanism is needed. The app crashes intermittently because the error isn't handled gracefully, leading to an unhandled promise rejection.

## Solution
The `bugSolution.js` file provides a solution by improving error handling.  It adds a mechanism to display a user-friendly error message instead of silently crashing. The implementation also uses a state variable to track loading and error states, providing better feedback to the user.  This approach offers a better user experience and increases application stability.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run the app using a React Native simulator or physical device.
4. Observe the intermittent crashes.  Note that the exact frequency of the crashes will depend on the API endpoint and network conditions.

## How to Fix
Review the `bugSolution.js` file to see how to implement proper error handling using state management for error states and to gracefully handle network request failures.