import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuthStore } from "@/store/authStore";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import AlertAreas from "./pages/AlertAreas";
import WeatherMonitoring from "./pages/WeatherMonitoring";
import ReliefCamps from "./pages/ReliefCamps";
import MedicalSupport from "./pages/MedicalSupport";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminFloodAlerts from "./pages/admin/AdminFloodAlerts";
import AdminMapControl from "./pages/admin/AdminMapControl";
import AdminSocialMedia from "./pages/admin/AdminSocialMedia";
import AdminReliefCamps from "./pages/admin/AdminReliefCamps";
import AdminMedicalResources from "./pages/admin/AdminMedicalResources";
import AdminUserReports from "./pages/admin/AdminUserReports";
import AdminVolunteers from "./pages/admin/AdminVolunteers";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminUserManagement from "./pages/admin/AdminUserManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: "user" | "organization" }) => {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const role = useAuthStore((s) => s.role);
  if (!isLoggedIn) return <Navigate to="/" replace />;
  if (requiredRole && role !== requiredRole) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login/:role" element={<Login />} />

          {/* User Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="user">
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="alerts" element={<AlertAreas />} />
            <Route path="weather" element={<WeatherMonitoring />} />
            <Route path="relief" element={<ReliefCamps />} />
            <Route path="medical" element={<MedicalSupport />} />
          </Route>

          {/* Admin Panel */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="organization">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="flood-alerts" element={<AdminFloodAlerts />} />
            <Route path="map-control" element={<AdminMapControl />} />
            <Route path="social-media" element={<AdminSocialMedia />} />
            <Route path="relief-camps" element={<AdminReliefCamps />} />
            <Route path="medical-resources" element={<AdminMedicalResources />} />
            <Route path="user-reports" element={<AdminUserReports />} />
            <Route path="volunteers" element={<AdminVolunteers />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="user-management" element={<AdminUserManagement />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
