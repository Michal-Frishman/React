import { Avatar, Button, Stack } from "@mui/material";
import { createContext, Dispatch, useContext, useState } from "react";
import UpdateUser from "./UpdateUser";
import { userContext } from "../../App";
export const closeUpdate = createContext<[boolean, Dispatch<boolean>]>([false, () => { }])

const LoggedIn = () => {
   
    const stringAvatar = (name: string) => {
        if (name == "" || name == undefined) {
            return {
                sx: {
                    bgcolor: 'rgb(143, 157, 168)',
                },
                children: `?`
            };
        }
        else {
            return {
                sx: {
                    bgcolor: "rgb(143, 157, 168)",
                },
                children: `${name.split(' ')[0][0]}`
            }
        };
    }
    const [update, setUpdate] = useState(false);
    const [user, dispatch] = useContext(userContext);
    const color='rgb(143, 157, 168)'
    return (
        <>
            <>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={4}>
                        <Avatar {...stringAvatar(user.firstName)} >
                            {(user.firstName ? user.firstName[0] : '')}
                        </Avatar>
                        <h4> Hello {user.firstName}</h4>
                    </Stack>
                    <Button sx={{backgroundColor:color,marginRight:1,color:"white"
                    }} variant="outlined" onClick={() => setUpdate(!update)}>
                        Update Details
                    </Button>
                </Stack>
                <closeUpdate.Provider value={[update, setUpdate]}>
                    {update &&
                        <UpdateUser />
                    }
                </closeUpdate.Provider>
            </>
        </>
    )
}
export default LoggedIn