# 🌍 Full-Stack Travel Platform

A modern and responsive **Travel Platform** built with **MERN stack (MongoDB, Express, React, Node.js)**. This platform allows users to explore curated travel destinations and packages with beautiful visuals and a smooth UI.

---

## 🚀 Features

* 🔎 Browse stunning travel destinations and packages
* 📋 Dynamic data fetching using a REST API
* 🧩 Modular frontend components with React
* ⚙️ Backend built with Express and Mongoose
* 🌐 MongoDB integration for real-time data storage
* 📦 Environment-based configuration for secure deployment

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or later)
* [npm](https://www.npmjs.com/) (comes with Node.js)
* [MongoDB](https://www.mongodb.com/) (local or Atlas)

---

## 📁 Project Structure

```
.
├── backend/
│   ├── data/               # Sample destination and package data
│   ├── models/             # Mongoose models
│   ├── utils/              # DB connection & data initializer
│   ├── .env                # Backend environment variables
│   └── index.js            # Express server entry point
├── frontend/
│   ├── src/                # React components and API logic
│   ├── public/             # Static assets
│   ├── .env                # Frontend environment variables
│   └── vite.config.js      # Vite configuration
└── README.md
```

---

## 🛠️ Backend Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/travel-platform.git
cd travel-platform/backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/travelDB
```

> Replace the URI with your MongoDB connection string if using Atlas.

4. **Start the backend server**

```bash
npm start
```

Backend will run at: `http://localhost:5000`

---

## 💻 Frontend Setup

1. **Navigate to the frontend folder**

```bash
cd ../frontend
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
VITE_API_BASE_URL=http://localhost:5000
```

4. **Start the frontend server**

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 🌐 Usage

1. Open your browser.
2. Navigate to: [http://localhost:5173](http://localhost:5173)
3. Explore destinations, packages, and enjoy the responsive interface.

---

## 🧯 Troubleshooting

* **MongoDB Connection Errors**: Ensure MongoDB is running locally or check your Atlas connection string.
* **CORS Issues**: Confirm the API base URL in the frontend `.env` file matches the backend server.
* **Port Conflicts**: Make sure no other services are running on ports `5000` (backend) or `5173` (frontend).
* **Changes not reflecting?** Try restarting both frontend and backend servers.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to contribute, suggest features, or report issues! Happy coding ✈️✨

---

Let me know if you’d like a version that includes deployment (e.g., to Vercel and Render), or contribution guidelines too.
