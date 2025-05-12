
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Lock, 
  Shield, 
  Server, 
  Settings,
  Wifi
} from "lucide-react";

import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import ConnectionStatus from "@/components/ConnectionStatus";
import ServiceCard from "@/components/ServiceCard";
import StatisticsPanel from "@/components/StatisticsPanel";
import ServerList from "@/components/ServerList";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Mobile sidebar toggle */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 text-white bg-vpn-darker/80 backdrop-blur-sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </Button>
      )}

      <div className="flex h-full">
        {/* Sidebar */}
        <div 
          className={`fixed md:relative inset-y-0 left-0 z-40 transform transition-transform duration-300 ${
            isMobile
              ? sidebarOpen ? "translate-x-0" : "-translate-x-full"
              : "translate-x-0"
          }`}
        >
          <DashboardSidebar />
        </div>
        
        {/* Backdrop for mobile sidebar */}
        {isMobile && sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Connection status card */}
              <ConnectionStatus />
              
              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard 
                  name="SSH Tunnel" 
                  description="Secure Shell tunneling protocol"
                  icon={<Lock size={20} className="text-vpn-accent" />}
                  active
                />
                <ServiceCard 
                  name="V2Ray VMess" 
                  description="Advanced encrypted proxy protocol"
                  icon={<Shield size={20} className="text-vpn-accent" />}
                />
                <ServiceCard 
                  name="Shadowsocks" 
                  description="Encrypted socks5 proxy protocol"
                  icon={<Database size={20} className="text-vpn-accent" />}
                />
                <ServiceCard 
                  name="Xray Vless" 
                  description="Light VPN protocol with TLS"
                  icon={<Server size={20} className="text-vpn-accent" />}
                />
                <ServiceCard 
                  name="Trojan-Go" 
                  description="Undetectable encrypted proxy"
                  icon={<Shield size={20} className="text-vpn-accent" />}
                />
                <ServiceCard 
                  name="Wireguard" 
                  description="Modern and secure VPN protocol"
                  icon={<Wifi size={20} className="text-vpn-accent" />}
                />
              </div>
              
              {/* Statistics and Server List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StatisticsPanel />
                <ServerList />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
