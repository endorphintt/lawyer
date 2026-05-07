// reducers/rootReducer.ts
import { TOGGLE_MENU, TOGGLE_CONTACT } from './consts'
import { AppActions } from './actions'

export interface RootState {
    contact: ContactState
    menu: MenuState
}

export interface ContactState {
    isOpen: boolean
}

export interface MenuState {
    isOpen: boolean
}

const initialContactState: ContactState = {
    isOpen: false,
}

const initialMenuState: MenuState = {
    isOpen: false,
}

const rootReducer = (
    state: RootState = {
        contact: initialContactState,
        menu: initialMenuState,
    },
    action: AppActions
): RootState => {
    switch (action.type) {
        case TOGGLE_CONTACT:
            return {
                ...state,
                contact: {
                    ...state.contact,
                    isOpen: !state.contact.isOpen,
                },
            }
        case TOGGLE_MENU:
            return {
                ...state,
                menu: {
                    ...state.menu,
                    isOpen: !state.menu.isOpen,
                },
            }
        default:
            return state
    }
}

export default rootReducer
