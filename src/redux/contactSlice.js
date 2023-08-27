import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = []

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(data) {
                return {
                    payload: {
                        id: nanoid(),
                        phone: data.number,
                        name: data.name,
                    }
                }
            }
        },
        removeContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        //    return state.filter(contact => contact.id !== action.payload.id)
        }
    }
})

export const {removeContact, addContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;