
import React from "react";
import { Button } from "@/components/ui/button";
import { Server, ArrowRight } from "lucide-react";

interface ServerProps {
  name: string;
  location: string;
  load: number;
  ping: number;
  isRecommended?: boolean;
}

const ServerItem: React.FC<ServerProps> = ({ name, location, load, ping, isRecommended }) => {
  const getLoadColor = (load: number) => {
    if (load < 30) return 'bg-vpn-success';
    if (load < 70) return 'bg-vpn-warning';
    return 'bg-vpn-error';
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-vpn-darker flex items-center justify-center">
          <Server size={18} className="text-vpn-accent" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{name}</p>
            {isRecommended && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-vpn-accent/20 text-vpn-accent">
                Recommended
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <p className="text-xs text-gray-400 mb-1">Load</p>
          <div className="h-1.5 w-24 bg-vpn-darker rounded-full overflow-hidden">
            <div 
              className={`h-full ${getLoadColor(load)}`} 
              style={{ width: `${load}%` }}
            ></div>
          </div>
        </div>
        <div className="hidden md:block text-center">
          <p className="text-xs text-gray-400">Ping</p>
          <p>{ping} ms</p>
        </div>
        <Button size="sm" variant="ghost" className="text-vpn-accent hover:bg-vpn-accent/10 hover:text-vpn-accent">
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

const ServerList: React.FC = () => {
  const servers = [
    { name: "Germany-01", location: "Frankfurt, DE", load: 25, ping: 48, isRecommended: true },
    { name: "Netherlands-02", location: "Amsterdam, NL", load: 42, ping: 53, isRecommended: false },
    { name: "United States-01", location: "New York, US", load: 78, ping: 115, isRecommended: false },
    { name: "Singapore-01", location: "Singapore, SG", load: 35, ping: 187, isRecommended: false },
  ];

  return (
    <div className="stats-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Available Servers</h3>
        <Button variant="link" className="text-vpn-accent p-0 h-auto">
          View All
        </Button>
      </div>
      <div>
        {servers.map((server) => (
          <ServerItem key={server.name} {...server} />
        ))}
      </div>
    </div>
  );
};

export default ServerList;
