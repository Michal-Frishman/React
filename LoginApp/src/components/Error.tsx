const style = {
    color: 'red',
    fontWeight: 'bold'
}
const Error = ({ message }: { message: string }) => {
    return (
        <>
            <small style={style}>{message}</small>
        </>
    )
}
export default Error