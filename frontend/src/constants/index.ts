export const headerStyles = (styles: any = {}) => {
  return {
    headerBackTitle: " ",
    title: " ",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      height: 60,
      borderBottomWidth: 1,
      backgroundColor: "#fff",
      ...styles,
    },
  };
};
