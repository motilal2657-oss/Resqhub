import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import {
  LayoutDashboard, AlertTriangle, Map, MessageSquare, Tent, Heart,
  FileText, Users, BarChart3, Bell, UserCog, LogOut, Phone, Menu, User, Shield
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { label: "Flood Alerts", icon: AlertTriangle, path: "/admin/flood-alerts" },
  { label: "Map Control", icon: Map, path: "/admin/map-control" },
  { label: "Social Media Monitor", icon: MessageSquare, path: "/admin/social-media" },
  { label: "Relief Camps", icon: Tent, path: "/admin/relief-camps" },
  { label: "Medical Resources", icon: Heart, path: "/admin/medical-resources" },
  { label: "User Reports", icon: FileText, path: "/admin/user-reports" },
  { label: "Volunteers", icon: Users, path: "/admin/volunteers" },
  { label: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { label: "Notifications", icon: Bell, path: "/admin/notifications" },
  { label: "User Management", icon: UserCog, path: "/admin/user-management" },
];

const helplines = [
  { label: "Disaster Helpline", number: "1078" },
  { label: "Ambulance", number: "108" },
  { label: "Fire Dept", number: "101" },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useAuthStore((s) => s.logout);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentPage = navItems.find((n) => n.path === location.pathname)?.label || "Admin Dashboard";
  const now = new Date();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const SidebarContent = () => (
    <>
      <div className="p-5 border-b border-sidebar-muted/30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sidebar-fg/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-sidebar-fg" />
          </div>
          <div>
            <span className="text-lg font-bold text-sidebar-fg block leading-tight">ResQHub</span>
            <span className="text-[10px] uppercase tracking-widest text-sidebar-fg/50 font-semibold">Admin Panel</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => { navigate(item.path); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-sidebar-accent-bg text-sidebar-fg"
                  : "text-sidebar-fg/60 hover:text-sidebar-fg hover:bg-sidebar-muted/20"
              }`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-muted/30">
        <p className="text-xs font-semibold text-sidebar-fg/40 uppercase tracking-wider mb-2">Emergency</p>
        {helplines.map((h) => (
          <div key={h.number} className="flex items-center gap-2 text-xs text-sidebar-fg/60 py-1">
            <Phone className="w-3 h-3" />
            <span>{h.label}:</span>
            <span className="font-mono font-semibold text-sidebar-fg">{h.number}</span>
          </div>
        ))}
      </div>

      <div className="p-3">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="hidden md:flex w-60 flex-col bg-sidebar-bg fixed inset-y-0 left-0 z-30">
        <SidebarContent />
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-60 bg-sidebar-bg flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}

      <div className="flex-1 md:ml-60 flex flex-col">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 md:px-6 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5 text-muted-foreground" />
            </button>
            <h1 className="text-lg font-semibold text-card-foreground">{currentPage}</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} — {now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
            </span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
