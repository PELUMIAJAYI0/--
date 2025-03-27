import { useState } from 'react'
import Message from './Message'
import ChatInput from './ChatInput'
import { sendMessageToAI } from '../services/api'

export default function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (text) => {
    const userMessage = { text, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const aiResponse = await sendMessageToAI(text)
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I encountered an error. Please try again.", 
        sender: 'ai' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="message-ai">
              <div className="loading-spinner" />
            </div>
          </div>
        )}
      </div>
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  )
}