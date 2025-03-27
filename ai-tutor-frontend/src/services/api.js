import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000' // Update with your FastAPI URL

export const sendMessageToAI = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ask`, {
      question: message
    })
    return response.data.response
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Mock version for testing if backend isn't ready
export const mockSendMessageToAI = async (message) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`This is a mock response to: "${message}". The actual API will connect to your FastAPI backend.`)
    }, 1000)
  })
}