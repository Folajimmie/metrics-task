import { useEffect, useState } from "react";
import Money from '../assets/money.svg';
import Folder from '../assets/card.svg';
import People from '../assets/people.svg';
import URI_MAP from '../services/api/uris';
import { axios, getAuthToken } from "../config/axios";


export const useHomefetch = () => {
  const [countries, setCountries] = useState();
  const [merchants, setMerchants] = useState();
  const [paymentMethods, setPaymentMethods] = useState();
  const [paymentGateways, setPaymentGateways] = useState();
  const [transactionsCount, setTransactionsCount] = useState();
  const [transactionsAmount, setTransactionsAmount] = useState();
  const [dailyTransactions, setDailyTransactions] = useState();
  const [weeklyTransactions, setWeeklyTransactions] = useState();
  const [monthlyTransactions, setMonthlyTransactions] = useState();
  const [monthlyTransactionAmount, setMonthlyTransactionAmount] = useState();
  const [weeklyTransactionAmount, setWeeklyTransactionAmount] = useState();
  const [dailyTransactionAmount, setDailyTransactionAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
    
  let token;

  if(typeof window !== "undefined"){
    token = localStorage.getItem('token')
  };

  const getCountries = async (token) => {
    setLoading(true)

    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalCountries}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
            setLoading(false)
          if (res.status) {
            setCountries(res.data);
          }
        });
    } catch (error) {
        setLoading(false)
      console.log(error);
    }
  };

  const getMerchants = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalMerchants}`,
          {
            headers: {
              Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setMerchants(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getPaymentMethods = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalPaymentMethods}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setPaymentMethods(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getPaymentGateways = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalPaymentGateways}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setPaymentGateways(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getTransactionsCount = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalTransactionsCount}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setTransactionsCount(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getTransactionsAmount = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalTransactionsAmount}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setTransactionsAmount(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };
  const getDailyTransactions = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalDailyTransactions}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setDailyTransactions(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getWeeklyTransactions = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalWeeklyTransactions}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setWeeklyTransactions(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getMonthlyTransactions = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalMonthlyTransactions}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setMonthlyTransactions(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getMonthlyTransactionAmount = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalMonthlyTransactionAmount}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setMonthlyTransactionAmount(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getWeeklyTransactionAmount = async (token) => {
    setLoading(true)
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalWeeklyTransactionAmount}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setWeeklyTransactionAmount(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getDailyTransactionAmount = async (token) => {
    setLoading(true)
    setError('')
    try {
      await axios
        .get(
            `${URI_MAP.metrics.totalWeeklyTransactionAmount}`,
          {
            headers: {
                Authorization: getAuthToken(),
            },
          }
        )
        .then((res) => {
          setLoading(false)
          if (res.status) {
            setDailyTransactionAmount(res.data);
          }
        });
    } catch (error) {
      setLoading(false)
        setError(error?.response?.error.message)
      console.log(error);
    }
  };
//   
  useEffect(() => {
    getCountries();
    getMerchants();
    getPaymentMethods();
    getPaymentGateways();
    getTransactionsCount();
    getTransactionsAmount();
    getDailyTransactions();
    getWeeklyTransactions();
    getMonthlyTransactions();
    getMonthlyTransactionAmount();
    getWeeklyTransactionAmount();
    getDailyTransactionAmount();
    
  }, []);

  const toCurrency = (number) => {
    return Intl.NumberFormat('en-us', {
      style: 'currency', 
      currency: 'NGN', 
      minimumFractionDigits: 2
    }).format(number);
  }

  const toNumber = (number) => {
    return Math.round(
          (number + Number.EPSILON) * 100
       )/100
  }

 const data = [
    {
        "id": 1,
        "image": Money,
        "title": 'Total Transaction',
        "figure": toCurrency(transactionsAmount?.data),
    },
    {
            "id": 2,
        "image": Folder,
        "title": 'Number of Transaction',
        "figure": transactionsCount?.data,
    },
    {
            "id": 3,
        image: People,
        title: 'Total Countries',
        figure: countries?.data,
    },
    {
            "id": 4,
        image: Folder,
        title: 'Total Payment Method',
        figure: paymentMethods?.data,
    },
    {
            "id": 5,
        image: Folder,
        title: 'Total Payment Gateway',
        figure: paymentGateways?.data,
    },
    {
            "id": 6,
        image: People,
        title: 'Total Merchants',
        figure: merchants?.data,
    },
    {
            "id": 7,
        image: Folder,
        title: 'Average Daily Transaction',
        figure: toNumber(dailyTransactions?.data),
    },
    {
            "id": 8,
        image: Folder,
        title: 'Average Weekly Transaction',
        figure: toNumber(weeklyTransactions?.data),
    },
    {
            "id": 9,
        image: Folder,
        title: 'Average Monthly Transaction',
        figure: toNumber(monthlyTransactions?.data),
    },
    {
        "id": 10,
        image: Money,
        title: 'Average Daily Transaction',
        figure: toCurrency(dailyTransactionAmount?.data),
    },
    {
            "id": 11,
        image: Money,
        title: "Average Weekly Transaction",
        figure: toCurrency(weeklyTransactionAmount?.data),
    },
    {
            "id": 12,
        image: Money,
        title: 'Average Monthly Transaction',
        figure: toCurrency(monthlyTransactionAmount?.data),
    },
];
  return { error, loading, data };
};

