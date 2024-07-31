//FUNCTION TO HANDLE COMMAS
export const formatNumberWithCommas = (number: string) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  export const formatWithCommas = (number: number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };