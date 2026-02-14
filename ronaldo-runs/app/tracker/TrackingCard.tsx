import { Card, CardHeader } from "@/components/ui/card";
import { DatePicker } from "../components/DatePicker";
import { Field, FieldLabel } from "@/components/ui/field";
import { WorkoutSelect } from "../components/WorkoutSelect";
import { useState } from "react";

interface FormInfo {
  date: Date | null;
  workoutType: string;
}

export default function TrackingCard() {
  const [formInfo, setFormInfo] = useState<FormInfo>({
    date: null,
    workoutType: "",
  });

  console.log(formInfo);

  return (
    <Card className="h-3/5 bg-slate-800 border-slate-700 shadow-md w-5/6 mx-auto mb-10 p-2">
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
      </Field>
    </Card>
  );
}
