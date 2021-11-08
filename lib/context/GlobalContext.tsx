import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface LoginModalContextState {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const loginModalContextInitialState = {
  visible: false,
  setVisible: () => null,
};

export const LoginModalContext = createContext<LoginModalContextState>(
  loginModalContextInitialState
);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{
        visible: loginModalVisible,
        setVisible: setLoginModalVisible,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
}
