import Card from "../components/card";
import MyLoader from "../components/loader";
import { useHomefetch } from "../Hooks/useHomefetch";

export default function Global() {
    const { error, loading, data, } = useHomefetch();
    
    if (error) return <div>{error}</div>

    return ( 
    <div className={`grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-[0.5rem] lg:grid-cols-6 lg:gap-[0.7rem] pb-7`}>
        {loading && [...Array(12)].map((k, id) => (
        <MyLoader key={k} className={`${
            id === 0 
                ? 'col-span-3 md:col-span-3 lg:col-span-3' 
                : id === 1 
                ? 'col-span-3 md:col-span-3 lg:col-span-1'
                ?  id === 2 
                : 'col-span-3 md:col-span-3 lg:col-span-1'
                : 'col-span-3 md:col-span-2 lg:col-span-2'}`
            }
        />
        ))} 

        {!loading && data.map((item, id) => {
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
                            figure={item.figure}
                         />
             })}
    </div>
    );
};


