import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { adminUserReports } from "@/data/adminMockData";
import { FileText } from "lucide-react";
import { toast } from "sonner";

const statusColors: Record<string, string> = {
  Pending: "bg-warning/10 text-warning border-warning/30",
  Verified: "bg-info/10 text-info border-info/30",
  "Rescue Assigned": "bg-primary/10 text-primary border-primary/30",
  Resolved: "bg-success/10 text-success border-success/30",
};

const AdminUserReports = () => {
  const [reports, setReports] = useState(adminUserReports);

  const updateStatus = (id: string, status: string) => {
    setReports(reports.map(r => r.id === id ? { ...r, status } : r));
    toast.success(`Report ${id} → ${status}`);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> User Reports</h2>
      <Card className="card-shadow">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report ID</TableHead><TableHead>Type</TableHead><TableHead>Location</TableHead><TableHead>Description</TableHead><TableHead>Time</TableHead><TableHead>Status</TableHead><TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map(r => (
                <TableRow key={r.id}>
                  <TableCell className="font-mono text-xs font-medium">{r.id}</TableCell>
                  <TableCell><Badge variant="outline">{r.type}</Badge></TableCell>
                  <TableCell>{r.location}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{r.description}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{r.time}</TableCell>
                  <TableCell><Badge variant="outline" className={statusColors[r.status] || ""}>{r.status}</Badge></TableCell>
                  <TableCell>
                    <Select value={r.status} onValueChange={v => updateStatus(r.id, v)}>
                      <SelectTrigger className="w-36 h-8 text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["Pending","Verified","Rescue Assigned","Resolved"].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
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

export default AdminUserReports;
