import Card from "../components/card";
import { data } from "../components/data";

export default function Nigeria() {
    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 pb-7">
            {data.map((pic, i) => {
                return <Card key={i} image={pic.image} title={pic.title} figure={pic.figure}/>
            })}
        </div>
    );                
};