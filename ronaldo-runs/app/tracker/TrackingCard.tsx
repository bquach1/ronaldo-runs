import { Card, CardHeader } from "@/components/ui/card";
import { DatePicker } from "../components/DatePicker";
import { Field, FieldLabel } from "@/components/ui/field";

export default function TrackingCard() {
  return (
    <Card className="h-3/5 bg-slate-800 border-slate-700 shadow-md w-5/6 mx-auto mb-10">
      <CardHeader className="text-xl text-white pt-3 font-semibold">
        Add New Workout
      </CardHeader>
      <Field className="ml-6 w-full">
        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
          Name on Card
        </FieldLabel>
        <DatePicker />
      </Field>
    </Card>
  );
}
