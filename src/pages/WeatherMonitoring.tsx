import { mockWeatherData } from "@/data/mockData";
import { Thermometer, Droplets, Wind, CloudRain } from "lucide-react";

const WeatherMonitoring = () => (
  <div className="animate-fade-in">
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-foreground">Weather Monitoring</h2>
      <p className="text-sm text-muted-foreground">Regional weather data across flood-prone areas</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {mockWeatherData.map((w) => (
        <div key={w.city} className="bg-card rounded-xl card-shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-card-foreground text-lg">{w.city}</h3>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{w.condition}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-destructive" />
              <div>
                <p className="text-xs text-muted-foreground">Temp</p>
                <p className="font-semibold text-card-foreground">{w.temp}°C</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-info" />
              <div>
                <p className="text-xs text-muted-foreground">Humidity</p>
                <p className="font-semibold text-card-foreground">{w.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Rainfall</p>
                <p className="font-semibold text-card-foreground">{w.rainfall}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Wind</p>
                <p className="font-semibold text-card-foreground">{w.wind}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WeatherMonitoring;
