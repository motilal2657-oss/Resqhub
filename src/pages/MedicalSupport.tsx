import { useState } from "react";
import { mockHospitals } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

const MedicalSupport = () => {
  const [selected, setSelected] = useState<typeof mockHospitals[0] | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="bg-card rounded-xl card-shadow">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-card-foreground">Medical Support</h2>
          <p className="text-sm text-muted-foreground">Nearby hospitals and emergency medical facilities</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {["Hospital", "Distance", "Contact", "Beds", "Action"].map((h) => (
                  <th key={h} className="text-left p-3 text-muted-foreground font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockHospitals.map((h) => (
                <tr key={h.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-card-foreground">{h.name}</td>
                  <td className="p-3 text-muted-foreground">{h.distance}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{h.contact}</td>
                  <td className="p-3"><Badge className="bg-success text-success-foreground">{h.beds}</Badge></td>
                  <td className="p-3">
                    <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => setSelected(h)}>
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
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div><span className="text-muted-foreground">Distance:</span> <span className="font-medium">{selected?.distance}</span></div>
            <div><span className="text-muted-foreground">Emergency Contact:</span> <span className="font-mono font-medium">{selected?.contact}</span></div>
            <div><span className="text-muted-foreground">Bed Availability:</span> <Badge className="bg-success text-success-foreground">{selected?.beds}</Badge></div>
            <div><span className="text-muted-foreground">Address:</span> <span className="font-medium">{selected?.address}</span></div>
            <div><span className="text-muted-foreground">Speciality:</span> <span className="font-medium">{selected?.speciality}</span></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MedicalSupport;
