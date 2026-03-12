import { useState } from "react";
import { mockAlertAreas } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

const AlertAreas = () => {
  const [selected, setSelected] = useState<typeof mockAlertAreas[0] | null>(null);

  const levelColor = (level: string) => {
    if (level === "Critical") return "bg-destructive text-destructive-foreground";
    if (level === "High") return "bg-warning text-warning-foreground";
    if (level === "Moderate") return "bg-info text-info-foreground";
    return "bg-success text-success-foreground";
  };

  return (
    <div className="animate-fade-in">
      <div className="bg-card rounded-xl card-shadow">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-card-foreground">Flood Alert Areas</h2>
          <p className="text-sm text-muted-foreground">Areas currently under flood alerts across India</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {["State", "District", "Alert Level", "Rainfall", "Status", "Action"].map((h) => (
                  <th key={h} className="text-left p-3 text-muted-foreground font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockAlertAreas.map((a) => (
                <tr key={a.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-card-foreground">{a.state}</td>
                  <td className="p-3 text-card-foreground">{a.district}</td>
                  <td className="p-3"><Badge className={levelColor(a.alertLevel)}>{a.alertLevel}</Badge></td>
                  <td className="p-3 text-muted-foreground">{a.rainfall}</td>
                  <td className="p-3"><Badge variant="outline">{a.status}</Badge></td>
                  <td className="p-3">
                    <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => setSelected(a)}>
                      <Eye className="w-3 h-3 mr-1" />Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selected?.district}, {selected?.state}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div><span className="text-muted-foreground">Alert Level:</span> <Badge className={levelColor(selected?.alertLevel || "")}>{selected?.alertLevel}</Badge></div>
            <div><span className="text-muted-foreground">Rainfall:</span> <span className="font-medium">{selected?.rainfall}</span></div>
            <div><span className="text-muted-foreground">Status:</span> <span className="font-medium">{selected?.status}</span></div>
            <div><span className="text-muted-foreground">Evacuation:</span> <span className="font-medium">In progress for low-lying areas</span></div>
            <div><span className="text-muted-foreground">Relief Teams:</span> <span className="font-medium">NDRF deployed</span></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlertAreas;
