import './DatePicker.css';
//import useFilmStore from './Stores/FilmStore';
import useDateStore from './Stores/DateStore';

const DatePicker = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const selectedDate = useDateStore((state: any) => state.selectedDate);
    const setSelectedDate = useDateStore((state: any) => state.setSelectedDate);

    const handleDayClick = (dayIndex: number) => {
        const today = new Date();
        const todayIndex = (today.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
        const daysDiff = dayIndex - todayIndex;
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + daysDiff);
        setSelectedDate(targetDate.toISOString().split('T')[0]);
    };

    return (
        <div className="datePicker">
            {days.map((day, index) => (
                <div 
                    key={day}
                    className={`dayButton ${selectedDate === day ? 'selected' : ''}`}
                    onClick={() => handleDayClick(index)}
                >
                    {day}
                </div>
            ))}
        </div>
    );
};

export default DatePicker;