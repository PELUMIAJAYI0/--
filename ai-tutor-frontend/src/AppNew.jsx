import { useState } from 'react'
import ChatInterface from './components/ChatInterface'
import './styles/index.css'

function App() {
  return (
    <div className="chat-container">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-primary">AI Tutor</h1>
        <p className="text-gray-600">Your personalized learning assistant</p>
      </header>
      <ChatInterface />
    </div>
  )
}

export default App