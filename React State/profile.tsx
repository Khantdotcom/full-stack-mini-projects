function Profile(){
    const [username, setUsername] = useState("Guest")

    return (
        <div>
            <h>username</h>
        </div>
        <button onClick={()=> setUsername("Admin")}>Login as Admin</button>
    )


    useEffect(()=>{
        console.log("The name changed to:", username);
        return ( ) => {
            console.log("Cleanup is done to prevent memory waste")
        }
    },[username]);
}


useEffect(()=>{
    const fectchData = async () =>{
        const respone = await fetch('https://api.example.com')
    };

    fetchData();
},[]);

[theme]
