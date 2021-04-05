import { Box, Flex, Grid } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <Grid h='100vh' templateRows='70px auto 50px'>
      <Header />
      {children}
      <Footer />
    </Grid>
  );
}

export default Layout;
