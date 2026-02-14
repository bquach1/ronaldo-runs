"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import NavMenu from "../components/NavMenu";
import { useState } from "react";
import TrackingCard from "./TrackingCard";

export default function TrackerPage() {
  const [trackingCardOpen, setTrackingCardOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen font-sans bg-black">
      <NavMenu />
      <div className="flex-1 w-full mx-auto text-white mt-5 bg-slate-900 overflow-auto">
        <div className="justify-between items-center flex py-10 w-5/6 mx-auto">
          <span className="text-4xl font-bold">Workout Tracker</span>
          <Button
            className="px-4 bg-blue-600 text-white cursor-pointer"
            icon={<PlusIcon />}
            onClick={() => setTrackingCardOpen((prev) => !prev)}
          >
            Log Workout
          </Button>
        </div>
        {trackingCardOpen ? (
          <TrackingCard setTrackingCardOpen={setTrackingCardOpen} />
        ) : (
          <div></div>
        )}
        <div className="text-2xl font-bold w-5/6 mx-auto">Recent Workouts</div>
      </div>
    </div>
  );
}
