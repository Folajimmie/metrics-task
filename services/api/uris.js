const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// const BASE_URL = '/api';
const URI_MAP = {
    auth: {
        signin: `${BASE_URL}/api/v1/auth/signin`
    },
    metrics: {
        totalCountries: `${BASE_URL}/api/v1/metrics/total-countries`,
        totalMerchants: `${BASE_URL}api/v1/metrics/total-merchants`,
        totalPaymentMethods: `${BASE_URL}/api/v1/metrics/total-payment-methods`,
        totalPaymentGateways: `${BASE_URL}/api/v1/metrics/total-payment-gateways`,
        totalTransactionsCount: `${BASE_URL}/api/v1/metrics/total-transactions-count`,
        totalTransactionsAmount: `${BASE_URL}/api/v1/metrics/total-transactions-amount`,
        totalDailyTransactions: `${BASE_URL}/api/v1/metrics/average-daily-transactions`,
        totalWeeklyTransactions: `${BASE_URL}/api/v1/metrics/average-weekly-transactions`,
        totalMonthlyTransactions: `${BASE_URL}/api/v1/metrics/average-monthly-transactions`,
        totalMonthlyTransactionAmount: `${BASE_URL}/api/v1/metrics/average-monthly-transactions-amount`,
        totalWeeklyTransactionAmount: `${BASE_URL}/api/v1/metrics/average-weekly-transactions-amount`,
        totalDailyTransactionAmount: `${BASE_URL}/api/v1/metrics/average-daily-transactions-amount`
    }
};

export default URI_MAP;