import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { UseAuth } from "../../hooks/useAuth";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  const { login, loading } = UseAuth();

  // 初期値に""を置いていると、userIdを勝手に<string>に型推論してくれる
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        {/* <Stack>は 囲った中の要素を等間隔に配置するのに便利 */}
        <Stack spacing={6} px={10} py={4}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
