import { WorkoutInfo } from "@/types/WorkoutInfo";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "react-day-picker/locale/en-US";

export default function WorkoutCard({ workout }: { workout: WorkoutInfo }) {
  return (
    <div className="bg-gray-700 rounded-md p-5 mb-4">
      <div className="flex items-center justify-between w-full mx-auto text-lg font-semibold text-white mb-2">
        <div>
          <Calendar className="size-5 inline-block mr-2 mb-1 text-blue-500" />
          {workout.date
            ? format(workout.date, "EEEE, MMMM d, yyyy", { locale: enUS })
            : "No date"}
        </div>
        <div>{workout.workoutType}</div>
      </div>
      <div className="text-gray-300 mb-2">{workout.exerciseText}</div>
      <div className="text-gray-400 text-sm">{workout.notesText}</div>
    </div>
  );
}
