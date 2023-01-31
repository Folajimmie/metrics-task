import Card from "../components/card";;
import { useHomefetch } from "../Hooks/useHomefetch";

export default function Global() {
    const { 
            error, 
            loading,
            data } = useHomefetch();

  console.log({ data });

    if (loading) return <div className="text-white">loading...</div>
    if (error) return <div>An error occured</div>
    
    
    return(
        <div className="">
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-1 lg:grid-cols-6 lg:gap-[0.7rem] pb-7`}>
            {data.map((item, id) => {
                 return <Card 
                             key={id} 
                             className={`${
                                id === 0 
                                    ? 'col-span-3 md:col-span-3 lg:col-span-3' 
                                    : id === 1 
                                    ? 'col-span-3 md:col-span-3 lg:col-span-1'
                                    ?  id === 2 
                                    : 'col-span-3 md:col-span-3 lg:col-span-1'
                                    : 'col-span-3 md:col-span-2 lg:col-span-2'}`}
                             image={item.image} 
                             title={item.title} 
                             figure={Math.round(
                                (item.figure + Number.EPSILON) * 100
                             )/100
                            }
                         />
             })}
            </div>
        </div>
    );                
};


