import { Message } from "../../types/Message";

interface MessageListProps {
  receivedMessages: Message[];
  currentUser: string;
}

const MessageList = ({ receivedMessages, currentUser }: MessageListProps) => {
  const sortedMessages = [...receivedMessages].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        height: "200px",
        overflowY: "auto",
      }}
    >
      {sortedMessages.length > 0 ? (
        sortedMessages.map((msg, index) => (
          <p
            key={index}
            style={{
              margin: 0,
              textAlign: msg.userId == currentUser ? "right" : "left",
              backgroundColor:
                msg.userId == currentUser ? "#daf8e3" : "#f1f1f1",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {msg.userId}: {msg.content}
          </p>
        ))
      ) : (
        <p>No messages received yet.</p>
      )}
    </div>
  );
};

export default MessageList;
