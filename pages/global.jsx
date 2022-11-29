import Card from "../components/card";
import { data } from "../components/data";

export default function Global() {
    return(
        <div className="grid grid-cols-3 gap-4 pb-7">
            {data.map((pic, i) => {
                 return <Card key={i} image={pic.image} title={pic.title} figure={pic.figure}/>
            })}
        </div>
    );                
};

// grid grid-cols-[259px_minmax(777px,_1fr)_324px] grid-rows-1 gap-[16px]