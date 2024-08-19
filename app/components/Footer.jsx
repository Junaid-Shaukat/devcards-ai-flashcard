import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.greenTheme[950], // Updated background color
        p: 6,
        marginTop: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              About Us
            </Typography>
            <Typography color="text.secondary">
              We are <span style={{ fontWeight: 600 }}>BrainBoost Cards</span>,
              dedicated to providing the best service to our students.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Contact Us
            </Typography>
            <Typography color="text.secondary">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography color="text.secondary">
              Email: info@brainboost.com
            </Typography>
            <Typography color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="text.secondary">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="text.secondary"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="text.secondary">
              <Twitter />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              color="text.secondary"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="text.secondary" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}





// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
// import { Box } from "@mui/material";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         backgroundColor: (theme) => theme.palette.tangaroa[950],
//         p: 6,
//         marginTop: 10,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h6" color="text.secondary" gutterBottom>
//               About Us
//             </Typography>
//             <Typography color="text.secondary">
//               We are <span style={{ fontWeight: 600 }}>BrainBoost Cards</span>,
//               dedicated to providing the best service to our students.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h6" color="text.secondary" gutterBottom>
//               Contact Us
//             </Typography>
//             <Typography color="text.secondary">
//               123 Main Street, Anytown, USA
//             </Typography>
//             <Typography color="text.secondary">
//               Email: info@brainboost.com
//             </Typography>
//             <Typography color="text.secondary">
//               Phone: +1 234 567 8901
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Typography variant="h6" color="text.secondary" gutterBottom>
//               Follow Us
//             </Typography>
//             <Link href="https://www.facebook.com/" color="text.secondary">
//               <Facebook />
//             </Link>
//             <Link
//               href="https://www.instagram.com/"
//               color="text.secondary"
//               sx={{ pl: 1, pr: 1 }}
//             >
//               <Instagram />
//             </Link>
//             <Link href="https://www.twitter.com/" color="text.secondary">
//               <Twitter />
//             </Link>
//             <Link
//               href="https://www.linkedin.com/"
//               color="text.secondary"
//               sx={{ pl: 1, pr: 1 }}
//             >
//               <LinkedIn />
//             </Link>
//           </Grid>
//         </Grid>
//         <Box mt={5}>
//           <Typography color="text.secondary" align="center">
//             {"Copyright © "}
//             <Link color="text.secondary" href="https://your-website.com/">
//               Your Website
//             </Link>{" "}
//             {new Date().getFullYear()}
//             {"."}
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
