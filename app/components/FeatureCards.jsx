import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 10,
  backgroundColor: theme.palette.greenTheme[200],  // Updated to use greenTheme
  boxShadow: theme.shadows[5],
  textAlign: "justify",
  minHeight: "250px",
}));

const FeatureCards = () => {
  return (
    <Container>
      <Box sx={{ my: 10, mx: 5 }}>
        <Typography
          variant="h2"
          color="text.primary"
          gutterBottom
          justifyContent="center"
          display="flex"
        >
          Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item>
              <Typography variant="h4" textAlign="center" gutterBottom>
                Easy to use
              </Typography>
              <Typography variant="body1"> {/* Changed variant to body1 */}
                Our intuitive design allows users to effortlessly create,
                organize, and manage flashcards, ensuring a seamless experience
                for efficient study and review.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Typography variant="h4" textAlign="center" gutterBottom>
                Powerful Search
              </Typography>
              <Typography variant="body1"> {/* Changed variant to body1 */}
                Easily sort and filter your flashcards by specific categories,
                terms, or definitions, allowing for focused study sessions and
                quick access to relevant content.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <Typography variant="h4" textAlign="center" gutterBottom>
                Customizable Learning
              </Typography>
              <Typography variant="body1"> {/* Changed variant to body1 */}
                Design personalized learning paths tailored to your specific
                study goals, ensuring a structured and effective approach to
                mastering new material.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureCards;

