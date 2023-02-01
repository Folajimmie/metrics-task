// import Card from "../components/card";
// import { data } from "../components/data";

// export default function Nigeria() {
//     return(
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-6 pb-7">
//             {data.map((pic, i) => {
//                 return <Card 
//                             key={i} 
//                             className={`${
//                                 i === 0 
//                                     ? 'col-span-3 md:col-span-3 lg:col-span-3' 
//                                     : i == 1 
//                                     ? 'col-span-3 md:col-span-3 lg:col-span-3' 
//                                     : 'col-span-3 md:col-span-2 lg:col-span-2'}`}
//                             image={pic.image} 
//                             title={pic.title} 
//                             figure={pic.figure}
//                         />
//             })}
//         </div>
//     );                
// };