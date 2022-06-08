import { FC } from "react";
import MenuInfo from "../src/Models/MenuInfo";
import MenuController from "../src/Screens/Menu/MenuController";
import News from "../src/Services/APIs/Info/News";

type iProps = {
  menus: MenuInfo[];
};
const Home:FC<iProps> = ({ menus }) => {
  return <MenuController menus={menus} />;
}
export default Home;

export async function getStaticProps() {
  console.log("Inicio SSG getStaticProps");
  const info = await News.getMenu();

  let arrayMenus:MenuInfo[] = [];

  if (info.status === 200) {
    arrayMenus = info.data.info as MenuInfo[];
  }

  return {
    props: {
      menus: arrayMenus,
    },
  };
}
