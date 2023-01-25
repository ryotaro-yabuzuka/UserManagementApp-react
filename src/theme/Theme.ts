import { extendTheme } from "@chakra-ui/react";

// 数値が大きいほど、色が濃い
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});

//他で使用できるようにする
export default theme;
