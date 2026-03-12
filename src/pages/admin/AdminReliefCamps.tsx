import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { adminReliefCamps } from "@/data/adminMockData";
import { Plus, Pencil, Tent } from "lucide-react";
import { toast } from "sonner";

const AdminReliefCamps = () => {
  const [camps, setCamps] = useState(adminReliefCamps);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", location: "", capacity: 0, availableBeds: 0, contact: "", status: "Available" });

  const openAdd = () => { setForm({ name: "", location: "", capacity: 0, availableBeds: 0, contact: "", status: "Available" }); setEditId(null); setDialogOpen(true); };
  const openEdit = (c: typeof camps[0]) => { setForm({ ...c }); setEditId(c.id); setDialogOpen(true); };

  const handleSave = () => {
    if (!form.name) { toast.error("Camp name required"); return; }
    if (editId) {
      setCamps(camps.map(c => c.id === editId ? { ...c, ...form } : c));
      toast.success("Camp updated");
    } else {
      setCamps([...camps, { id: Date.now(), ...form }]);
      toast.success("Camp added");
    }
    setDialogOpen(false);
  };

  const toggleStatus = (id: number) => {
    setCamps(camps.map(c => c.id === id ? { ...c, status: c.status === "Full" ? "Available" : "Full", availableBeds: c.status === "Full" ? Math.floor(c.capacity * 0.3) : 0 } : c));
    toast.success("Status updated");
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><Tent className="w-5 h-5 text-primary" /> Relief Camps Management</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild><Button size="sm" onClick={openAdd}><Plus className="w-4 h-4 mr-1" /> Add Camp</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editId ? "Edit" : "Add"} Relief Camp</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Camp Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <Input placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
              <Input placeholder="Capacity" type="number" value={form.capacity} onChange={e => setForm({...form, capacity: +e.target.value})} />
              <Input placeholder="Available Beds" type="number" value={form.availableBeds} onChange={e => setForm({...form, availableBeds: +e.target.value})} />
              <Input placeholder="Contact" value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} />
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
                <TableHead>Camp Name</TableHead><TableHead>Location</TableHead><TableHead>Capacity</TableHead><TableHead>Available</TableHead><TableHead>Contact</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {camps.map(c => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.location}</TableCell>
                  <TableCell>{c.capacity}</TableCell>
                  <TableCell>{c.availableBeds}</TableCell>
                  <TableCell className="font-mono text-xs">{c.contact}</TableCell>
                  <TableCell><Badge className={c.status === "Full" ? "bg-destructive text-destructive-foreground" : "bg-success text-success-foreground"}>{c.status}</Badge></TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(c)}><Pencil className="w-3.5 h-3.5" /></Button>
                      <Button variant="outline" size="sm" onClick={() => toggleStatus(c.id)}>{c.status === "Full" ? "Set Available" : "Set Full"}</Button>
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

export default AdminReliefCamps;
