import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WorkoutSelectProps {
  workoutType: string;
  onWorkoutTypeChange: (workoutType: string) => void;
}

export function WorkoutSelect({
  workoutType,
  onWorkoutTypeChange: setWorkoutType,
}: WorkoutSelectProps) {
  return (
    <Select
      onValueChange={(value) => setWorkoutType(value)}
      defaultValue={workoutType}
    >
      <SelectTrigger className="w-full max-w-48 bg-slate-700 text-white">
        <SelectValue placeholder="Select a workout type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Workout Type</SelectLabel>
          <SelectItem value="push">Push</SelectItem>
          <SelectItem value="pull">Pull</SelectItem>
          <SelectItem value="legs">Legs</SelectItem>
          <SelectItem value="upper">Upper</SelectItem>
          <SelectItem value="lower">Lower</SelectItem>
          <SelectItem value="chest">Chest</SelectItem>
          <SelectItem value="back">Back</SelectItem>
          <SelectItem value="arms">Arms</SelectItem>
          <SelectItem value="shoulders">Shoulders</SelectItem>
          <SelectItem value="core">Core</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
