
import { useForm } from "react-hook-form";



function Register(){
    var user = null;
      function handleClick(data:any) {

    // Send data to the backend via POST
    fetch('http://localhost:3000/users/register/', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(data),
        headers: {
    'Content-type': 'application/json; charset=UTF-8',
  } // body data type must match "Content-Type" header

    })
    
  }
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data:any) => handleClick(data);

 return (
        <>         
            <div>
                 <form action="POST" className="Register" onSubmit={handleSubmit(onSubmit)}>
                <input type="name" {...register("username")} />                
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
            </div>
        </>
    );
	
}

/*<div >	
			{alertVisible && <Alert onClose={() =>setAlertVisibility(false)}> some alert</Alert>}

			<Button color="secondary" onClick={() => setAlertVisibility(true)}>my button</Button>
		
		</div> */
export default Register;
