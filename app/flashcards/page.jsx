
"use client";

import { db } from "@/firebase.config";
import { useUser } from "@clerk/nextjs";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Page = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, router, user]);

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const flashcards = docSnap.data().flashcards || [];
        setFlashcards(flashcards);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user]);

  const handleClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

  if (!isLoaded && !isSignedIn) return <Loader />;
  return (
    <Box>
      <Appbar />
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ my: 4, color: (theme) => theme.palette.greenTheme[950] }}>
          My Flashcards
        </Typography>
        {flashcards.length === 0 ? (
          <Paper
            sx={{
              p: 4,
              align: "center",
              backgroundColor: (theme) => theme.palette.greenTheme[200],
            }}
          >
            <Typography variant="body1" component="div">
              You don&apos;t have any flashcards yet. <br /> To create one, go
              to the <Link href="/generate">Create Flashcard</Link> page.
            </Typography>
          </Paper>
        ) : (
          <Grid
            container
            columnSpacing={2}
            rowSpacing={1}
            sx={{ mt: 4, minHeight: "12rem" }}
          >
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: (theme) => theme.palette.greenTheme[100] }}>
                  <CardActionArea onClick={() => handleClick(flashcard.name)}>
                    <CardContent>
                      <Typography variant="h5" component="div" sx={{ color: (theme) => theme.palette.greenTheme[950] }}>
                        {flashcard.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <br />
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default Page;

