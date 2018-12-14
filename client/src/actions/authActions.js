import { TEST_DISPATCH } from "./type";
//Register user 
export const registeruser =(userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
}