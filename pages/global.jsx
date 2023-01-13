import Card from "../components/card";
import { data } from "../components/data";

export default function Global() {
    return(
        <div className="w-full">
            
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-1 lg:grid-cols-6 lg:gap-[0.7rem] pb-7`}>
                {data.map((pic, i) => {
                    return <Card 
                                key={i} 
                                className={`${
                                    i === 0
                                      ? "col-span-3 md:col-span-3 lg:col-span-3"
                                      : i == 2
                                      ? "col-span-3 md:col-span-1 lg:col-span-1"
                                      : "col-span-3 md:col-span-2 lg:col-span-2"
                                  }`}                    
                                image={pic.image} 
                                title={pic.title} 
                                figure={pic.figure}
                            />
                })}
            </div>
        </div>
    );                
};
