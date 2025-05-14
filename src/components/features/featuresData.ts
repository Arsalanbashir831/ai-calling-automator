
import { ReactNode } from "react";
import { Upload, Calendar, PhoneCall, BarChart2, Activity, MessageSquare } from "lucide-react";
import { AnimationType } from "./FeatureCard";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  iconBg: string;
  animation: AnimationType;
}

export const features: Feature[] = [
  {
    title: "Upload Your Lead Lists",
    description: "Easily import your lead generation files in CSV format and let our AI do the rest. No complex setup required.",
    icon: <Upload className="h-10 w-10 text-blue-400" />,
    gradient: "from-blue-500/10 via-indigo-400/10 to-purple-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    animation: "slide-in-left"
  },
  {
    title: "Smart Call Scheduling",
    description: "Set up automated calling schedules for outbound and inbound calls based on time zones and optimal contact windows.",
    icon: <Calendar className="h-10 w-10 text-indigo-400" />,
    gradient: "from-indigo-500/10 via-purple-400/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    animation: "slide-in-right"
  },
  {
    title: "AI Powered Calling",
    description: "Our intelligent AI automatically calls leads, engages in natural conversations, and qualifies prospects in real-time.",
    icon: <PhoneCall className="h-10 w-10 text-purple-400" />,
    gradient: "from-purple-500/10 via-pink-400/10 to-red-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
    animation: "slide-in-left"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard with real-time metrics, conversion rates, and actionable insights to optimize campaigns.",
    icon: <BarChart2 className="h-10 w-10 text-pink-400" />,
    gradient: "from-pink-500/10 via-red-400/10 to-orange-500/10", 
    iconBg: "bg-gradient-to-br from-pink-500 to-red-600",
    animation: "slide-in-right"
  },
  {
    title: "Engagement Tracking",
    description: "Track lead engagement and sentiment analysis across all conversations with detailed reporting and feedback.",
    icon: <Activity className="h-10 w-10 text-red-400" />,
    gradient: "from-blue-500/10 via-cyan-400/10 to-teal-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    animation: "slide-in-left"
  },
  {
    title: "Conversation Intelligence",
    description: "AI analyzes conversations to extract insights, identify patterns, and continuously improve communication effectiveness.",
    icon: <MessageSquare className="h-10 w-10 text-cyan-400" />,
    gradient: "from-cyan-500/10 via-teal-400/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
    animation: "slide-in-right"
  },
];
