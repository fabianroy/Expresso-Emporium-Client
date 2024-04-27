import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const creationTime = result.user?.metadata?.creationTime;
                const user = {email, password, creationTime};
                fetch('https://expresso-server-p66ouhdy9-fabianroys-projects.vercel.app/user', {
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <div className="w-fit mx-auto mt-20">
                <h2 className="text-2xl">SignUp</h2>
                <form onSubmit={handleSignUp}>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Name
                        <input name="name" type="text" className="grow" placeholder="enter your name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Email
                        <input name="email" type="email" className="grow" placeholder="@example.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Password
                        <input name="password" type="password" className="grow" placeholder="enter password" required />
                    </label>
                    <button className="w-full btn mt-4">SignUp</button>
                    <p className="mt-8">Already have an account? <Link className="text-blue-600" to="/signin">SignIn</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;