import { atom } from "recoil";

export const activeTabState = atom({
    key: 'activeTabState',
    default: 'CSPM Executive Dashboard',
})

export const tabsState = atom({
    key: 'tabsState',
    default: ['CSPM Executive Dashboard', 'CWPP Dashboard', 'Registry Scan', 'Ticket'],
})

// stores widgets of currently selected category
export const categoryWidgetsState = atom({
    key: 'categoryWidgetsState',
    default: [],
})

export const showAddWidgetScreen = atom({
    key: 'showAddWidgetScreen',
    default: false,
})