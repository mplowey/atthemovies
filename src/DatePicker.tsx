import "./DatePicker.css";
import useDateStore from "./Stores/DateStore";

const DatePicker = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const selectedDate = useDateStore((state: any) => state.selectedDate);
  const setSelectedDate = useDateStore((state: any) => state.setSelectedDate);

  const handleDayClick = (dayIndex: number) => {
    const today = new Date();
    const daysDiff = dayIndex - today.getDay();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysDiff);
    setSelectedDate(targetDate.toString());
  };

  return (
    <div className="datePicker">
      {days.map((day, index) => (
        <div
          key={day}
          className={`dayButton ${new Date(selectedDate).getDay() === index ? "selected" : ""}`}
          onClick={() => handleDayClick(index)}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default DatePicker;
