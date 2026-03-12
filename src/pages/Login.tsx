import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CREDENTIALS = {
  user: { id: "user123", password: "user123" },
  organization: { id: "admin123", password: "admin123" },
};

const Login = () => {
  const { role } = useParams<{ role: "user" | "organization" }>();
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const isOrg = role === "organization";
  const creds = isOrg ? CREDENTIALS.organization : CREDENTIALS.user;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === creds.id && password === creds.password) {
      login(isOrg ? "organization" : "user");
      navigate(isOrg ? "/admin" : "/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-landing flex items-center justify-center px-4">
      <div className="bg-card rounded-2xl card-shadow p-8 w-full max-w-md animate-fade-in">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-card-foreground">
              {isOrg ? "Organization" : "User"} Login
            </h1>
            <p className="text-sm text-muted-foreground">Access ResQHub Dashboard</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-1.5">
              {isOrg ? "Organization ID" : "User ID"}
            </label>
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder={isOrg ? "Enter Organization ID" : "Enter User ID"}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-1.5">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground font-medium mb-1">Demo Credentials:</p>
          <p className="text-xs text-muted-foreground">
            ID: <span className="font-mono text-foreground">{creds.id}</span> &nbsp;|&nbsp; Password: <span className="font-mono text-foreground">{creds.password}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
