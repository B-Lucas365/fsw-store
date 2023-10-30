import StyledComponentsRegistry from "../../lib/registry";
import { AuthProvider } from "../../providers/auth";
import { GlobalStyles } from "../../styles/global";
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
        </StyledComponentsRegistry>
      </AuthProvider>
    </main>
  );
};
