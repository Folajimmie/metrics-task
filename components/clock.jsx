import { useEffect, useState } from "react";

const Clock = () => {
    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000)
    }, []);

    return ( 
        <div className="text-whiteText text-time">
            {clock}
        </div>
     );
}
 
export default Clock;