import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function ChatInput({ onSend, disabled }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSend(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask your question..."
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="p-3 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
      >
        <FiSend className="w-5 h-5" />
      </button>
    </form>
  )
}