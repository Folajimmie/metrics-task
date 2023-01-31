import URI_MAP from '../uris';
import { axios, getAuthToken } from '../../../config/axios';

const getCountries = async (token) => {
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
          if (res.status) {
            setCountries(res.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

export const totalMerchants = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalMerchants}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};

export const paymentMethods = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalPaymentMethods}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};


export const paymentGateways = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalPaymentGateways}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};


export const transactionsCount = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalTransactionsCount}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};


export const transactionsAmount = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalTransactionsAmount}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};

export const dailyTransactions = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalDailyTransactions}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};

// export const weeklyTransactions = async () => {
//     const res = await axios.get(`${URI_MAP.metrics.totalWeeklyTransactions}`, {
//         headers: {
//             Authorization: getAuthToken()
//         }
//     });

//     return res;
// };


export const monthlyTransactions = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalMonthlyTransactions}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};

export const monthlyTransactionAmount = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalMonthlyTransactionAmount}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};


export const weeklyTransactionAmount = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalWeeklyTransactionAmount}}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};


export const dailyTransactionAmount = async () => {
    const res = await axios.get(`${URI_MAP.metrics.totalDailyTransactionAmount}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};