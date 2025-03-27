export default function Message({ text, sender }) {
  return (
    <div className={`message-${sender} flex items-end gap-2`}>
      <div className={`rounded-full w-8 h-8 flex items-center justify-center ${
        sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
      }`}>
        {sender === 'user' ? 'U' : 'AI'}
      </div>
      <div className="flex-1">
        <div className={`p-3 rounded-lg ${
          sender === 'user' 
            ? 'bg-blue-100 text-blue-900' 
            : 'bg-gray-100 text-gray-900'
        }`}>
          {text}
        </div>
      </div>
    </div>
  )
}