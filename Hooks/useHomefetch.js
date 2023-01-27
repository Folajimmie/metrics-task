import { useState, useEffect } from "react";
import API from '../services/api/queries/metrics';

export const useHomeFetch = (id) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
    const fetchMetrics = async() =>{
        try{
            setError(false);
            setLoading(true);

            const countries = await API.totalCountries(id);
            const merchants = await API.totalMerchants(id);
            const methods = await API.paymentMethods(id);
            const gateways = await API.paymentGateways(id);
            const count = await API.transactionsCount(id);
            const tAmount = await API.transactionsAmount(id);
            const dailyT = await API.dailyTransactions(id);
            const weeklyT = await API.weeklyTransactions(id);
            const monthlyT = await API.monthlyTransactions(id);
            const weeklyTA = await API.weeklyTransactionAmount(id);
            const dailylyTA = await API.dailyTransactionAmount(id);
            const monthlyTA = await API.monthlyTransactionAmount(id);

            setState({
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
            })

        }catch(error){
            setError(true);
        }
        setLoading(true);

    }
        fetchMetrics()
    }, [id]);

    return{ state, loading, error };
};

