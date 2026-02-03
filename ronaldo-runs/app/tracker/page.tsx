"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import NavMenu from "../components/NavMenu";
import { useState } from "react";
import TrackingCard from "./TrackingCard";

export default function TrackerPage() {
  const [trackingCardOpen, setTrackingCardOpen] = useState(false);

  return (
    <div className="flex min-h-screen font-sans">
      <main className="flex justify-center min-h-screen w-full flex-col bg-black">
        <NavMenu />
        <div className="w-full h-[calc(100vh-64px)] mx-auto text-white mt-5 bg-slate-900">
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
          {trackingCardOpen ? <TrackingCard /> : <div></div>}
          <div className="text-2xl font-bold w-5/6 mx-auto">
            Recent Workouts
          </div>
        </div>
      </main>
    </div>
  );
}
