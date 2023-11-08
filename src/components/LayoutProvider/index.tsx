import StyledComponentsRegistry from "../../lib/registry";
import { AuthProvider } from "../../providers/auth";
import { GlobalStyles } from "../../styles/global";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Flex, Flex1 } from "./styles";

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  return (
    <main>
      <AuthProvider>
        <StyledComponentsRegistry>
          <Flex direction={"column"}>
            <Header />
            <Flex1>{children}</Flex1>
            <GlobalStyles />
            <Footer />
          </Flex>
        </StyledComponentsRegistry>
      </AuthProvider>
    </main>
  );
};
