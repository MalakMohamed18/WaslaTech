import {
  LayoutDashboard,
  Package,
  Layers,
  Cpu,
  FileText,
  Images,
  Handshake,
  Users,
  MessageSquare,
  Mail,
  BarChart3,
  Shield,
  ScrollText,
  User,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard",
    shortcut: "⌘D",
    icon: LayoutDashboard,
  },

  {
    id: "products",
    title: "Products",
    href: "/dashboard/products",
    shortcut: "⌘P",
    icon: Package,
  },

  {
    id: "categories",
    title: "Categories",
    href: "/dashboard/categories",
    shortcut: "⌘C",
    icon: Layers,
  },

  {
    id: "technologies",
    title: "Technologies",
    href: "/dashboard/technologies",
    shortcut: "⌘T",
    icon: Cpu,
  },

  {
    id: "articles",
    title: "Articles",
    href: "/dashboard/articles",
    shortcut: "⌘A",
    icon: FileText,
  },

  {
    id: "media",
    title: "Media Library",
    href: "/dashboard/media",
    shortcut: "⌘M",
    icon: Images,
  },

  {
    id: "partners",
    title: "Partners",
    href: "/dashboard/partners",
    shortcut: "⌘R",
    icon: Handshake,
  },

  {
    id: "team",
    title: "Team Members",
    href: "/dashboard/team",
    shortcut: "⌘U",
    icon: Users,
  },

  {
    id: "messages",
    title: "Messages",
    href: "/dashboard/messages",
    shortcut: "⌘E",
    icon: MessageSquare,
  },

  {
    id: "newsletter",
    title: "Newsletter",
    href: "/dashboard/newsletter",
    shortcut: "⌘N",
    icon: Mail,
  },

  {
    id: "statistics",
    title: "Statistics",
    href: "/dashboard/statistics",
    shortcut: "⌘B",
    icon: BarChart3,
  },

  {
    id: "users",
    title: "Users",
    href: "/dashboard/users",
    shortcut: "⌘Y",
    icon: Users,
  },

  {
    id: "roles",
    title: "Roles",
    href: "/dashboard/roles",
    shortcut: "⌘O",
    icon: Shield,
  },

  {
    id: "logs",
    title: "Activity Logs",
    href: "/dashboard/logs",
    shortcut: "⌘L",
    icon: ScrollText,
  },

  {
    id: "profile",
    title: "Profile",
    href: "/dashboard/profile",
    shortcut: "⌘F",
    icon: User,
  },
];