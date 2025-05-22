import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 text-center text-2xl font-bold">Nutritica</header>
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl mb-4">Inflammatory Reset Program</h1>
        <p className="text-lg mb-6 text-center max-w-md">
          Personalized nutrition meets AI guidance. Join our early access.
        </p>
        <form className="w-full max-w-sm flex flex-col">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 mb-3 border border-gray-300 rounded"
          />
          <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Join Now
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;

