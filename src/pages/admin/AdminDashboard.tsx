import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, MapPin, Shield, Tent, FileText, Activity } from "lucide-react";
import { adminRecentActivity } from "@/data/adminMockData";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Active Flood Alerts", value: "5", icon: AlertTriangle, color: "text-destructive" },
  { label: "Affected Regions", value: "12", icon: MapPin, color: "text-warning" },
  { label: "Active Rescue Ops", value: "8", icon: Shield, color: "text-primary" },
  { label: "Relief Camps", value: "5", icon: Tent, color: "text-success" },
  { label: "User Reports", value: "6", icon: FileText, color: "text-info" },
];

const typeColors: Record<string, string> = {
  alert: "bg-destructive/10 text-destructive",
  report: "bg-warning/10 text-warning",
  rescue: "bg-primary/10 text-primary",
  camp: "bg-success/10 text-success",
  social: "bg-info/10 text-info",
  volunteer: "bg-accent/10 text-accent",
  medical: "bg-secondary text-secondary-foreground",
};

const AdminDashboard = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((s) => (
        <Card key={s.label} className="card-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <s.icon className={`w-5 h-5 ${s.color}`} />
              <span className="text-2xl font-bold text-card-foreground">{s.value}</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">{s.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Activity className="w-4 h-4 text-primary" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {adminRecentActivity.map((a) => (
            <div key={a.id} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
              <Badge variant="outline" className={`${typeColors[a.type]} border-0 text-[10px] uppercase shrink-0 mt-0.5`}>
                {a.type}
              </Badge>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-card-foreground">{a.action}</p>
                <p className="text-xs text-muted-foreground">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AdminDashboard;
