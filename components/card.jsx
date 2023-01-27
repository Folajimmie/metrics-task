import Image from 'next/image';
import { useEffect } from 'react';
import API from '../services/api/queries/metrics';
// import { useHomeFetch } from '../Hooks/useHomefetch';

const Card = ({image, name, figure, className}) => {
    // const {error, loading} = useHomeFetch();

    // const totalCountries = async (id) => {
    // const res = await fetch(`${URI_MAP.metrics.totalCountries}/${id}`, {
    //     headers: {
    //         Authorization: getAuthToken()
    //     }
    // });

    // return res;

    

    return ( 
    
        <div className={`px-[24px] py-[30px] bg-primary-100 border border-primary-80 rounded-md hover:bg-primary-40 ${className}`}>
            <Image src={image} alt='image'/>
            <p className='text-body text-whiteText'>{name}</p>
            {/* <p className='text-figure text-primary-60'>{figure}</p> */}
        </div>
     );
}
 
export default Card;