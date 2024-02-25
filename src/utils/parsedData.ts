export const toParseData = (data) => {
  let parsedData: any;
  try {
    parsedData = JSON.parse(data);
  } catch (e) {
    console.error('Error parsing data:', e);
  }
  return {
    ...parsedData,
    data: parsedData.data ? JSON.parse(parsedData.data) : '',
  };
};
