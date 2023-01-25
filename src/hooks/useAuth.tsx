import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/user";
import { useHistory } from "react-router-dom";

import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const UseAuth = () => {
  const { showMessage } = useMessage();
  const history = useHistory();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      // ``で囲うことで、末尾に任意の文字列を挿入可能にする
      axios
        .get<[User]>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
