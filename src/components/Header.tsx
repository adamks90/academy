"use client";

import {
  MagnifyingGlass,
  Bell,
  UserCircle,
  Lock,
  ShareNetwork,
  Question,
  CaretUpDown,
} from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="h-[56px] min-h-[56px] bg-white border-b border-gray-200 flex items-center justify-between px-4">
      {/* Left: Club name */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-[10px] font-bold leading-tight text-center">
            Padel<br />Shift
          </span>
        </div>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors">
          Padel Shift, Elkstone Studios
          <CaretUpDown size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Icon buttons */}
        <div className="flex items-center gap-1">
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <Lock size={18} weight="regular" />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <ShareNetwork size={18} weight="regular" />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <Question size={18} weight="regular" />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 w-[160px]">
          <MagnifyingGlass size={16} className="text-gray-400" />
          <span className="text-sm text-gray-400">Search</span>
        </div>

        {/* Notifications & Profile */}
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <Bell size={18} weight="regular" />
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
            <UserCircle size={22} weight="regular" className="text-gray-500" />
            <span className="font-medium">Rob Allen</span>
          </button>
        </div>
      </div>
    </header>
  );
}
