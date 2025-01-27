import { Avatar, Button, Stack } from "@mui/material";
import { createContext, Dispatch, useContext, useState } from "react";
import UpdateUser from "./UpdateUser";
import HomePage, { userContext } from "./HomePage";

export const closeUpdate = createContext<[boolean, Dispatch<boolean>]>([false, () => { }])

const LoggedIn = () => {
    function stringToColor(string: string) {

        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }

    const stringAvatar = (name: string) => {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name[0]}`
        };
    }

    const [logOut, setLogOut] = useState(false);
    const [update, setUpdate] = useState(false);
    const [user, dispatch] = useContext(userContext);

    return (
        <>
            <>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={4}>
                        <Avatar {...stringAvatar(user.firstName)} />
                        <h4>{user.firstName}</h4>
                    </Stack>
                    <Button sx={{
                        height: 30,
                        width: 80,
                        fontSize: 12
                    }}
                        color="primary" variant="outlined" onClick={() => setUpdate(!update)}>
                        Update
                    </Button>
                    <Button sx={{
                        height: 30,
                        width: 80,
                        fontSize: 12
                    }}
                        color="primary" variant="outlined" onClick={() => setLogOut(true)}>
                        Log Out
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