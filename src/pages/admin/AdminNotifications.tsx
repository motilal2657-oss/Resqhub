import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { adminNotifications } from "@/data/adminMockData";
import { Bell, Plus, Send } from "lucide-react";
import { toast } from "sonner";

const typeColors: Record<string, string> = {
  Evacuation: "bg-destructive/10 text-destructive",
  Weather: "bg-warning/10 text-warning",
  "Road Closure": "bg-info/10 text-info",
  Update: "bg-muted text-muted-foreground",
};

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(adminNotifications);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ title: "", message: "", type: "Update" });

  const handleSend = () => {
    if (!form.title || !form.message) { toast.error("Fill all fields"); return; }
    setNotifications([{ id: Date.now(), ...form, time: "Just now", sent: true }, ...notifications]);
    toast.success("Notification broadcast sent!");
    setDialogOpen(false);
    setForm({ title: "", message: "", type: "Update" });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><Bell className="w-5 h-5 text-primary" /> Notifications</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild><Button size="sm"><Plus className="w-4 h-4 mr-1" /> Create Broadcast</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create Emergency Broadcast</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
              <Textarea placeholder="Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={3} />
              <Select value={form.type} onValueChange={v => setForm({...form, type: v})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {["Evacuation","Weather","Road Closure","Update"].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
              <Button className="w-full" onClick={handleSend}><Send className="w-4 h-4 mr-2" /> Send Broadcast</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-3">
        {notifications.map(n => (
          <Card key={n.id} className="card-shadow">
            <CardContent className="p-4 flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge className={`${typeColors[n.type] || ""} border-0 text-xs`}>{n.type}</Badge>
                  <span className="text-xs text-muted-foreground">{n.time}</span>
                  {n.sent && <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/30">Sent</Badge>}
                </div>
                <h3 className="font-semibold text-card-foreground text-sm">{n.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{n.message}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminNotifications;
