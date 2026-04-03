"use client";

import {
  CalendarBlank,
  Users,
  Trophy,
  CaretRight,
  CaretDown,
  Storefront,
  ChartBar,
  Gear,
  GraduationCap,
} from "@phosphor-icons/react";

const topNavItems = [
  { label: "Calendar", icon: CalendarBlank, hasChildren: true },
  { label: "Players", icon: Users, hasChildren: true },
];

const playSubItems = [
  { label: "Activities" },
  { label: "Matches" },
  { label: "Coaches" },
  { label: "Leagues" },
  { label: "Academy", active: true },
];

const bottomNavItems = [
  { label: "Shop", icon: Storefront, hasChildren: true },
  { label: "Insights", icon: ChartBar, hasChildren: true },
  { label: "Settings", icon: Gear, hasChildren: true },
];

export default function Sidebar() {
  return (
    <aside className="w-[210px] min-w-[210px] bg-white border-r border-gray-200 flex flex-col justify-between h-full">
      <nav className="pt-4">
        {/* Top nav items */}
        <ul className="space-y-0.5">
          {topNavItems.map((item) => (
            <li key={item.label}>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span className="flex items-center gap-3">
                  <item.icon size={20} weight="regular" className="text-gray-500" />
                  <span className="font-normal">{item.label}</span>
                </span>
                {item.hasChildren && (
                  <CaretRight size={14} className="text-gray-400" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Play section - expanded */}
        <div className="mt-0.5">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <span className="flex items-center gap-3">
              <Trophy size={20} weight="regular" className="text-gray-500" />
              <span className="font-normal">Play</span>
            </span>
            <CaretDown size={14} className="text-gray-400" />
          </button>
          <ul className="ml-[44px] space-y-0.5">
            {playSubItems.map((item) => (
              <li key={item.label}>
                <button
                  className={`block w-full text-left px-3 py-1.5 text-sm transition-colors ${
                    item.active
                      ? "text-indigo-500 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom nav items */}
        <ul className="mt-4 space-y-0.5">
          {bottomNavItems.map((item) => (
            <li key={item.label}>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                <span className="flex items-center gap-3">
                  <item.icon size={20} weight="regular" className="text-gray-500" />
                  <span className="font-normal">{item.label}</span>
                </span>
                {item.hasChildren && (
                  <CaretRight size={14} className="text-gray-400" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Nettla logo at bottom */}
      <div className="px-4 py-4">
        <span className="text-gray-400 text-sm font-medium tracking-wide">
          <span className="inline-block mr-0.5">&#9776;</span>nettla
        </span>
      </div>
    </aside>
  );
}
