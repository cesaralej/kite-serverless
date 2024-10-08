interface MessageInputProps {
  customMessage: string;
  setCustomMessage: (message: string) => void;
  handleSendMessage: () => void;
}

const MessageInput = ({
  customMessage,
  setCustomMessage,
  handleSendMessage,
}: MessageInputProps) => (
  <div>
    <input
      type="text"
      value={customMessage}
      onChange={(e) => setCustomMessage(e.target.value)}
      placeholder="Enter your message"
      style={{ marginRight: "10px" }}
    />
    <button onClick={handleSendMessage}>Send Message</button>
  </div>
);

export default MessageInput;
