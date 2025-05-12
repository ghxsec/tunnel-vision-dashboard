
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Wifi, WifiOff } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ConnectionStatus: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (connected) {
      setProgress(100);
    } else {
      setProgress(0);
    }
  }, [connected]);

  const toggleConnection = () => {
    if (!connected) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 20;
        });
      }, 200);
      setTimeout(() => {
        setConnected(true);
        clearInterval(interval);
      }, 1000);
    } else {
      setConnected(false);
    }
  };

  return (
    <div className="stats-card relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${connected ? 'bg-vpn-success/20' : 'bg-vpn-error/20'}`}>
            {connected ? (
              <Shield size={24} className="text-vpn-success animate-glow" />
            ) : (
              <WifiOff size={24} className="text-vpn-error" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400">Status</h3>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${connected ? 'bg-vpn-success animate-pulse' : 'bg-vpn-error'}`}></div>
              <p className="text-lg font-semibold">
                {connected ? "Connected & Protected" : "Not Connected"}
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={toggleConnection}
          className={`min-w-[140px] ${
            connected
              ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
              : "bg-gradient-to-r from-vpn-accent to-blue-500 hover:from-blue-500 hover:to-vpn-accent"
          }`}
        >
          {connected ? "Disconnect" : "Connect Now"}
        </Button>
      </div>

      {!connected && progress > 0 && progress < 100 && (
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Establishing connection...</p>
          <Progress value={progress} className="h-1.5" />
        </div>
      )}

      {connected && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-xs text-gray-400">IP Address</p>
            <p className="text-sm font-mono">192.168.1.xxx</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Location</p>
            <p className="text-sm">Frankfurt, Germany</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Protocol</p>
            <p className="text-sm">OpenVPN (TCP)</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Latency</p>
            <p className="text-sm">48 ms</p>
          </div>
        </div>
      )}
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-vpn-accent/5 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default ConnectionStatus;
