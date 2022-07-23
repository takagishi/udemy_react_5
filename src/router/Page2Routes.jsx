import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/page2",
    index: true,
    children: <Page2 />
  },
  {
    path: ":id",
    index: false,
    children: <UrlParameter />
  }
];
