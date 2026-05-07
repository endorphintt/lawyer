import { TOGGLE_MENU, TOGGLE_CONTACT } from './consts'

export interface ToggleMenuAction {
    type: typeof TOGGLE_MENU
}

export interface ToggleContactAction {
    type: typeof TOGGLE_CONTACT
}

export type AppActions = ToggleMenuAction | ToggleContactAction

export const toggleMenu = (): ToggleMenuAction => ({
    type: TOGGLE_MENU,
})

export const toggleContact = (): ToggleContactAction => ({
    type: TOGGLE_CONTACT,
})
