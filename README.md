# Next.js Authentication Dashboard

A modern, responsive authentication system built with Next.js, TypeScript, and SCSS Modules.

## 🚀 Features

- 🔐 **Phone Authentication** - Iranian phone number validation
- 👤 **User Management** - Fetch and display user data from RandomUser API
- 💾 **Local Storage** - Persistent user sessions
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Modern UI** - Clean design with Inter font and gradient effects
- ⚡ **Fast & Lightweight** - Minimal dependencies, maximum performance
- 🎉 **Welcome Animation** - Beautiful welcome message on login

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules with CSS Nesting
- **State Management:** React Context API
- **Font:** Inter (Google Fonts)
- **API:** RandomUser.me for demo data

## 📦 Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/sadeghnsr/nextjs-auth-dashboard.git
   cd nextjs-auth-dashboard
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂 Project Structure

\`\`\`
├── app/
│   ├── auth/                 # Authentication page
│   │   ├── page.tsx
│   │   └── auth.module.scss
│   ├── dashboard/            # Dashboard page
│   │   ├── page.tsx
│   │   └── dashboard.module.scss
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page (redirects)
│   └── globals.scss          # Global styles
├── components/
│   ├── Button/               # Reusable button component
│   │   ├── Button.tsx
│   │   └── Button.module.scss
│   └── Input/                # Reusable input component
│       ├── Input.tsx
│       └── Input.module.scss
├── contexts/
│   └── AuthContext.tsx       # Authentication context
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## 🎯 Routes

- **`/`** - Home page (auto-redirects based on auth status)
- **`/auth`** - Login page with phone validation
- **`/dashboard`** - Protected dashboard page

## 🔧 Components

### Custom Components
- **Button** - Reusable button with loading states and variants
- **Input** - Form input with validation and error handling

### Features
- **Phone Validation** - Iranian phone number format validation
- **Welcome Animation** - 3-second welcome overlay on successful login
- **Responsive Design** - Mobile-first approach with breakpoints
- **Error Handling** - User-friendly error messages
- **Loading States** - Smooth loading indicators

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Screenshots

### Login Page
- Clean, modern login form
- Iranian phone number validation
- Responsive design

### Dashboard
- Welcome animation on first load
- User information display
- Logout functionality

## 🔒 Security Features

- Client-side form validation
- Protected routes with authentication checks
- Secure logout with data cleanup
- Input sanitization

## 🎨 Design Features

- **Inter Font** - Modern, readable typography
- **Gradient Effects** - Beautiful color transitions
- **Smooth Animations** - CSS transitions and keyframes
- **Card-based Layout** - Clean, organized content
- **Mobile-first** - Responsive breakpoints


**Note:** This project uses the RandomUser.me API for demo purposes. In a production environment, you would integrate with your actual authentication system.
