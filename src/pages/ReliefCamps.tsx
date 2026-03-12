import { useState } from "react";
import { mockReliefCamps } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

const ReliefCamps = () => {
  const [selected, setSelected] = useState<typeof mockReliefCamps[0] | null>(null);

  return (
    <div className="animate-fade-in">
      <div className="bg-card rounded-xl card-shadow">
        <div className="p-4 border-b border-border">
          <h2 className="font-semibold text-card-foreground">Relief Camps</h2>
          <p className="text-sm text-muted-foreground">Active disaster relief camps and shelters</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {["Camp Name", "Location", "Capacity", "Contact", "Action"].map((h) => (
                  <th key={h} className="text-left p-3 text-muted-foreground font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockReliefCamps.map((c) => (
                <tr key={c.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="p-3 font-medium text-card-foreground">{c.name}</td>
                  <td className="p-3 text-muted-foreground">{c.location}</td>
                  <td className="p-3 text-muted-foreground">{c.capacity}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{c.contact}</td>
                  <td className="p-3">
                    <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => setSelected(c)}>
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
            <div><span className="text-muted-foreground">Location:</span> <span className="font-medium">{selected?.location}</span></div>
            <div><span className="text-muted-foreground">Capacity:</span> <span className="font-medium">{selected?.capacity}</span></div>
            <div><span className="text-muted-foreground">Contact:</span> <span className="font-mono font-medium">{selected?.contact}</span></div>
            <div><span className="text-muted-foreground">Address:</span> <span className="font-medium">{selected?.address}</span></div>
            <div><span className="text-muted-foreground">Facilities:</span> <span className="font-medium">{selected?.details}</span></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReliefCamps;
