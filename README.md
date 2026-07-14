
# StadiumGPT AI — FIFA World Cup 2026
![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-orange?logo=firebase)
![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-6E9F18?logo=vitest)
![GitHub Actions](https://img.shields.io/badge/CI-Passing-brightgreen?logo=githubactions)

The Intelligent AI Companion for FIFA World Cup 2026. A production-quality, full-stack web application for stadium operations, fan navigation, crowd intelligence, emergency response, and AI-powered assistance.

## Project Highlights

- AI-powered stadium assistant for FIFA World Cup 2026
- Real-time crowd intelligence and risk monitoring
- Smart navigation with accessibility support
- Emergency response and evacuation assistance
- Firebase Authentication with Google Sign-In
- Google Gemini AI integration
- Responsive glassmorphism UI
- Automated testing using Vitest
- Continuous Integration with GitHub Actions

## Features

- **AI Assistant** — Chatbot powered by Google Gemini for navigation, translations, football Q&A, food recommendations, and emergency guidance
- **Stadium Navigation** — Interactive stadium map with gates, food courts, washrooms, medical centers, emergency exits, parking, and user seat
- **Crowd Intelligence** — Real-time crowd heatmaps, queue status, congestion alerts, and risk levels with Recharts visualizations
- **Transportation Assistant** — Metro, bus, taxi, rideshare, and walking options with AI-recommended fastest routes
- **Food Assistant** — Restaurant cards with ratings, wait times, veg/non-veg filters, and AI recommendations
- **Accessibility** — Large buttons, voice navigation, wheelchair routes, audio assistance, high-contrast mode, and emergency help
- **Emergency Dashboard** — Fire, medical, security, and lost-child alerts with AI-generated evacuation instructions
- **Volunteer Dashboard** — Task management for navigation requests, emergency calls, lost and found, and translation requests
- **Admin Dashboard** — Analytics for visitors, crowd density, revenue, queue length, security alerts, energy usage, and waste collection
- **Authentication** — Firebase Authentication with Google sign-in and email/password
- **Dark Mode** — Premium dark glassmorphism UI with light mode toggle
- **Responsive** — Fully responsive across mobile, tablet, and desktop

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, Lucide Icons |
| Backend | Next.js API Routes |
| Database | Firebase Firestore |
| Auth | Firebase Authentication (Google + Email/Password) |
| AI | Google Gemini API |
| Charts | Recharts |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stadiumgpt-ai
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment file and add your API keys:
```bash
cp .env.example .env.local
```

4. Add your credentials to `.env.local`:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Google Maps JavaScript API (optional, for maps)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

> **Note:** The app runs immediately after install even without API keys — it uses mock data and fallback AI responses. Add Firebase, Gemini, and Maps keys to enable full functionality.

## API Keys Setup

### Firebase
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication > Sign-in methods > Google and Email/Password
4. Create a Firestore database
5. Project Settings > General > Your apps > Web app — copy the config values

### Google Gemini
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create an API key
3. Add it as `GEMINI_API_KEY` in `.env.local`

### Google Maps (optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API
3. Create an API key
4. Add it as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

## Project Structure

```
app/
├── api/chat/route.ts          # Gemini AI chat endpoint
├── login/page.tsx             # Authentication page
├── dashboard/
│   ├── layout.tsx             # Dashboard shell with sidebar + navbar
│   ├── page.tsx               # Dashboard home
│   ├── ai-assistant/          # AI chatbot
│   ├── navigation/            # Stadium map navigation
│   ├── crowd/                 # Crowd intelligence
│   ├── transport/             # Transportation assistant
│   ├── food/                  # Food assistant
│   ├── accessibility/        # Accessibility features
│   ├── emergency/             # Emergency dashboard
│   ├── volunteer/             # Volunteer dashboard
│   ├── admin/                 # Admin analytics
│   └── settings/              # User settings
├── page.tsx                   # Landing page
├── layout.tsx                 # Root layout
└── globals.css                # Global styles
components/
├── dashboard/                 # Sidebar, navbar, shared cards
├── providers/                 # Theme + Auth context providers
└── ui/                        # shadcn/ui components
firebase/
└── config.ts                  # Firebase initialization
services/
└── gemini.ts                  # Google Gemini AI service
lib/
└── dummy-data.ts              # Simulated stadium data
types/
└── index.ts                   # TypeScript types
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and import the repository
3. Add environment variables in Vercel project settings:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `GEMINI_API_KEY`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (optional)
4. Deploy

## Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
npm run typecheck # TypeScript type checking
```
## Testing

This project includes automated unit and component testing using **Vitest** and **React Testing Library**.

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run coverage
```

The project currently includes **41 automated tests** covering:

- Login page
- Dashboard
- AI Assistant
- Crowd Monitoring
- Emergency Dashboard
- Navigation
- Transportation
- API Routes
- Shared UI Components

## Continuous Integration

GitHub Actions automatically performs:

- Dependency installation
- Type checking
- Test execution
- Build verification

The workflow runs automatically on every push to the repository.

## Future Enhancements

- Live IoT crowd sensor integration
- Indoor GPS navigation
- Multi-language voice assistant
- Offline navigation mode
- Smart parking guidance
- Predictive crowd analytics
- Push notifications for emergencies
  
## License

This project was developed as part of a hackathon/academic project inspired by FIFA World Cup 2026 stadium operations.

It is intended for educational and demonstration purposes.

## Screenshots

### Login

<img width="770" height="974" alt="Screenshot 2026-07-14 223425" src="https://github.com/user-attachments/assets/b4a6ebf1-b65d-4707-a681-4503d9e2a640" />

### Dashboard

<img width="933" height="978" alt="Screenshot 2026-07-14 223457" src="https://github.com/user-attachments/assets/cf5a9c22-280b-4d7d-8524-26e5bfb8a118" />
<img width="931" height="981" alt="Screenshot 2026-07-14 223511" src="https://github.com/user-attachments/assets/9d80b091-91fc-4505-a5f3-e37ced432fca" />
<img width="922" height="968" alt="Screenshot 2026-07-14 223521" src="https://github.com/user-attachments/assets/f17f60cd-47c7-4da1-a5cd-45c58cdea8b1" />

### AI Assistant

<img width="956" height="988" alt="Screenshot 2026-07-14 223539" src="https://github.com/user-attachments/assets/75947f7a-0ee6-4b1f-9d35-e431252fecc0" />

### Crowd Monitoring

<img width="930" height="989" alt="Screenshot 2026-07-14 223558" src="https://github.com/user-attachments/assets/b3f3c437-59fc-42d5-9553-6a1984bccfd0" />
<img width="929" height="976" alt="Screenshot 2026-07-14 223611" src="https://github.com/user-attachments/assets/cd8499c2-06bf-4d97-999d-9d09c70883fe" />
<img width="932" height="996" alt="Screenshot 2026-07-14 223622" src="https://github.com/user-attachments/assets/7bdce174-b78c-49b8-8d7d-53fcbb4e4785" />
