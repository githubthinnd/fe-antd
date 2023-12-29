import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { KEYS_MENU, NAMES_MENU, PATHS_MENU } from "./constants";

interface IMenuItem {
    key: string,
    path: string,
    name: string,
    icon?: any
}

export const linkMenu: IMenuItem[] = [
    {
        key:  KEYS_MENU.HOME,
        path: PATHS_MENU.HOME,
        name: NAMES_MENU.HOME,
        icon: <FaHome/>
    },
    {
        key:  KEYS_MENU.ABOUT,
        path: PATHS_MENU.ABOUT,
        name: NAMES_MENU.ABOUT,
        icon: <CgProfile/>
    },
]