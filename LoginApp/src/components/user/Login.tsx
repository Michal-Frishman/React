import { FormEvent, useContext, useRef, useState } from "react"
import { Button, Box, TextField, Modal } from '@mui/material';
import LoggedIn from "./LoggedIn";
import axios, { AxiosError } from "axios"
import { buttonStyle, UserContext } from "../../App";
export const style = {
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
const HomePage = () => {
    const url = "http://localhost:3000/api/user";
    const [finalUrl, setFinalUrl] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [login, setLogin] = useState(false);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null)
    const [user, dispatch] = useContext(UserContext);
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                finalUrl,
                {
                    email: emailRef.current?.value,
                    password: passwordRef.current?.value
                })
            const login = finalUrl.indexOf('login') !== -1 ? true : false
            const id = login ? res.data.user.id : res.data.userId;
            const firstName = login ? res.data.user.firstName : ''
            const password = passwordRef.current?.value || "";
            const email = emailRef.current?.value || ""
            const lastName = login ? res.data.user.lastName : ''
            const address = login ? res.data.user.address : ''
            const phone = login ? res.data.user.phone : ''
            setLogin(true);
            dispatch({
                type: 'CREATE',
                data: { id, firstName, lastName, password, email, address, phone }
            });
            setShowModal(false);
        } catch (e: AxiosError | any) {
            console.log("the error" + e);
            if (e.response?.status === 400)
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
    const color = "rgb(215, 155, 154)"
    return (
        <>
            {!login ?
                <div>
                    <Button sx={{ backgroundColor: color, marginRight: 1, padding: "8px" }} variant="contained" onClick={() => { setShowModal(true); setFinalUrl(url + '/login') }}>Sign in</Button>
                    <Button sx={{ backgroundColor: color, marginRight: 1, padding: "8px" }} variant="contained" onClick={() => { setShowModal(true); setFinalUrl(url + '/register') }}>Sign up</Button>
                </div> :
                <LoggedIn />}
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <Box sx={style}>
                    <form onSubmit={submit}>
                        <TextField label='email' inputRef={emailRef} type="email" />
                        <TextField label='passoard' inputRef={passwordRef} type="password" />
                        <Button type="submit" sx={buttonStyle}>Save</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
export default HomePage