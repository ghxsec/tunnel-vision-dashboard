
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Settings, User } from "lucide-react";

const DashboardHeader: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6">
      <div className="flex items-center gap-2">
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-vpn-accent to-blue-300 text-transparent bg-clip-text">
            NetShield
          </h1>
          <p className="text-xs text-gray-400">VPN & SSH Tunneling</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Settings size={20} />
        </Button>
        <div className="ml-2 flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-vpn-accent to-blue-400 flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Premium Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
