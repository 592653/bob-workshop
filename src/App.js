import * as React from "react";
import { Stack } from "@mui/material";
import Profile from "./components/Profile";
import Description from "./components/Description";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

export default function App() { //eller Index
  return (
    <Stack maxWidth="sm" direction="column" spacing={2} margin="auto" p={2} >
      <Header/>
      <Profile />
      <Description />
      <Projects/>
      <ContactForm />
      <Footer/>
    </Stack>

  );
}

// export default function App() { 
// return (
//   <Routes>
//   <Route path="/">
//     <Route index element={<Index />} />
    
//   </Route>
// </Routes>

// )
// }
//ctrl k c for å slashe ut
