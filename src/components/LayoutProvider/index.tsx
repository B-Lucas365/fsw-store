import StyledComponentsRegistry from "../../lib/registry";
import { AuthProvider } from "../../providers/auth";
import { GlobalStyles } from "../../styles/global";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  return (
    <main>
      <AuthProvider>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <GlobalStyles />
          <Footer />
        </StyledComponentsRegistry>
      </AuthProvider>
    </main>
  );
};
