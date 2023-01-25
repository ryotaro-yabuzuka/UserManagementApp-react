import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  // Hooksを使うことで簡単にStateや関数を作成しなくてもImportできる
  const { onClose, onOpen, isOpen } = useDisclosure();
  const history = useHistory();

  //eslintdisableで、非活性にしても良い
  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );
  const onClicKSetting = useCallback(() => history.push("/home/setting"), []);
  return (
    <>
      {/* //FlexBoxを簡単に実現できるFlexを使用 */}
      {/* //as=をつけることでrendaringのタグ付けができる */}
      {/* //どのタグとしてレンダリングするかがわかる */}
      {/* //bgでColor */}
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-betweem"
        padding={{ base: 3, md: 5 }}
      >
        {/* _hoverとかのスタイルも簡単に指定できる */}
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          {/* HTMLの表現ができるコンポーネント */}
          {/* 画面の大きさごとに文字の大きさを変える（レスポンシブにするにはbase:で指定する） */}
          {/* ブレイクポイントを指定することもできる 今回はmd以上になったらlgにする処理を記述 */}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        {/* flexGrowは伸び率 */}
        {/* displeayを"none"にすることで、displayを非表示、breakpointを指定することで表示するようにする */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          {/* BoxはDivみたいなもの */}
          {/* prはpaddingright */}
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClicKSetting}>設定</Link>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} />
        <Box>
          <MenuIconButton onOpen={onOpen} />
        </Box>
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClicKSetting}
      />
    </>
  );
});
