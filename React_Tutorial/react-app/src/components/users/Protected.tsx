import {useLocation} from 'react-router-dom'
function Protected(){
    
const { state } = useLocation(); 

var user = {
    "hash ": state.hash,
    "salt ": state.salt,
    "username ": state.username,
    "token ": state.token 
};
            console.log("*************************THIS IS THE PROTECTED SITE***************************");
		    console.log("***********Username:   "+user['username '] +   " ***********************");

            console.log(
                "usenrame: "+user['username '] + "\n"+
                "salt: "+user['salt ']+ "\n"+
                "hash: "+user['hash ']+ "\n"+
                "token: "+user['token ']+ "\n"
              
     );
     
        var url = "http://localhost:3000/users/protected";
        var bearer = user['token '];
        fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    })
return (
        <>         
            <div>
                 <form className="Login" >
                <input type="name" />                
                <input type="password"  />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
            </div> 
          
        </>
    );
	
}

 

/*
    
function Protected(){

const { state } = useLocation(); const {data} = state;

console.log("*************FRA REACT PROTECTED: "+data);
    /*

        var url = "https://localhost:3000/users/protected";
        var bearer = 'Bearer ' + bearer_token;
    fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json'
        }
    }).then(responseJson => {
        var items = JSON.parse(responseJson._bodyInit);
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
    }));******************************/
    /*
         const response = await fetch('https://localhost:3000/users/protected');
    const data = await response.json();
    if(data ==!null){
    console.log("DATA NOT EMPTY");
    console.log("DATA: " + data);
    }else{
        console.log("DATA IS NULL");
    }
    */
       /* useEffect(() => {
    // GET request using fetch with set headers
    const headers = { 'Content-Type': 'application/json' }
    fetch('/users/protected', { headers })
        .then(response => response.json())
        .then(data => console.log(data));
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
    }
*/
    

export default Protected;
    