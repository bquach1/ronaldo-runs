import { Card, CardHeader } from "@/components/ui/card";
import { DatePicker } from "../components/DatePicker";
import { Field, FieldLabel } from "@/components/ui/field";
import { WorkoutSelect } from "../components/WorkoutSelect";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface TrackingCardProps {
  setTrackingCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormInfo {
  date: Date | null;
  workoutType: string;
  exerciseText: string;
  notesText: string;
}

export default function TrackingCard({
  setTrackingCardOpen,
}: TrackingCardProps) {
  const [formInfo, setFormInfo] = useState<FormInfo>({
    date: null,
    workoutType: "",
    exerciseText: "",
    notesText: "",
  });

  return (
    <Card className="h-auto flex flex-col bg-slate-800 border-slate-700 shadow-md w-5/6 mx-auto mb-10 p-5">
      <CardHeader className="ml-4 text-xl text-white pt-3 font-semibold">
        Add New Workout
      </CardHeader>
      <Field className="ml-4 w-full">
        <FieldLabel className="text-white">Date</FieldLabel>
        <DatePicker
          date={formInfo.date}
          onDateChange={(date) => setFormInfo({ ...formInfo, date })}
        />
        <FieldLabel className="text-white mt-4">Workout Type</FieldLabel>
        <WorkoutSelect
          workoutType={formInfo.workoutType}
          onWorkoutTypeChange={(workoutType) =>
            setFormInfo({ ...formInfo, workoutType })
          }
        />
        <FieldLabel className="text-white mt-4">Exercises</FieldLabel>
        <Textarea
          placeholder="Workout details... (e.g. 10x3 push-ups, 5x5 squats)"
          className="!w-23/24 text-white placeholder:text-gray-400 bg-slate-700 border-slate-600 focus-visible:ring-slate-500/40 focus-visible:ring-offset-slate-900/20 focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring resize-y min-h-[80px]"
          value={formInfo.exerciseText}
          onChange={(e) =>
            setFormInfo({ ...formInfo, exerciseText: e.target.value })
          }
        />
        <FieldLabel className="text-white mt-4">Extra Notes</FieldLabel>
        <Textarea
          placeholder="Extra notes... (e.g. felt strong, need to improve form)"
          className="!w-23/24 text-white placeholder:text-gray-400 bg-slate-700 border-slate-600 focus-visible:ring-slate-500/40 focus-visible:ring-offset-slate-900/20 focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring resize-y min-h-[80px]"
          value={formInfo.notesText}
          onChange={(e) =>
            setFormInfo({ ...formInfo, notesText: e.target.value })
          }
        />
        <div className="flex gap-x-3">
          <Button variant="primary" onClick={() => console.log(formInfo)}>
            Save Workout
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setFormInfo({
                date: null,
                workoutType: "",
                exerciseText: "",
                notesText: "",
              });
              setTrackingCardOpen(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </Field>
    </Card>
  );
}
