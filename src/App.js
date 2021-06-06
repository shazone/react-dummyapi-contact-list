import react, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import axios from 'axios';


const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "60bc0bef7e2ad7245e1ad94b";

function App () {
    const [contacts, setContacts] = useState({data:[]});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user/?limit=5`,{headers:{"app-id":APP_ID}})
        .then(({data})=>setContacts(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [])
    return (
    <div>
        <Header />
        <List loading={loading} contacts={contacts} />
        <Footer />
    </div> 
    )
}


export default App;