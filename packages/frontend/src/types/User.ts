export interface User {
  webSocketConnectionId: string;
  userId: string;
  email: string;
  name: string;
  profilePicture?: string;
  role: string;
  department: string;
  onlineStatus: boolean;
  lastSeen?: number;
  unreadMessageCount: number;
  conversations: string[];
}
