import { createContext, Dispatch, FormEvent, useReducer, useRef, useState } from "react"
import { UserType } from "./UserType"
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
    // const [userID, setUserID] = useState<number>()

    const [user, dispatch] = useReducer(userReducer, {} as UserType);
    const [userId, setUserId] = useState<number>(0);

    const firstNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null)

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(finalUrl);
        console.log(firstNameRef.current?.value, passwordRef.current?.value, emailRef.current?.value);
        try {
            const res = await axios.post(
                finalUrl,
                {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                },
            )
            if (finalUrl.indexOf('login') !== -1)
                setUserId(res.data.user.id);
            const firstName = firstNameRef.current?.value || "";
            const password = passwordRef.current?.value || "";
            const email = emailRef.current?.value ||""
            if (!firstName || !password) {
                alert("Please fill out all fields.");
                return;
            }
            setLogin(true);
            dispatch({
                type: 'CREATE',
                data: { firstName, lastName: "", password, email, address: "", phone: "" }
            });
            setShowModal(false);
        } catch (e: any) {
            console.log("the error" + e);
            if (e.response?.status === 422)
                alert('user is already login')
            if (e.response?.status === 401)
                alert('user is not logged in, sign up');
            if (e.response?.status === 404)
                alert('סטטוס 404');
        }
        finally {
            emailRef.current!.value = ''
            passwordRef.current!.value = ''
            firstNameRef.current!.value = ''
        }
    }
    return (
        <>
            <idUser.Provider value={userId}>
                <Grid2 container>
                    <Grid2 size={4}>
                        {
                            !login && <Box component="section" sx={{ fontSize: '20px', fontWeight: 'bold', p: 1, border: '2px dashed grey' }}>Home Page</Box>
                        }
                    </Grid2>
                    <userContext.Provider value={[user, dispatch]}>
                        {!login ?
                            <div>
                                <Button color="primary" variant="contained" onClick={() => { setShowModal(true); setFinalUrl(url + '/login') }}>Sign in</Button>
                                <Button color="primary" variant="contained" onClick={() => { setShowModal(true); setFinalUrl(url + '/register') }}>Sign up</Button>
                            </div> :
                            <LoggedIn />}
                    </userContext.Provider>

                    <Modal open={showModal} onClose={() => setShowModal(false)}>
                        <Box sx={style}>
                            <form onSubmit={submit}>
                                <TextField label='name' inputRef={firstNameRef} />
                                <TextField label='passoard' inputRef={passwordRef} />
                                <TextField label='email' inputRef={emailRef} />
                                <Button type="submit" color="primary" variant="contained" >Save</Button>
                            </form>
                        </Box>
                    </Modal>
                </Grid2 >
            </idUser.Provider>
        </>
    )
}
export default HomePage