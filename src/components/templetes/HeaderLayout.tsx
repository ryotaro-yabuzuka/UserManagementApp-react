import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

//ReactNodeの型は、<>で囲ったものをテ定義できる
type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
