import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { adminMapRegions } from "@/data/adminMockData";
import { Map } from "lucide-react";
import { toast } from "sonner";

const riskColors: Record<string, string> = {
  Critical: "bg-destructive text-destructive-foreground",
  High: "bg-warning text-warning-foreground",
  Moderate: "bg-yellow-500 text-white",
  Low: "bg-success text-success-foreground",
};

const AdminMapControl = () => {
  const [regions, setRegions] = useState(adminMapRegions);

  const updateRisk = (id: number, level: string) => {
    setRegions(regions.map(r => r.id === id ? { ...r, riskLevel: level } : r));
    toast.success(`Risk level updated to ${level}`);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
        <Map className="w-5 h-5 text-primary" /> Map Control — Flood Risk Levels
      </h2>
      <Card className="card-shadow">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State</TableHead><TableHead>District</TableHead><TableHead>Current Risk</TableHead><TableHead>Change Risk</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {regions.map(r => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.state}</TableCell>
                  <TableCell>{r.district}</TableCell>
                  <TableCell><Badge className={riskColors[r.riskLevel] || ""}>{r.riskLevel}</Badge></TableCell>
                  <TableCell>
                    <Select value={r.riskLevel} onValueChange={v => updateRisk(r.id, v)}>
                      <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Critical","High","Moderate","Low"].map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMapControl;
