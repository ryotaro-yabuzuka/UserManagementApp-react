import { useCallback, useState } from "react";
import { User } from "../types/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザ情報を特定し、モーダルを表示する
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    // find配列に使えて、条件に一致する最初の要素を返してくれる
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
