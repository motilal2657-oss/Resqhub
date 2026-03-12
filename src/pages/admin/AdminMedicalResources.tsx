import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { adminMedicalResources } from "@/data/adminMockData";
import { Plus, Pencil, Trash2, Heart } from "lucide-react";
import { toast } from "sonner";

const AdminMedicalResources = () => {
  const [hospitals, setHospitals] = useState(adminMedicalResources);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", location: "", distance: "", contact: "", beds: 0, speciality: "" });

  const openAdd = () => { setForm({ name: "", location: "", distance: "", contact: "", beds: 0, speciality: "" }); setEditId(null); setDialogOpen(true); };
  const openEdit = (h: typeof hospitals[0]) => { setForm({ ...h }); setEditId(h.id); setDialogOpen(true); };

  const handleSave = () => {
    if (!form.name) { toast.error("Hospital name required"); return; }
    if (editId) {
      setHospitals(hospitals.map(h => h.id === editId ? { ...h, ...form } : h));
      toast.success("Hospital updated");
    } else {
      setHospitals([...hospitals, { id: Date.now(), ...form }]);
      toast.success("Hospital added");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: number) => { setHospitals(hospitals.filter(h => h.id !== id)); toast.success("Hospital removed"); };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><Heart className="w-5 h-5 text-destructive" /> Medical Resources</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild><Button size="sm" onClick={openAdd}><Plus className="w-4 h-4 mr-1" /> Add Hospital</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editId ? "Edit" : "Add"} Hospital</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Hospital Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <Input placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
              <Input placeholder="Distance" value={form.distance} onChange={e => setForm({...form, distance: e.target.value})} />
              <Input placeholder="Emergency Contact" value={form.contact} onChange={e => setForm({...form, contact: e.target.value})} />
              <Input placeholder="Bed Availability" type="number" value={form.beds} onChange={e => setForm({...form, beds: +e.target.value})} />
              <Input placeholder="Speciality" value={form.speciality} onChange={e => setForm({...form, speciality: e.target.value})} />
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
                <TableHead>Hospital</TableHead><TableHead>Location</TableHead><TableHead>Distance</TableHead><TableHead>Contact</TableHead><TableHead>Beds</TableHead><TableHead>Speciality</TableHead><TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hospitals.map(h => (
                <TableRow key={h.id}>
                  <TableCell className="font-medium">{h.name}</TableCell>
                  <TableCell>{h.location}</TableCell>
                  <TableCell>{h.distance}</TableCell>
                  <TableCell className="font-mono text-xs">{h.contact}</TableCell>
                  <TableCell>{h.beds}</TableCell>
                  <TableCell>{h.speciality}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(h)}><Pencil className="w-3.5 h-3.5" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(h.id)}><Trash2 className="w-3.5 h-3.5 text-destructive" /></Button>
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

export default AdminMedicalResources;
