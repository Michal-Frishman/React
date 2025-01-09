import { createContext, Dispatch, FormEvent, useReducer, useRef, useState } from "react"
import { UserType } from "./UserType"
import { Button, Box, Grid2, Modal, TextField } from '@mui/material';
import LoggedIn from "./LoggedIn";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

type action = {
    type: 'DELETE' | 'CREATE' | 'UPDATE',
    data: partUser
}

type partUser = Partial<UserType>;

const userReducer = (state: UserType, action: action): UserType => {
    switch (action.type) {
        case 'CREATE':
            return { ...state, ...action.data }
        case 'UPDATE':
            return { ...state, ...action.data }
        default:
            return state
    }
}

export const userContext = createContext<[UserType, Dispatch<action>]>([{} as UserType, () => { }]);

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(false);

    const [user, dispatch] = useReducer(userReducer, {} as UserType);

    const firstNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const firstName = firstNameRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        if (!firstName || !password) {
            alert("Please fill out all fields.");
            return;
        }
        setLogin(true);
        dispatch({
            type: 'CREATE',
            data: { firstName, lastName: "", password, email: "", address: "", phone: "" }

        });
        setShowModal(false);
    }
    return (
        <>
            <header style={{ padding: '5%' }}>
            <Grid2 container>
            <Grid2 size={4}>
                {
                    !login && <Box component="section" sx={{ fontSize: '20px', fontWeight: 'bold', p: 1, border: '2px dashed grey' }}>Home Page</Box>
                }
                <userContext.Provider value={[user, dispatch]}>
                    {!login ?
                        <Button color="primary" variant="contained" onClick={() => setShowModal(true)}>Login</Button>
                        : <LoggedIn />}
                </userContext.Provider>

                <Modal open={showModal} onClose={() => setShowModal(false)}>
                    <Box sx={style}>
                        <form onSubmit={submit}>
                            <TextField label='name' inputRef={firstNameRef} />
                            <TextField label='passoard' inputRef={passwordRef} />
                            <Button type="submit" color="primary" variant="contained" >Save</Button>
                        </form>
                    </Box>
                </Modal>
                </Grid2>
                </Grid2 >
            </header>
            <body></body>

        </>
    )
}
export default HomePage