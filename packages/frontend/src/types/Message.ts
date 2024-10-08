export interface Message {
  userId: string;
  toUserId: string;
  content: string;
  createdAt: string;
  messageId: string;
  connectionId: string;
  toConnectionId: string;
}
