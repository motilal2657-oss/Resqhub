import { useNavigate } from "react-router-dom";
import { User, Building2 } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-landing flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-landing-foreground/20 flex items-center justify-center">
            <span className="text-landing-foreground font-bold text-lg">R</span>
          </div>
          <h1 className="text-2xl font-bold text-landing-foreground tracking-tight">ResQHub</h1>
        </div>
      </header>

      {/* Center Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-landing-foreground mb-3 text-center">
          Disaster Monitoring & Coordination
        </h2>
        <p className="text-landing-foreground/70 mb-12 text-center max-w-md">
          Select your role to access the emergency dashboard
        </p>

        <div className="flex flex-col sm:flex-row gap-8">
          {/* User Card */}
          <button
            onClick={() => navigate("/login/user")}
            className="group bg-card rounded-2xl p-8 w-64 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center gap-5"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <User className="w-12 h-12 text-primary" />
            </div>
            <span className="text-lg font-semibold text-card-foreground">User</span>
          </button>

          {/* Organization Card */}
          <button
            onClick={() => navigate("/login/organization")}
            className="group bg-card rounded-2xl p-8 w-64 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col items-center gap-5"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Building2 className="w-12 h-12 text-primary" />
            </div>
            <span className="text-lg font-semibold text-card-foreground">Organization</span>
          </button>
        </div>
      </main>

      <footer className="p-6 text-center text-landing-foreground/50 text-sm">
        © 2026 ResQHub — National Disaster Monitoring System
      </footer>
    </div>
  );
};

export default Landing;
