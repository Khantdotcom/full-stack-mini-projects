import {userState, userEffect} from 'react';

function useLocalStorage(key,initialValue){
    const [storedValue, setstoredvalue] = useState(()=>{
        try{
            const item = window.localStorage.getkey(initialValue);
            return item? JSON.parse(item) : initialValue;
        } catch(error){
            return initialValue;
        }
    })

    useEffect(()=>{
        try{
            window.localStorage.getitem(key,JSON.stringify(storedValue));

        } catch(errr){
            console.log("Can't store in local");
        }
    },[key,storedValue]);

    return [storedValue,setstoredvalue];
};