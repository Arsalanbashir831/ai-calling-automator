
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Send } from "lucide-react";

// Sample data for messages
const conversations = [
  {
    id: "1",
    contact: "John Smith",
    lastMessage: "Thanks for the call. I'd like to schedule a meeting.",
    time: "10:30 AM",
    unread: true,
    avatar: "JS",
  },
  {
    id: "2",
    contact: "Lisa Johnson",
    lastMessage: "Could you send me more information about your services?",
    time: "Yesterday",
    unread: false,
    avatar: "LJ",
  },
  {
    id: "3",
    contact: "Michael Brown",
    lastMessage: "I've reviewed the proposal and I have a few questions.",
    time: "Yesterday",
    unread: false,
    avatar: "MB",
  },
  {
    id: "4",
    contact: "Sarah Wilson",
    lastMessage: "Looking forward to our call next week.",
    time: "Monday",
    unread: false,
    avatar: "SW",
  },
];

const messages = [
  {
    id: "1",
    sender: "you",
    content: "Hello John, I hope you're doing well. I wanted to follow up on our AI call from yesterday.",
    time: "10:15 AM",
  },
  {
    id: "2",
    sender: "contact",
    content: "Hi there! Yes, that was interesting. I've been thinking about the proposal you mentioned.",
    time: "10:20 AM",
  },
  {
    id: "3",
    sender: "you",
    content: "Great! I'd be happy to provide more details. Would you like to schedule a follow-up call or meeting?",
    time: "10:25 AM",
  },
  {
    id: "4",
    sender: "contact",
    content: "Thanks for the call. I'd like to schedule a meeting. How does next Tuesday at 2pm sound?",
    time: "10:30 AM",
  },
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState("1");
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((conversation) =>
    conversation.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // Here you would typically send the message to your backend
      // For now, just clear the input
      setMessageInput("");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">
          Chat with your leads and contacts
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search conversations..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation.id)}
                  className={`p-3 rounded-lg cursor-pointer ${
                    activeConversation === conversation.id
                      ? "bg-primary/10"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-medium">
                      {conversation.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <div className="font-medium truncate">
                          {conversation.contact}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {conversation.time}
                        </div>
                      </div>
                      <div className="text-sm truncate text-muted-foreground flex items-center gap-1">
                        {conversation.unread && (
                          <span className="h-2 w-2 rounded-full bg-primary inline-block mr-1"></span>
                        )}
                        {conversation.lastMessage}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col h-[calc(100vh-240px)]">
          <CardHeader className="pb-2 border-b">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center font-medium">
                {filteredConversations.find(c => c.id === activeConversation)?.avatar || "JS"}
              </div>
              <CardTitle className="text-lg">
                {filteredConversations.find(c => c.id === activeConversation)?.contact || "John Smith"}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "you" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "you"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div>{message.content}</div>
                    <div
                      className={`text-xs mt-1 ${
                        message.sender === "you"
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-4 border-t mt-auto">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
