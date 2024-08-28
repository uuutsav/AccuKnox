import { selector } from "recoil";
import { categoryWidgetsState } from "../atoms/dashboardAtom";


export const isWidgetGraph = selector({
    key: 'isWidgetGraph',
    get: ({ get }) => {
        const widgets = get(categoryWidgetsState);
        // console.log(widgets)
        return widgets.length > 0 ? widgets[0].isGraph : false ;
    }
})