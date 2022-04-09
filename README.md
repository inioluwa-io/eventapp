# Event App

An event location software built with [Laravel](https://laravel.com/) and mobile app built with [React Native](https://reactnative.dev/).

## Installation

You need to have Laravel, composer, node and npm/Yarn installed properly.

- Clone this repo
- Install the react native node_modules by running `yarn install-frontend` in your terminal
- Install the laravel vendor by running `yarn install-backend` in your terminal

## Frontend Documentation

The frontend is built with expo for making universal native apps for Android, iOS, and the web with JavaScript and React. It uses redux for state management of all global or shared states.

### Key features

- Redux for global and shared state management.
- Axios for HTTP requests. All requests are in the `src/redux/actions/index.js` file.
- Custom hooks located in the `src/lib/hooks.ts` file.
- Pre-defined styles such as colors, font and other constants used in the app. It is located in the `src/constants` folder.
- Customizable color scheme located in the `src/config` folder.
- Reuseable components located in the `src/components` folder.

### Components

- **PaddedView:** React native `View` with `padding:20` and `flex:1`. Accepts all props of `View`.
- **ContainerView:** React native `View` with white background and `flex:1`. Accepts all props of `View`.
- **ContainerScrollView:** React native `ScrollView` with white background and `flex:1`. Accepts all props of `ScrollView`.
- **SettingsButton:** An icon button. Props: `onPress` - A callback function on button press. `color` - color for the icon.
- **BackArrow:** An icon button. Props: `onPress` - A callback function on button press. `color` - color for the icon.
- **FilterPanel:** Swipeable panel that allows you select users location on a map.

## Backend Documentation

The backend is built with laravel to create APIs.

### API Endpoint

| Route          | Type   | payload                                                                   | description                                           |
| -------------- | ------ | ------------------------------------------------------------------------- | ----------------------------------------------------- |
| /auth/login    | post   | `{email:string,password:string}`                                          | login the user                                        |
| /auth/logout   | get    | -                                                                         | logout the user                                       |
| /auth/register | post   | `{email:string,password:string,name:string,password_confirmation:string}` | register the user                                     |
| /event         | get    | -                                                                         | get all events                                        |
| /event         | post   | `{title:string,description:string,lat:double,long:double}`                | create an event                                       |
| /event/{id}    | get    | -                                                                         | get one event. `id` is the id of an event to fetch    |
| /event/{id}    | delete | -                                                                         | delete one event. `id` is the id of an event to fetch |
| /event/range   | post   | `{lat:double,long:double}`                                                | get all events within a range of coords               |
