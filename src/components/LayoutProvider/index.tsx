import StyledComponentsRegistry from "../../lib/registry";
import { GlobalStyles } from "../../styles/global";
import { Header } from "../Header";

interface ChildrenProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: ChildrenProps) => {
  return (
    <main>
      <StyledComponentsRegistry>
        <Header />
        {children}
        <GlobalStyles />
      </StyledComponentsRegistry>
    </main>
  );
};
