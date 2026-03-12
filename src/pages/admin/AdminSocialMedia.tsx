import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { adminSocialMedia } from "@/data/adminMockData";
import { MessageSquare, CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { toast } from "sonner";

const statusColors: Record<string, string> = {
  Verified: "bg-success/10 text-success border-success/30",
  Fake: "bg-destructive/10 text-destructive border-destructive/30",
  "Needs Verification": "bg-warning/10 text-warning border-warning/30",
};

const AdminSocialMedia = () => {
  const [posts, setPosts] = useState(adminSocialMedia);

  const updateStatus = (id: number, status: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, authenticity: status } : p));
    toast.success(`Marked as ${status}`);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-primary" /> Social Media Monitor
      </h2>
      <Card className="card-shadow">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hashtag</TableHead><TableHead>Platform</TableHead><TableHead>Posts</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map(p => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.hashtag}</TableCell>
                  <TableCell>{p.platform}</TableCell>
                  <TableCell>{p.postCount}</TableCell>
                  <TableCell><Badge variant="outline" className={statusColors[p.authenticity] || ""}>{p.authenticity}</Badge></TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" title="Verify" onClick={() => updateStatus(p.id, "Verified")}><CheckCircle className="w-4 h-4 text-success" /></Button>
                      <Button variant="ghost" size="icon" title="Flag Fake" onClick={() => updateStatus(p.id, "Fake")}><XCircle className="w-4 h-4 text-destructive" /></Button>
                      <Button variant="ghost" size="icon" title="Needs Verification" onClick={() => updateStatus(p.id, "Needs Verification")}><HelpCircle className="w-4 h-4 text-warning" /></Button>
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

export default AdminSocialMedia;
