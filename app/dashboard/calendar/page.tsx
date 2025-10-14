import { BookingCalendar } from "./BookingCalendar";

const CalendarPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Booking Calendar</h1>
      </div>
      <BookingCalendar />
    </div>
  );
};

export default CalendarPage;
