import { memo, FC } from "react";
import { IconButton, PropsOf } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = (props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      //variantをunstyledにすると枠線が消える
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
};
