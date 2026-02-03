import { Card, CardHeader } from "@/components/ui/card";

export default function TrackingCard() {
  return (
    <Card className="h-3/5 bg-slate-800 border-slate-700 shadow-md w-5/6 mx-auto mb-10">
      <CardHeader className="text-xl text-white pt-3 font-semibold">
        Add New Workout
      </CardHeader>
    </Card>
  );
}
