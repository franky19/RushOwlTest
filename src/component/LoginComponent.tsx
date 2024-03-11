import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../redux/action/login.action";

const LoginComponent =()=>{
    const [isValidEmail, setIsValidEmail] = useState(true);
    const dispatch :any =useDispatch();
    const [isLoading,setLoading]=useState(false);
    const navigate=useNavigate();
    const [form, setForm] = useState({
        email:'',
        password:''
    });

    const onChange = (
        e: FormEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        e.preventDefault()
        const { name, value } = e.currentTarget;
        setForm({
            ...form,
            [name]: value,
        });
        console.log(name);
        if(name ==="email"){
            setIsValidEmail(validateEmail(value));
        }
    };
    
    const validateEmail = useCallback((email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }, []);

    const SubmitForm = useCallback(async () => {
        if (!isValidEmail) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            await dispatch(loginAction(form))
            navigate("/dashboard");
        } catch (error:any) {
            console.error('Error occurred:', error);
            alert(error.message);
        }finally{
            setLoading(false);
        }
    }, [form, isValidEmail,dispatch,navigate]); // eslint-disable-next-line



    return(
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={onChange}/>
                                {!isValidEmail && <span style={{ color: 'red' }}>Invalid email</span>}
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <Link to="/register" className="register dark:hover:text-blue-500 text-blue-700">Create an account</Link>
                                <Link to="/forget-password" className="dark:hover:text-blue-500 text-blue-700">Forget Password</Link>
                            </div>
                            <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={SubmitForm}>{isLoading?'Loading ...':"Login"}</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginComponent