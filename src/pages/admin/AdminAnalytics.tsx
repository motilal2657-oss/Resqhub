import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { adminAnalyticsData } from "@/data/adminMockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend, PieChart, Pie, Cell } from "recharts";

const COLORS = ["hsl(0, 72%, 51%)", "hsl(38, 92%, 50%)", "hsl(215, 80%, 48%)", "hsl(142, 72%, 40%)", "hsl(200, 80%, 50%)"];

const AdminAnalytics = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary" /> Analytics</h2>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="card-shadow">
        <CardHeader><CardTitle className="text-sm">Flood Alerts by Region</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={adminAnalyticsData.alertsByRegion}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="region" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="alerts" fill="hsl(215, 80%, 48%)" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="card-shadow">
        <CardHeader><CardTitle className="text-sm">Rescue Operations (Monthly)</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={adminAnalyticsData.rescueOps}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="hsl(142, 72%, 40%)" strokeWidth={2} />
              <Line type="monotone" dataKey="ongoing" stroke="hsl(38, 92%, 50%)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="card-shadow md:col-span-2">
        <CardHeader><CardTitle className="text-sm">Most Affected States (Population Impact)</CardTitle></CardHeader>
        <CardContent className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={adminAnalyticsData.mostAffectedStates} dataKey="population" nameKey="state" cx="50%" cy="50%" outerRadius={110} label={({ state, percent }) => `${state} ${(percent * 100).toFixed(0)}%`}>
                {adminAnalyticsData.mostAffectedStates.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AdminAnalytics;
