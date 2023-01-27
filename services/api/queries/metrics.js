import URI_MAP from '../uris';
import { axios, getAuthToken } from '../../../config/axios';

export const totalCountries = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalCountries}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};

export const totalMerchants = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalMerchants}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const paymentMethods = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalPaymentMethods}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const paymentGateways = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalPaymentGateways}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const transactionsCount = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalTransactionsCount}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const transactionsAmount = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalTransactionsAmount}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const dailyTransactions = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalDailyTransactionss}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const weeklyTransactions = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalWeeklyTransactions}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const monthlyTransactions = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalMonthlyTransactions}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const monthlyTransactionAmount = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalMonthlyTransactionAmount}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const weeklyTransactionAmount = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalWeeklyTransactionAmount}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};
export const dailyTransactionAmount = async (id) => {
    const res = await axios.get(`${URI_MAP.metrics.totalDailyTransactionAmount}/${id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    });

    return res;
};