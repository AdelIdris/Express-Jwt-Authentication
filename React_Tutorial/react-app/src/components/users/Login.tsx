
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login(){
     const navigate = useNavigate();
   function handleClick(data:any) {
  
    fetch('http://localhost:3000/users/login/', {  // Enter your IP address here
      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(data),
        headers: {
    'Content-type': 'application/json; charset=UTF-8',
  } 
    }).then(async response =>{

      const data = await response.json();
        if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }else{
 
            var token = data.token.token;
            var username = data.user.username;
             var hash = data.user.hash;
              var salt = data.user.salt;
             	console.log("*************************LOGGIN ***************************");
		          console.log("***********Username:  "+ username +  "   ***********************");
/*
            console.log("usenrame: "+username + "\n"+
                "salt: "+salt+ "\n"+
                "hash: "+hash+ "\n"+
                "token: "+token+ "\n"
                           );*/
            navigate(
              '/users/protected',
              {
               state:{
                username: username,
                hash: hash,
                token: token,
                salt: salt
            }});
            }
            
    })
   
console.log("farvel");
  }
    const { register, handleSubmit, formState: { } } = useForm();

    const onSubmit = (data:any) => handleClick(data);

 return (
        <>         
            <div>
                 <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                <input type="name" {...register("username")} />                
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
            </div> 
          
        </>
    );
	
}


export default Login;
