import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode
} from "react";

import { User } from "../types/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  // &で新しい方を追加できる
  loginUser: LoginUser | null;
  //UseStateの更新関数の型にDispatch<SetStateActionを渡す
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
