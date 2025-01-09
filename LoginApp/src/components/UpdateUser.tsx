import { FormEvent, useContext, useRef, useState } from "react"
import { closeUpdate } from "./LoggedIn";
import { userContext } from "./HomePage";
import { Button, Box, Modal, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdateUser = () => {
    const [open, setOpen] = useState(true);
    const [close, setClose] = useContext(closeUpdate);
    const [user, dispatch] = useContext(userContext);


    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submit = (e: FormEvent) => {
        e.preventDefault();
       
        dispatch({
            type: 'UPDATE',
            data: {
                firstName: firstNameRef.current?.value || user.firstName,
                email: emailRef.current?.value || user.email,
                lastName: lastNameRef.current?.value || user.lastName,
                address: addressRef.current?.value || user.address,
                phone: phoneRef.current?.value || user.phone,
                password: passwordRef.current?.value || user.password
            }
        });
        setOpen(!open);
        setClose(!close);
    }
    return (
        <>
            <Modal open={open} onClose={() => setOpen(!open)}>
                <Box sx={style}>
                    <form onSubmit={submit}>
                        <TextField label="firstName" inputRef={firstNameRef} defaultValue={user.firstName} />
                        <TextField label="lastName" inputRef={lastNameRef} defaultValue={user.lastName} />
                        <TextField label="email" inputRef={emailRef} defaultValue={user.email} />
                        <TextField label="address" inputRef={addressRef} defaultValue={user.address} />
                        <TextField label="phone" inputRef={phoneRef} defaultValue={user.phone} />
                        <TextField label="password" inputRef={passwordRef} defaultValue={user.password} />

                        <Button type="submit">Save Change</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
export default UpdateUser