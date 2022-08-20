import {reducer, StateType, TOGGLE_CONSTANT} from './reducer';

test('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    };
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    expect(newState.collapsed).toBe(true);
});

test('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    };
    const newState = reducer(state, {type: TOGGLE_CONSTANT});

    expect(newState.collapsed).toBe(false);
});

test('check correct action', () => {
    const state: StateType = {
        collapsed: true
    };
    expect(()=> {reducer(state, {type: 'FAKE_ACTION'})}).toThrowError();
});