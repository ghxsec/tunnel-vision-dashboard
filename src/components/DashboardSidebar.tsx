
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Database, Lock, Server, Shield, Settings, Users, Wifi } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3 px-3 font-normal",
        active
          ? "bg-vpn-accent/10 text-vpn-accent"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      )}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-vpn-accent" />
      )}
    </Button>
  );
};

const DashboardSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { icon: <Shield size={18} />, label: "Dashboard" },
    { icon: <Server size={18} />, label: "Servers" },
    { icon: <Wifi size={18} />, label: "Services" },
    { icon: <Database size={18} />, label: "Usage" },
    { icon: <Users size={18} />, label: "Account" },
    { icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
    <div className="w-full md:w-60 h-full flex flex-col bg-vpn-darker border-r border-white/5">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-gradient-to-tr from-vpn-accent to-blue-500 flex items-center justify-center">
            <Lock size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">NetShield</h1>
            <p className="text-xs text-gray-400">Secure Connection</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-1 px-3">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>
      
      <div className="mt-auto p-4">
        <div className="rounded-lg bg-gradient-blue p-4 text-white">
          <h3 className="font-semibold">Upgrade to Pro</h3>
          <p className="text-xs text-white/80 mt-1">
            Get unlimited access to servers and advanced features
          </p>
          <Button className="mt-3 w-full bg-white hover:bg-white/90 text-blue-900 text-xs py-1">
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
