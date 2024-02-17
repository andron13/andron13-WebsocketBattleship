export const parseData = (data) => {
  let parsedData;
  const dataAsString = data.toString();
  try {
    parsedData = JSON.parse(dataAsString);
  } catch (e) {
    console.error('Error parsing data:', e);
  }

  const result = {
    ...parsedData,
    data: parsedData.data ? JSON.parse(parsedData.data) : '',
  };
  console.log({ result });
  return result;
};
