export interface Task {
  id: number;
  text: string;
  completed: boolean;
  dueDate: string;
}

export interface Chat {
  id: number;
  person: string;
  messages: Message[];
}

//ID is optional bc mock data does not have ir
export interface Message {
  id?: number;
  content: string;
  time: string;
  sender: string;
}

export interface File {
  id: number;
  name: string;
  person: string;
  date: string;
  type: string;
}
