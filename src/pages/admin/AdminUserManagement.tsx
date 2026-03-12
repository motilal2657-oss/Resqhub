import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { adminUsers } from "@/data/adminMockData";
import { UserCog, ShieldCheck, Ban } from "lucide-react";
import { toast } from "sonner";

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/30",
  Verified: "bg-primary/10 text-primary border-primary/30",
  Blocked: "bg-destructive/10 text-destructive border-destructive/30",
  "Pending Verification": "bg-warning/10 text-warning border-warning/30",
};

const AdminUserManagement = () => {
  const [users, setUsers] = useState(adminUsers);

  const toggleBlock = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Blocked" ? "Active" : "Blocked" } : u));
    toast.success("User status updated");
  };

  const verify = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: "Verified" } : u));
    toast.success("Account verified");
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><UserCog className="w-5 h-5 text-primary" /> User Management</h2>
      <Card className="card-shadow">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Joined</TableHead><TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(u => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell className="text-xs">{u.email}</TableCell>
                  <TableCell><Badge variant="outline">{u.role}</Badge></TableCell>
                  <TableCell><Badge variant="outline" className={statusColors[u.status] || ""}>{u.status}</Badge></TableCell>
                  <TableCell className="text-xs text-muted-foreground">{u.joined}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {u.status === "Pending Verification" && (
                        <Button variant="outline" size="sm" onClick={() => verify(u.id)}><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verify</Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={() => toggleBlock(u.id)}>
                        <Ban className="w-3.5 h-3.5 mr-1" />{u.status === "Blocked" ? "Unblock" : "Block"}
                      </Button>
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

export default AdminUserManagement;
