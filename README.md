### 📄 Project PDF
[Click here to view the PDF](./Rural_Education_Document.pdf)

## 🚀 How to Run the Project

Follow the steps below to set up and run the **Rural Education System Capstone Project** on your local machine.

---

### 🛠 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Git
- A database (MongoDB / MySQL / etc. depending on your backend configuration)

---

### 📂 Project Structure

```bash
Rural_Education_System_Capstone/
│
├── frontend/     # React (Vite) frontend
└── backend/      # Node.js / Express backend
▶️ Backend Setup & Run
Open a terminal and go to the backend folder:

bash
Copy code
cd backend
Install backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder (if not already present) and add your configuration:

env
Copy code
PORT=5000
DB_URL=your_database_connection_string
JWT_SECRET=your_secret_key
Replace the placeholder values with your actual configuration.

Start the backend server:

bash
Copy code
npm start
or (if you are using nodemon):

bash
Copy code
npm run dev
The backend will run at:

text
Copy code
http://localhost:5000
▶️ Frontend Setup & Run
Open a new terminal and go to the frontend folder:

bash
Copy code
cd frontend
Install frontend dependencies:

bash
Copy code
npm install
If you are using environment variables for API calls, create a .env file in the frontend folder (optional):

env
Copy code
VITE_API_URL=http://localhost:5000
Start the frontend development server:

bash
Copy code
npm run dev
The frontend will run at (by default):

text
Copy code
http://localhost:5173
🔗 Frontend ↔ Backend Connection
Make sure your frontend is pointing to the correct backend URL.

Example (in your frontend API configuration or .env):

env
Copy code
VITE_API_URL=http://localhost:5000
🧪 Basic Flow to Test
Open the frontend URL in your browser.

Register or log in as a user (Student / Teacher / Admin as per the app features).

Perform actions like:

Managing students

Viewing topics

Using exam or puzzle modules

Check if requests are reaching the backend and data is stored/updated in the database.

📦 Build Frontend for Production
To create an optimized production build of the frontend:

bash
Copy code
cd frontend
npm run build
This will generate a dist/ folder which can be deployed to any static hosting service.

⚡ Quick Start (All Commands in Order)
bash
Copy code
# Clone the repository
git clone https://github.com/suhaskumar0204/Rural_Education_System_Capstone.git

cd Rural_Education_System_Capstone

# Backend setup
cd backend
npm install
npm start        # or: npm run dev

# Frontend setup (in a new terminal)
cd ../frontend
npm install
npm run dev
Now open the frontend URL in your browser and start using the application.

bash
Copy code

If you tell me your exact backend stack (MongoDB/MySQL + which port), I can tweak the `.env` lines to be 100% accurate for your project.











ChatGPT can make mistakes. Check important info. See Cookie Preferences.
