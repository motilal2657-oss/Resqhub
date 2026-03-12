import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { adminFloodAlerts } from "@/data/adminMockData";
import { Plus, Pencil, Trash2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const levelColors: Record<string, string> = {
  Extreme: "bg-destructive text-destructive-foreground",
  High: "bg-warning text-warning-foreground",
  Moderate: "bg-yellow-500 text-white",
  Low: "bg-success text-success-foreground",
};

const AdminFloodAlerts = () => {
  const [alerts, setAlerts] = useState(adminFloodAlerts);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ state: "", district: "", alertLevel: "Moderate", rainfall: "", riverLevel: "Normal", status: "Monitoring" });

  const resetForm = () => setForm({ state: "", district: "", alertLevel: "Moderate", rainfall: "", riverLevel: "Normal", status: "Monitoring" });

  const openAdd = () => { resetForm(); setEditId(null); setDialogOpen(true); };
  const openEdit = (a: typeof alerts[0]) => {
    setForm({ state: a.state, district: a.district, alertLevel: a.alertLevel, rainfall: a.rainfall, riverLevel: a.riverLevel, status: a.status });
    setEditId(a.id); setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.state || !form.district) { toast.error("Fill required fields"); return; }
    if (editId) {
      setAlerts(alerts.map(a => a.id === editId ? { ...a, ...form } : a));
      toast.success("Alert updated");
    } else {
      setAlerts([...alerts, { id: Date.now(), ...form }]);
      toast.success("Alert created");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: number) => { setAlerts(alerts.filter(a => a.id !== id)); toast.success("Alert deleted"); };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-destructive" /> Flood Alerts Management
        </h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" onClick={openAdd}><Plus className="w-4 h-4 mr-1" /> Add Alert</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editId ? "Edit" : "Add"} Flood Alert</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input placeholder="State" value={form.state} onChange={e => setForm({...form, state: e.target.value})} />
              <Input placeholder="District" value={form.district} onChange={e => setForm({...form, district: e.target.value})} />
              <Select value={form.alertLevel} onValueChange={v => setForm({...form, alertLevel: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Extreme","High","Moderate","Low"].map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
              <Input placeholder="Rainfall (e.g. 200mm)" value={form.rainfall} onChange={e => setForm({...form, rainfall: e.target.value})} />
              <Select value={form.riverLevel} onValueChange={v => setForm({...form, riverLevel: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Danger","Warning","Rising","Normal"].map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={form.status} onValueChange={v => setForm({...form, status: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Active","Monitoring","Resolved"].map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
              <Button className="w-full" onClick={handleSave}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="card-shadow">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State</TableHead><TableHead>District</TableHead><TableHead>Alert Level</TableHead>
                <TableHead>Rainfall</TableHead><TableHead>River Level</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map(a => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.state}</TableCell>
                  <TableCell>{a.district}</TableCell>
                  <TableCell><Badge className={levelColors[a.alertLevel] || ""}>{a.alertLevel}</Badge></TableCell>
                  <TableCell>{a.rainfall}</TableCell>
                  <TableCell>{a.riverLevel}</TableCell>
                  <TableCell><Badge variant="outline">{a.status}</Badge></TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(a)}><Pencil className="w-3.5 h-3.5" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(a.id)}><Trash2 className="w-3.5 h-3.5 text-destructive" /></Button>
                    </div>
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

export default AdminFloodAlerts;
