export const getApiResponseErrorMessage = (error) => {
    const { data, message } = error.response;
    const concatenatedMessages = data.hasOwnProperty('data')
      ? [Object.values(data.data)].join(', ')
      : [Object.values(data)].join(', ');
    const apiResponseMessage = message ? message + ', ' + concatenatedMessages : concatenatedMessages;
  
    return apiResponseMessage;
  };