import React, { useState ,useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
    const navigate =useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const CollectData = async (e)=>{
      e.preventDefault();
      console.log(name, email,password);
      let result = await fetch('http://localhost:5000/signUp', {
          method:'POST', 
          body:JSON.stringify({name,email,password}),
          headers:{
              'Content-Type':'application/json'
          },
      })
      result = await result.json(); 
      console.warn(result);
      localStorage.setItem('user', JSON.stringify(result))
      if(result){
          navigate('/');
          toast.success("SignUp successfully")
      }
      else{
        toast.error("Email already registered");
      }
  }
    useEffect(() => {
        const auth = localStorage.getItem('user'); 
        if(auth){
          navigate('/')
        }
    }, [])
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">Hello there!!</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            quibusdam optio, incidunt delectus mollitia, autem laboriosam
            repudiandae commodi, quae est dolorum? Consequuntur id corrupti nemo
            laboriosam nam inventore, debitis quam. Nemo qui deleniti esse
            doloribus commodi quia, culpa sapiente officia, eius earum odit
            voluptatibus enim ut quisquam repellendus ullam facilis a rem
            obcaecati? Assumenda laborum eaque, quisquam perspiciatis ad
            voluptates!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered border-primary"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered border-primary"
                  onChange={e=> setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-primary"
                  onChange={e=>setPassword(e.target.value)}
                  required
                  
                />
                <label className="label">
                  <p className="label-text-alt">
                    Already have account? <Link to="/login">Login</Link>{" "}
                  </p>
                </label>
              </div>
              <div className="form-control mt-5">
                <button type="subtmit" className="btn btn-primary" onClick={CollectData}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
