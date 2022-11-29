import { useEffect, useState } from "react";
import Cal from '../assets/calendar.svg';
import Image from 'next/image'


const Calendar = () => {
    const [calendar, setCalendar] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setCalendar(date.toDateString());
        }, 1000)
    }, []);

    return ( 
        <div className="text-whiteText text-hover flex gap-1 mt-1">
            {calendar}
            <Image src={Cal} alt='logo' className="mb-2"/> 
        </div>
     );
}
 
export default Calendar;