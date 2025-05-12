
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  active?: boolean;
  buttonText?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  icon,
  active = false,
  buttonText = "Configure",
  className,
}) => {
  return (
    <div 
      className={cn(
        "stats-card glowing transition-all duration-300",
        active && "border-vpn-accent/40",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-vpn-accent/20 to-transparent">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-xs text-gray-400">{description}</p>
            </div>
          </div>
          {active && (
            <div className="px-2 py-1 text-[10px] rounded-full bg-vpn-success/20 text-vpn-success">
              Active
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-4">
          <Button 
            className={cn(
              "w-full text-sm",
              active 
                ? "bg-vpn-accent hover:bg-vpn-accent-hover text-white"
                : "bg-transparent border border-vpn-accent/30 hover:bg-vpn-accent/10 text-vpn-accent"
            )}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
