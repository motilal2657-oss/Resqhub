import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { adminVolunteers } from "@/data/adminMockData";
import { Users, Plus } from "lucide-react";
import { toast } from "sonner";

const AdminVolunteers = () => {
  const [volunteers, setVolunteers] = useState(adminVolunteers);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: "", skills: "", location: "", status: "Available", assignedTask: "—" });

  const handleAdd = () => {
    if (!form.name) { toast.error("Name required"); return; }
    setVolunteers([...volunteers, { id: Date.now(), ...form }]);
    toast.success("Volunteer added");
    setDialogOpen(false);
  };

  const updateStatus = (id: number, status: string) => {
    setVolunteers(volunteers.map(v => v.id === id ? { ...v, status } : v));
    toast.success("Status updated");
  };

  const assignTask = (id: number) => {
    const task = prompt("Enter task name:");
    if (task) {
      setVolunteers(volunteers.map(v => v.id === id ? { ...v, assignedTask: task, status: "On Mission" } : v));
      toast.success("Task assigned");
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Volunteers</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild><Button size="sm" onClick={() => { setForm({ name: "", skills: "", location: "", status: "Available", assignedTask: "—" }); setDialogOpen(true); }}><Plus className="w-4 h-4 mr-1" /> Add Volunteer</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add Volunteer</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <Input placeholder="Skills (comma-separated)" value={form.skills} onChange={e => setForm({...form, skills: e.target.value})} />
              <Input placeholder="Location" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
              <Button className="w-full" onClick={handleAdd}>Add</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Card className="card-shadow">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead><TableHead>Skills</TableHead><TableHead>Location</TableHead><TableHead>Status</TableHead><TableHead>Assigned Task</TableHead><TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {volunteers.map(v => (
                <TableRow key={v.id}>
                  <TableCell className="font-medium">{v.name}</TableCell>
                  <TableCell className="text-xs">{v.skills}</TableCell>
                  <TableCell>{v.location}</TableCell>
                  <TableCell><Badge className={v.status === "On Mission" ? "bg-warning text-warning-foreground" : "bg-success text-success-foreground"}>{v.status}</Badge></TableCell>
                  <TableCell className="text-sm">{v.assignedTask}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm" onClick={() => assignTask(v.id)}>Assign</Button>
                      <Button variant="ghost" size="sm" onClick={() => updateStatus(v.id, v.status === "Available" ? "On Mission" : "Available")}>{v.status === "Available" ? "Deploy" : "Release"}</Button>
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

export default AdminVolunteers;
