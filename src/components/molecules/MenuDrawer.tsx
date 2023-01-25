import { memo, FC } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = (props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;
  return (
    // {/* Headerの外にDeawerを描きたいので、<></>で囲む */}
    // {/* placementでどこから出すか、 */}
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      {/* DrawerOverlayはDrawerが出ている時に、背景を暗くする */}
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button width="100%" onClick={onClickHome}>
              Top
            </Button>
            <Button width="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button width="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
