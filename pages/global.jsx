import Card from "../components/card";
import { data } from "../components/data";

export default function Global() {
    return(
        <div className="">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 pb-7">
                {data.map((pic, i) => {
                    return <Card key={i} image={pic.image} title={pic.title} figure={pic.figure}/>
                })}
            </div>
        </div>
    );                
};

// grid grid-cols-[259px_minmax(777px,_1fr)_324px] grid-rows-1 gap-[16px]
// mt-[39px] mb-12 flex flex-col items-center md:flex-row gap-[24px] md:flex-wrap md:justify-center
