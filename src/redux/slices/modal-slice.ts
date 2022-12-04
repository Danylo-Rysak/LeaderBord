import {IModalState} from "../interfaces/redux-interfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IModalState = {
    isOpen: false,
    inscription: ""
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openWindow: (state, action: PayloadAction<string>) => {
            state.isOpen = true;
            state.inscription = action.payload
        },
        closeWindow: (state) => {
            state.isOpen = false;
        }
    }
})

export const {openWindow, closeWindow} = modalSlice.actions;