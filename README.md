# 🏆 Auction Web Application - Full Stack  

Welcome to the **Auction Web Application**, a full-stack online auction platform where users can list items, place bids, and manage their accounts. This repository serves as a central hub linking the **frontend** and **backend** repositories.

---

## 📂 Repository Structure  

```
/AuctionWebApplication
│── /backend          # Placeholder for backend setup
│    └── server.js    # Backend entry point (Full code in separate repo)
│── /frontend         # Placeholder for frontend setup
│── README.md         # Documentation
```

🔹 **Full Backend Code:** [Online-Auction-Platform_backend](https://github.com/ab00s1/Online-Auction-Platform_backend)  
🔹 **Full Frontend Code:** [Online-Auction-Platform_frontend](https://github.com/ab00s1/Online-Auction-Platform_frontend)  

---

## 🚀 Features  

### 🟢 **Frontend (React + Vite)**  
✅ **User Authentication** - Sign Up & Sign In with JWT stored in LocalStorage  
✅ **Auction Dashboard** - View all auction items with pagination  
✅ **Post Auction** - Users can add auction items  
✅ **Responsive UI** - Built with **React-Bootstrap**  
✅ **Protected Routes** - Users must be authenticated to post/view auctions  

### 🟢 **Backend (Node.js + Express + MongoDB)**  
✅ **JWT-based Authentication** - Secure login & registration  
✅ **Auction Items Management** - Add, edit, delete, and fetch auction items  
✅ **Bidding System** - Place bids with automatic highest bid tracking  
✅ **MongoDB & Mongoose Integration** - Efficient NoSQL database handling  
✅ **CORS Enabled** - Supports seamless frontend communication  

---

## 🏗 Tech Stack  

### **Frontend:**  
- **React.js (Vite)** - Fast frontend framework  
- **React-Bootstrap** - UI components  
- **React-Router-Dom** - Routing  
- **LocalStorage** - Persist user session  

### **Backend:**  
- **Node.js + Express.js** - Server and API  
- **MongoDB & Mongoose** - NoSQL database  
- **JWT (jsonwebtoken)** - Authentication  
- **bcryptjs** - Password hashing  
- **nodemon** - Development server auto-restart  

---

## ⚡ Installation & Setup  

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/ab00s1/AuctionWebApplication.git
cd AuctionWebApplication
```

### 2️⃣ **Backend Setup**  
Clone the backend repository inside the `backend/` folder:  
```sh
git clone https://github.com/ab00s1/Online-Auction-Platform_backend.git backend
cd backend
npm install
```
- Create a `.env` file with:  
  ```
  MONGO_URI=mongodb://localhost:27017/AuctionPlatform
  JWT_SECRET=your_jwt_secret_key
  ```
- Start the backend server:  
  ```sh
  npm run dev
  ```
  The backend runs on **`http://localhost:5001/`**.

### 3️⃣ **Frontend Setup**  
Clone the frontend repository inside the `frontend/` folder:  
```sh
cd ..
git clone https://github.com/ab00s1/Online-Auction-Platform_frontend.git frontend
cd frontend
npm install
npm run dev
```
The frontend runs on **`http://localhost:5173/`**.

---

## 🔑 API Endpoints  

Refer to the **backend repository** for full API documentation:  
🔹 **[Backend API Documentation](https://github.com/ab00s1/Online-Auction-Platform_backend#-api-endpoints)**  

---

## ⚡ Usage  

1. **Sign Up** for a new account.  
2. **Sign In** to access the dashboard.  
3. **Post Auction Items** with details (only for logged-in users).  
4. **View Auctions** on the Dashboard.  
5. **Place Bids** on auction items.  
6. **Log Out** from the navbar dropdown.  

---

## 🎯 Future Enhancements  

🔹 Real-time bidding using WebSockets  
🔹 Image uploads for auction items  
🔹 Email notifications for bid updates  

---

## 🛠 Troubleshooting  

- Ensure **MongoDB** is running locally.  
- If backend fails to start, check the `.env` file for `MONGO_URI`.  
- If CORS issues occur, ensure backend allows `http://localhost:5173`.  

---

### 🚀 **Happy Bidding!** 🏆  
