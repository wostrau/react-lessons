class ActionType {
    type: string | undefined
}

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state;
        default:
            throw new Error('Uncorrect action type')
    }
    return state;
}