# 🚀 AI Sales Intelligence SaaS

An AI-powered SaaS platform that analyzes sales call recordings using Whisper AI and GPT-based intelligence.

Built with **Next.js, FastAPI, Whisper AI, OpenAI, Tailwind CSS, and React**.

---

## ✨ Features

✅ Upload cold call recordings  
✅ AI speech-to-text transcription using Whisper  
✅ GPT-powered sales analysis  
✅ Customer intent detection  
✅ Objection analysis  
✅ Buying signal identification  
✅ Conversion probability estimation  
✅ Modern SaaS UI  
✅ Full-stack architecture  
✅ REST API integration  

---

# 🖼️ Project Preview

## Landing Dashboard

<img width="100%" alt="AI Sales Dashboard" src="https://placehold.co/1200x650/0f172a/ffffff?text=AI+Sales+Intelligence+Dashboard">

---

# 🏗️ Tech Stack

## Frontend
- Next.js 16
- React
- Tailwind CSS
- Axios
- TypeScript

## Backend
- FastAPI
- Python
- Whisper AI
- OpenAI API
- Uvicorn

---

# 📂 Project Structure

```bash
AI-Sales-Intelligence/
│
├── frontend/               # Next.js frontend
│   ├── app/
│   ├── components/
│   └── package.json
│
├── backend/                # FastAPI backend
│   ├── services/
│   ├── uploads/
│   ├── main.py
│   └── requirements.txt
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

---

# 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# ⚡ Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

OR

```bash
pip install fastapi uvicorn openai python-dotenv faster-whisper python-multipart
```

---

## Start Backend Server

```bash
python -m uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# 🔑 Environment Variables

Create a `.env` file inside `backend/`

```env
OPENAI_API_KEY=your_openai_api_key
```

---

# 🧠 AI Pipeline

```text
Audio Upload
      ↓
Whisper AI Transcription
      ↓
GPT Analysis
      ↓
Customer Intent Detection
      ↓
Sentiment Analysis
      ↓
Sales Intelligence Insights
```

---

# 📊 Planned Improvements

- [ ] Authentication System
- [ ] Database Integration
- [ ] Real-Time Processing
- [ ] Dashboard Analytics
- [ ] Team Collaboration
- [ ] Deployment on Vercel & Render
- [ ] CRM Integrations
- [ ] Stripe Subscription System

---

# 🌟 Why This Project Matters

This project demonstrates:

- Full-stack AI application development
- API integration
- Audio processing
- Modern SaaS architecture
- AI workflow orchestration
- Frontend ↔ Backend communication
- Production-style debugging

---

# 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

---

# 👨‍💻 Author

**Divyam Khandelwal**

- GitHub: https://github.com/DivyamKhandelwal
- LinkedIn: https://www.linkedin.com/in/divyam-khandelwal/

---

# ⭐ Support

If you liked this project, give it a ⭐ on GitHub!
