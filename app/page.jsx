"use client";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Link from "next/link";
import Appbar from "./components/Appbar";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import PricingCards from "./components/PricingCards";

export default function Home() {
  return (
    <Box>
      <Appbar />
      <Container>
        <Box
          height={"70vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          paddingLeft={"15%"}
        >
          <Typography variant="h1" gutterBottom>
            Unlock Smarter Learning with
          </Typography>
          <Typography paddingRight={"13%"} align="center" variant="h1" gutterBottom>
            DevCards
          </Typography>
          <Typography variant="h6">
            Revolutionize your study sessions with AI-powered flashcards
            tailored to your needs.
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"wrap"}
            gap={"1rem"}
            paddingTop={5}
            alignSelf={"center"}
          paddingRight={"15%"}

          >
            <Link href="/generate">
              <Button variant="contained">Get Started for FREE</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="outlined">View Pricing</Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <FeatureCards />
      <Divider />
      <Box id="pricing">
        <PricingCards />
      </Box>
      <Footer />
    </Box>
  );
}
