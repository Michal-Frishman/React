import { createContext, Dispatch, FormEvent, useReducer, useRef, useState } from "react"
import { UserType } from "../UserType"
import { Button, Box, Grid2, Modal, TextField } from '@mui/material';
import LoggedIn from "./LoggedIn";
import axios, { AxiosError } from "axios"
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
export const idUser = createContext<number>(0)
const HomePage = () => {
    const url = "http://localhost:3000/api/user";
    const [finalUrl, setFinalUrl] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(false);
    const [user, dispatch] = useReducer(userReducer, {} as UserType);
    const [userId, setUserId] = useState<number>(0);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null)
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                finalUrl,
                {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                })
            if (finalUrl.indexOf('login') !== -1)
                setUserId(res.data.user.id);
            else
                setUserId(res.data.userId);

            const password = passwordRef.current?.value || "";
            const email = emailRef.current?.value || ""
            if (!password) {
                alert("Please fill out all fields.");
            }
            setLogin(true);
            dispatch({
                type: 'CREATE',
                data: { firstName: "", lastName: "", password, email, address: "", phone: "" }
            });
            setShowModal(false);
        } catch (e: any) {
            console.log("the error" + e);
            if (e.response?.status === 422)
                alert('user is already login')
            if (e.response?.status === 401)
                alert('user is not logged in, sign up');
            setShowModal(false);

        }
        finally {
            emailRef.current!.value = ''
            passwordRef.current!.value = ''
        }
    }
    return (
        <>
            {!login && <Box component="section" sx={{ fontSize: '20px', fontWeight: 'bold', p: 1, border: '2px dashed grey' }}>Home Page</Box>}
            <idUser.Provider value={userId}>
                <userContext.Provider value={[user, dispatch]}>
                    {!login ?
                        <div>
                            <Button color="primary" variant="contained" onClick={() => { setShowModal(true); setFinalUrl(url + '/login') }}>Sign in</Button>
                            <Button color="primary" variant="contained" onClick={() => { setShowModal(true); setFinalUrl(url + '/register') }}>Sign up</Button>
                        </div> :
                        <LoggedIn />}
                </userContext.Provider>
            </idUser.Provider>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <Box sx={style}>
                    <form onSubmit={submit}>
                        <TextField label='email' inputRef={emailRef} type="email" />
                        <TextField label='passoard' inputRef={passwordRef} type="password" />
                        <Button type="submit" color="primary" variant="contained" >Save</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
export default HomePage