import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../features/authActions";
import Error from "../Error";

export default function Login(){

    const {loading, userInfo, error} = useSelector(state=>state.auth)
    const dispatch = useDispatch();

    const {register,handleSubmit} = useForm();

    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
          navigate('/')
        }
    }, [navigate, userInfo])

    const submitForm = (data)=>{
        dispatch(userLogin(data))
    }


    return(
        <>
            <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}   
            <div className="col-md-8">
                <h3>Login</h3>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="email" {...register('email')} className="form-control" id="formGroupExampleInput" placeholder="Email"/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="password" {...register('password')} className="form-control" id="formGroupExampleInput2" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">
                    {loading ? <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : 'Register'
                    }
                </button>
            </div>
            </form>
        </>
    );
}