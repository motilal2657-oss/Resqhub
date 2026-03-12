import { useState } from "react";
import { Thermometer, Droplets, Wind, CloudRain, MapPin, AlertTriangle, ExternalLink, CheckCircle, XCircle, HelpCircle, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockHashtags, mockSocialPost, mockHighAlerts, mockResources } from "@/data/mockData";
import { toast } from "sonner";

const weatherInfo = { temp: 32, humidity: 70, wind: 11, condition: "Partly Cloudy" };

const DashboardHome = () => {
  const [authResults, setAuthResults] = useState<Record<string, string>>({});
  const [detailsModal, setDetailsModal] = useState<typeof mockResources[0] | null>(null);

  const checkAuth = (tag: string) => {
    const results = ["Authentic", "Possibly Fake", "Needs Verification"];
    const result = results[Math.floor(Math.random() * results.length)];
    setAuthResults((prev) => ({ ...prev, [tag]: result }));
  };

  const authBadge = (result: string) => {
    if (result === "Authentic") return <Badge className="bg-success text-success-foreground"><CheckCircle className="w-3 h-3 mr-1" />{result}</Badge>;
    if (result === "Possibly Fake") return <Badge className="bg-destructive text-destructive-foreground"><XCircle className="w-3 h-3 mr-1" />{result}</Badge>;
    return <Badge className="bg-warning text-warning-foreground"><HelpCircle className="w-3 h-3 mr-1" />{result}</Badge>;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Weather Bar */}
      <div className="bg-card rounded-xl card-shadow p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium">{weatherInfo.temp}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-info" />
              <span className="text-sm font-medium">{weatherInfo.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">{weatherInfo.wind} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{weatherInfo.condition}</span>
            </div>
          </div>
          <Select defaultValue="delhi">
            <SelectTrigger className="w-48">
              <MapPin className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delhi">New Delhi</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="kolkata">Kolkata</SelectItem>
              <SelectItem value="guwahati">Guwahati</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2 bg-card rounded-xl card-shadow overflow-hidden">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-card-foreground">India Flood Monitoring Map</h2>
          </div>
          <div className="h-[400px] bg-muted flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-3" />
              <p className="text-lg font-semibold text-muted-foreground">India Flood Monitoring Map Placeholder</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Interactive map can be integrated here</p>
            </div>
            {/* Fake map markers */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-destructive rounded-full animate-pulse" />
            <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-warning rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-destructive rounded-full animate-pulse" />
          </div>
        </div>

        {/* Right Panels */}
        <div className="space-y-6">
          {/* High Alerts */}
          <div className="bg-card rounded-xl card-shadow">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <h3 className="font-semibold text-card-foreground">High Alerts</h3>
            </div>
            <div className="p-3 space-y-2">
              {mockHighAlerts.map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-destructive/5 rounded-lg border border-destructive/10">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{alert.location}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={alert.level === "Critical" ? "bg-destructive text-destructive-foreground" : "bg-warning text-warning-foreground"}>
                      {alert.level}
                    </Badge>
                    <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => toast.success("Report sent to rescue teams!")}>
                      Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Post */}
          <div className="bg-card rounded-xl card-shadow">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-card-foreground">Top Social Post</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {mockSocialPost.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">@{mockSocialPost.username}</p>
                  <p className="text-xs text-muted-foreground">{mockSocialPost.timestamp}</p>
                </div>
              </div>
              <p className="text-sm text-card-foreground leading-relaxed">{mockSocialPost.caption}</p>
              <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                <span>❤️ {mockSocialPost.likes.toLocaleString()}</span>
                <span>🔄 {mockSocialPost.shares.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hashtags */}
        <div className="bg-card rounded-xl card-shadow">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-card-foreground">Trending Flood Hashtags</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-muted-foreground font-medium">Hashtag</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Platform</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Posts</th>
                  <th className="text-right p-3 text-muted-foreground font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockHashtags.map((h) => (
                  <tr key={h.tag} className="border-b border-border last:border-0">
                    <td className="p-3 font-medium text-primary">{h.tag}</td>
                    <td className="p-3 text-card-foreground">{h.platform}</td>
                    <td className="p-3 text-muted-foreground">{h.posts}</td>
                    <td className="p-3 text-right">
                      {authResults[h.tag] ? (
                        authBadge(authResults[h.tag])
                      ) : (
                        <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => checkAuth(h.tag)}>
                          Check
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-card rounded-xl card-shadow">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-card-foreground">Rescue & Evacuation Resources</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-muted-foreground font-medium">Resource</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Type</th>
                  <th className="text-left p-3 text-muted-foreground font-medium">Distance</th>
                  <th className="text-right p-3 text-muted-foreground font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockResources.map((r, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="p-3 font-medium text-card-foreground">{r.name}</td>
                    <td className="p-3 text-muted-foreground">{r.type}</td>
                    <td className="p-3 text-muted-foreground">{r.distance}</td>
                    <td className="p-3 text-right">
                      <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => setDetailsModal(r)}>
                        <Eye className="w-3 h-3 mr-1" />Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Resource Details Modal */}
      <Dialog open={!!detailsModal} onOpenChange={() => setDetailsModal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{detailsModal?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div><span className="text-muted-foreground">Type:</span> <span className="font-medium">{detailsModal?.type}</span></div>
            <div><span className="text-muted-foreground">Distance:</span> <span className="font-medium">{detailsModal?.distance}</span></div>
            <div><span className="text-muted-foreground">Contact:</span> <span className="font-medium">+91 11 2345 6789</span></div>
            <div><span className="text-muted-foreground">Address:</span> <span className="font-medium">Sector 5, Near Main Road, New Delhi</span></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardHome;
