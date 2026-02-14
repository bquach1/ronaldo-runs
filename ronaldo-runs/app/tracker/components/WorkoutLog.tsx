import { Dumbbell } from "lucide-react";

interface WorkoutLogProps {
  workoutLogs?: object[];
}

export default function WorkoutLog({ workoutLogs }: WorkoutLogProps) {
  return (
    <div className="flex flex-col mx-auto justify-center min-h-[80px] font-sans bg-gray-800 rounded-md w-5/6 p-10 my-10 ">
      <Dumbbell className="size-20 text-gray-500 mx-auto my-5 animate-pulse" />
      {workoutLogs && workoutLogs.length === 0 ? (
        <div className="text-center">
          No workouts logged yet. Start by logging your first workout!
        </div>
      ) : (
        <div>Workout log will appear here.</div>
      )}
    </div>
  );
}
