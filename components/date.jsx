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
        <div className="text-white justify-center flex md:text-whiteText md:text-body2 md:flex md:gap-1 md:mt-1 lg:text-whiteText lg:text-hover lg:flex lg:gap-1 lg:mt-1">
            <p className="md:mt-1 lg:mt-0">{calendar}</p>
            <Image src={Cal} alt='logo' className="mb-2"/> 
        </div>
     );
}
 
export default Calendar;