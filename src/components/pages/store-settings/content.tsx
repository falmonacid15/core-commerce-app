"use client";
import { Tab, Tabs } from "@heroui/react";
import StoreSettings from "./store-settings";
import { Clock, CreditCard, Settings, Store } from "lucide-react";
import BillingSettings from "./billing-settings";
import StoreConfig from "./store-config";
import HoursSettings from "./hours-settings";

export default function StoreSettingsContent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="light">
        <Tab
          key="general-settings"
          title={
            <div className="flex items-center gap-2 w-full">
              <Store className="h-4 w-4" />
              <span className="hidden sm:inline">General</span>
            </div>
          }
        >
          <StoreSettings />
        </Tab>
        <Tab
          key="billing-settings"
          title={
            <div className="flex items-center gap-2 w-full">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Facturación</span>
            </div>
          }
        >
          <BillingSettings />
        </Tab>
        <Tab
          key="config"
          title={
            <div className="flex items-center gap-2 w-full">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Configuración</span>
            </div>
          }
        >
          <StoreConfig />
        </Tab>
        <Tab
          key="hours"
          title={
            <div className="flex items-center gap-2 w-full">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Horarios</span>
            </div>
          }
        >
          <HoursSettings />
        </Tab>
      </Tabs>
    </div>
  );
}
