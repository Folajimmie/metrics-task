import Card from "../components/card";
import { useEffect } from "react";
// import { useParams } from 'react-router-dom';
import Money from '../assets/money.svg';
import People from '../assets/people.svg';
import Folder from '../assets/card.svg';
// import { data } from "../components/data";
import { useHomeFetch } from "../Hooks/useHomefetch";
import { axios, getAuthToken } from "../config/axios";

export default function Global() {
    // const {id} = useParams();

    // const token = getAuthToken()
    
    const { state: 
            loading, 
            error, 
            countries,
            merchants,
            methods,
            gateways,
            count,
            tAmount,
            dailyT,
            weeklyT,
            monthlyT,
            weeklyTA,
            dailylyTA,
            monthlyTA
        } = useHomeFetch(1);
        
        const getCountries = async () => {
            await axios
              .get("https://metrics-dev.api.onlypassafrica.com/api/v1/metrics/total-countries", {
              headers: {
                        Authorization: token
                    
                    }})
                
              .then((res) => {
                return console.log(res);
              });
            
          };

    
        useEffect (() => {
            // console.log('hello');
             const win = localStorage.getItem('token')
             console.log(win)
            //  if(
            //     token
            //  ){
            //     getCountries();
            //  }
            // console.log(countries);
        }, [])



    if (loading) return <div>loading...</div>
    if (error) return <div>An error occured</div>

    

    return(
        <div className="w-full">
            
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-1 lg:grid-cols-6 lg:gap-[0.7rem] pb-7`}> 
                <Card image={Money} name={countries.name}/>
                
            </div>
        </div>
    );                
};
