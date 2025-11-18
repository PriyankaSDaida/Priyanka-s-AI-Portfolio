# Priyanka's AI Portfolio

A modern, interactive developer portfolio website featuring a **Gemini-powered AI assistant**. This application showcases professional skills, projects, and experience while allowing visitors to chat with an AI that simulates the portfolio owner to answer questions about their background.

**Live Repository:** [https://github.com/PriyankaSDaida/PriyankaSDaida](https://github.com/PriyankaSDaida/PriyankaSDaida)

## 🚀 Features

- **AI Chat Widget:** Powered by Google's Gemini 2.5 Flash model. It acts as a virtual assistant, answering questions based on the specific resume context provided in the application.
- **Responsive Design:** Fully responsive layout built with Tailwind CSS, supporting mobile, tablet, and desktop views.
- **Data Visualization:** Interactive radar chart for visualizing technical skills using Recharts.
- **Modern UI/UX:** Dark mode aesthetic with glassmorphism effects, smooth scrolling, and animations.
- **Project Showcase:** Grid layout displaying featured projects with GitHub and live demo links.

## 🛠️ Tech Stack

- **Frontend Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI Integration:** Google GenAI SDK (`@google/genai`)
- **Icons:** Lucide React
- **Charts:** Recharts

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/PriyankaSDaida/PriyankaSDaida.git
   cd PriyankaSDaida
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   To use the AI Chat features, you need a valid Google Gemini API Key.
   
   Create a `.env` file in the root directory:
   ```env
   API_KEY=your_actual_gemini_api_key_here
   ```
   
   > **Note:** You can get an API key from [Google AI Studio](https://aistudio.google.com/).

4. **Run the Development Server**
   ```bash
   npm start
   # or
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

- **`/src`** (Root in this setup)
  - **`components/`**: Reusable UI components (Navbar, Hero, Skills, etc.).
  - **`services/`**: API integration logic (Gemini Service).
  - **`constants.ts`**: Configuration data, resume context, and project lists.
  - **`types.ts`**: TypeScript interfaces and type definitions.
  - **`App.tsx`**: Main application layout.

## 🤖 AI Configuration

The AI's personality and knowledge base are defined in `constants.ts` under the `RESUME_CONTEXT` variable. You can update this string to change what the AI knows about your professional background.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
