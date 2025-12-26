
# 💬 Chat Application (HeabyCoders)

A **real-time chat application** built using the **MERN stack** with secure authentication, image upload support, and an optimized UI for smooth messaging.

This app allows users to register, log in, update their profile picture, and chat instantly with others in real-time.

---

## 🚀 Features

| Feature                                            | Description                          |
| -------------------------------------------------- | ------------------------------------ |
| 🔐 Authentication                                  | JWT-based secure login + signup      |
| ⚡ Real-Time Messaging                              | Socket.IO for instant communication  |
| 💾 MongoDB Database                                | Stores users & messages              |
| 👤 Profile Management                              | Update avatar via Cloudinary         |
| 📱 Responsive UI                                   | Fully supported on mobile & desktop  |
| 🌙 Modern UI                                       | Clean and interactive chat interface |
| 🔔 Typing Indicators & Online Users *(if enabled)* | Enhanced chat experience             |

---

## 🧠 Tech Stack

**Frontend**

* React + Context / Redux (state management)
* Axios
* Socket.IO client

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Socket.IO server
* JWT Authentication
* Cloudinary for media storage

---

## 📁 Project Structure

```
/fullstack-chat-application
├── backend/            # Server API (Node.js + Express)
├── frontend/           # Client (React)
└── .gitignore

```

---

## 🔐 Environment Variables

Create a `.env` file inside `backend/`:

```env
# Server Port
PORT=5001

# MongoDB Connection URL
MONGODB_URL=your_mongodb_connection_string_here

# JWT Secret Key
JWT_SECRET=your_jwt_secret_here

# Node Environment
NODE_ENV=development

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/anirudhxmishra/fullstack-chat-application.git
cd fullstack-chat-application
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Run server:

```bash
npm run dev
```

API starts by default on:

```
http://localhost:5001
```

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔌 Real-Time Communication

This app uses Socket.IO to provide:

* Instant message delivery 📩
* Online/offline status 🟢
* Seen messages *(optional)*

---

## 🖼️ Image Upload (Cloudinary)

Profile pictures are uploaded to Cloudinary and optimized for fast delivery.

Backend configuration:

```js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
```

---

## 🤝 Contributing

Contributions are welcome!
Feel free to **fork the repo** and submit a PR with improvements.

---

## 📄 License

This project is **Open Source** under the MIT License.

---

## 👨‍💻 Author

**Anirudh Mishra**
⭐ GitHub: *anirudhxmishra*
🚀 Passionate about fullstack & real-time systems

---

### 🎯 Future Enhancements (Optional)

* Group Chats
* Delete/Edit messages
* Push Notifications
* Themes (Dark/Light)
* Emoji + File sharing
* Message search

---
