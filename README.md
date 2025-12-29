# 🚀 codeXcollab

**codeXcollab** is a real-time collaborative code editor that allows multiple users to write, edit, and run code together in the same room. It features user authentication, syntax highlighting, and instant synchronization, making it perfect for pair programming, technical interviews, or group projects.

---

## 📸 Application Walkthrough

| **1. Secure Login** | **2. User Registration** |
|:---:|:---:|
| ![Login Page](https://raw.githubusercontent.com/aditya-h-kudroli/codeXcollab/main/screenshots/1-loginPage.png) | ![Register Page](https://raw.githubusercontent.com/aditya-h-kudroli/codeXcollab/main/screenshots/2-registerPage.png) |
| *Secure authentication with JWT & MongoDB* | *Easy sign-up for new users* |

<br>

| **3. Dashboard** | **4. Join a Room** |
|:---:|:---:|
| ![Home Page](https://raw.githubusercontent.com/aditya-h-kudroli/codeXcollab/main/screenshots/3-homePage.png) | ![Join Room](https://raw.githubusercontent.com/aditya-h-kudroli/codeXcollab/main/screenshots/4-homePage-roomID.png) |
| *Clean interface to manage sessions* | *Generate or paste Room IDs instantly* |

<br>

### 💻 Real-Time Collaboration Workspace
| **5. Code Editor View** | **6. Multi-User Sync** |
|:---:|:---:|
| ![Editor Page](https://raw.githubusercontent.com/aditya-h-kudroli/codeXcollab/main/screenshots/5-editorPage.png) | ![Multi User](https://raw.githubusercontent.com/aditya-h-kudroli/codeXcollab/main/screenshots/6-Two-users-UI.png) |
| *Syntax highlighting with Dracula theme* | *Live typing sync across multiple windows* |

---

## ✨ Features

-   **💻 Real-time Collaboration:** See code changes instantly across all connected clients using Socket.io.
-   **🔐 User Authentication:** Secure Login and Registration system using MongoDB & JWT.
-   **📁 Room Management:** Create unique rooms or join existing ones via Room ID.
-   **🎨 Syntax Highlighting:** Supports JavaScript code highlighting with a dark "Dracula" theme.
-   **👥 Live Presence:** See who is currently in the room with avatars.
-   **📋 One-Click Copy:** Easily copy the Room ID to share with peers.
-   **⚡ Auto-Sync:** New users receive the current code state immediately upon joining.

---

## 🛠️ Tech Stack

**Frontend:**
-   React.js
-   CodeMirror (Code Editor)
-   Socket.io-client
-   React Router DOM
-   React Hot Toast

**Backend:**
-   Node.js & Express.js
-   Socket.io
-   MongoDB (Database)
-   Mongoose (ODM)
-   BcryptJS (Password Encryption)
-   JWT (Authentication)

---