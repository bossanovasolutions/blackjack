# Boilerplate

This is the Boilerplate app, powered by React Native and Expo.

### Stack

| Links                                              |
| -------------------------------------------------- |
| [React Native](https://reactnative.dev/)           |
| [Expo](https://expo.dev/)                          |
| [React Navigation](https://reactnavigation.org/)   |
| [RNUI](https://wix.github.io/react-native-ui-lib/) |

## Trunk-Based / Branches

We are going to follow a simplified version of [trunk-based](https://trunkbaseddevelopment.com/).

- The trunk branch is **main**
- All feature branchs starts from **main**
- Each release is a new branch forked from **main**
- Each new branch should have the branch name prefixed with one of the next options:
  - **feat**: For new features;
  - **fix**: For bugfixes;
  - **refactor**: For code improvements that don't change any behavior on the app;
  - **docs**: For documentation changes;
  - **ci**: For CI/CD changes.

## Development

#### Install JDK 11

Clone this repository.

```
git clone git@github.com:bossanovasolutions/boilerplate.git
```

After this, you can start working on your own tasks.

```
git checkout -b feat/your-branch-name
```

Change the code, commit and open a PR following the template.

## Code structure

We are going to follow a basic domain driven design, taking full advantage of code colocation.

```sh
/src
├─ contexts/            # Reusable contexts
├─ components/          # Reusable components
│  ├─ index.ts          # Barrel export components
├─ domains/             # Think in domains mostly as screens
│  ├─ Auth/             # The auth domain that will hold all screens related to authentication
│  │  ├─ components/    # Auth related components
│  │  ├─ hooks/         # Auth related hooks
│  │  ├─ Login/         # The Login screen
│  │  │  ├─ components/ # Login related components
│  │  │  ├─ hooks/      # Login related hooks
│  │  │  ├─ Login.tsx   # Login screen component
│  ├─ index.ts          # Barrel export domains
├─ hooks/               # Reusable hooks
├─ types/               # Reusable types
├─ routes/              # Routes
```

# Get Started

## Rename app

```
npx react-native-rename "name" -b "com.bossanovasolutions.name"
```

## Setup new project on firebase
- Enable Login with Phone, Apple, Google and Email Passwordless
- Copy GoogleService-Info.plist
- Configure Dynamic Link

## On Xcode
- Configure URL Schema (Info -> URL Types)
- Add Dynamic Link (Signing & Capabilities -> Associated Domains)
- Enable Capabilities (Signing & Capabilities -> + Capability)
  - Sign in with Apple
  - Background Notifications (Remote notifications, Background Fetch)
  - AutoFill Cretendential Provider
  - Push Notifications
- Configure firebase Exception Domain

## On Apple Connect
- Configure APN
