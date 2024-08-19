import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        height: "100vh",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        sx={{
          color: (theme) => theme.palette.greenTheme[950], // Updated to green theme
        }}
      />
    </Box>
  );
};

export default Loader;




// import { Box, CircularProgress } from "@mui/material";

// const Loader = () => {
//   return (
//     <Box
//       display={"flex"}
//       alignContent={"center"}
//       justifyContent={"center"}
//       width={"100%"}
//       sx={{
//         height: "100vh",
//         zIndex: 999,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <CircularProgress sx={{
//         color: theme => theme.palette.tangaroa[950]
//       }} />
//     </Box>
//   );
// };

// export default Loader;
