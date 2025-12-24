# 🎵 iPod Classic Music Player (React)

A fully interactive **iPod Classic–style music player** built using **pure React.js (Vite)** and **Tailwind CSS**, inspired by the original Apple iPod UI and interaction model.

This project simulates the **Click Wheel**, menu navigation, playlists, local/open-source music playback, and responsive layouts for **desktop, tablet, and mobile**.


 ### lIVE IS HERE :
 https://ipod-classic-two.vercel.app
 
---<img width="310" height="513" alt="image" src="https://github.com/user-attachments/assets/1f389ddf-f5ae-420d-98cc-f936dcbc51b5" />
<img width="310" height="513" alt="image" src="https://github.com/user-attachments/assets/e888ff0b-3672-4737-aaec-83d26266e2a4" />
<img width="310" height="513" alt="image" src="https://github.com/user-attachments/assets/5819ed0a-1385-4109-bfb1-736a9fc8cc25" />
<img width="310" height="513" alt="image" src="https://github.com/user-attachments/assets/e082cad9-f589-45d5-8217-758fa75a1200" />
<img width="310" height="513" alt="image" src="https://github.com/user-attachments/assets/0efe8ae8-5f60-476a-9515-ea106cb24e85" />


## ✨ Features

- 🎛️ Classic **iPod Click Wheel** interaction
  - Rotate wheel to navigate
  - Center button to select
  - MENU button for back navigation
- 📂 Music Library (open-source / local audio)
- ▶️ Play / Pause / Next / Previous
- 🎧 Now Playing screen
- 📜 Menu-based navigation (state machine)
- 📱 Responsive UI (Desktop, Tablet, Mobile)
- 🔊 Click + wheel sound effects
- 🧠 Centralized state using Zustand
- ⚡ Built with Vite for fast dev experience

---

## 🧠 Architecture Overview

This app is **NOT page-based**.  
It works like a real iPod using a **state-driven finite navigation machine**.

ClickWheel
↓
Navigation Store (State Machine)
↓
Screen Renderer
↓
Player (Audio Engine)

---

## 📁 Folder Structure
src/
│
├── assets/
│ ├── sounds/ # click / wheel sounds
│ └── icons/ # svg icons
│
├── components/
│ ├── ipod/
│ │ ├── IpodShell.jsx
│ │ ├── Screen.jsx
│ │ ├── StatusBar.jsx
│ │ ├── ClickWheel.jsx
│ │ └── ListItem.jsx
│ │
│ └── common/
│ ├── ProgressBar.jsx
│ └── Divider.jsx
│
├── screens/
│ ├── MenuScreen.jsx
│ ├── MusicScreen.jsx
│ ├── SearchScreen.jsx
│ ├── PlaylistScreen.jsx
│ ├── NowPlayingScreen.jsx
│ └── SettingsScreen.jsx
│
├── hooks/
│ ├── useWheel.js # click wheel logic
│ ├── useNavigation.js # navigation FSM
│ ├── usePlayer.js # audio control
│ ├── useSearch.js
│ └── useLibrary.js
│
├── store/
│ ├── navigation.store.js
│ ├── player.store.js
│ └── library.store.js
│
├── data/
│ └── openSourceSongs.js
│
├── utils/
│ ├── audio.js
│ ├── gestures.js
│ └── db.js # IndexedDB helpers
│
├── styles/
│ └── globals.css
│
├── App.jsx
└── main.jsx



---

## 🎛️ Click Wheel Controls

| Action            | Interaction                     |
|------------------|----------------------------------|
| Navigate menu    | Rotate wheel (drag up/down)      |
| Select item      | Center button                    |
| Go back          | MENU button                      |
| Next song        | Right button                     |
| Previous song    | Left button                      |
| Play / Pause     | Bottom button                    |

Supports **mouse, trackpad, and touch (mobile)** using Pointer Events.

---

## 📱 Mobile Support

- Uses `pointerdown / pointermove / pointerup`
- Works on touch screens
- Wheel rotation maps to vertical drag
- Buttons remain clickable on small screens

---

## ▶️ Music Playback

- Uses native `HTMLAudioElement`
- Songs loaded from:
  - Open-source MP3 URLs
  - Local files (optional)
- Centralized player store ensures:
  - Only one audio instance
  - Global play/pause control

---

## 🧩 State Management

- **Zustand** for lightweight global state
- Navigation uses a **stack-based FSM**
- Player state decoupled from UI

Example navigation stack:



MENU button pops the stack  
Center button pushes the next screen

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install


npm run dev
```

⚠️ Known Limitations

iOS Safari may block autoplay until user interaction

Local file system access depends on browser permissions

No backend (pure frontend by design)

🛠️ Tech Stack

React.js

Vite

Tailwind CSS

Zustand

React Icons

HTML5 Audio API
🎯 Future Improvements

Album artwork & cover flow

Circular wheel gesture detection (true radial)

Shuffle & repeat modes

IndexedDB persistent playlists

Watch-style mini UI

🙌 Inspiration

Inspired by the original Apple iPod Classic UI and interaction model.


📜 License

MIT License
Free to use, modify, and distribute.

