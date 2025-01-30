const HomePage = () => {
    return (
        <div style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh', // גובה של 100% מהחלון
            width: '100vw', // רוחב של 100% מהחלון
            color: 'white', // כדי שהטקסט יהיה קריא
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1 style={{color:'black'}}>Welcome to the recipes site</h1>
        </div>
    );
}

export default HomePage;

