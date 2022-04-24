import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout/main";
import theme from "../lib/theme";
import "../styles/devicons.css";

function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
