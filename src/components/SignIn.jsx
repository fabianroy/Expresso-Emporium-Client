import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const lastSignInTime = result.user?.metadata?.lastSignInTime;
                const user = {email, lastSignInTime};
                fetch('https://expresso-server-p66ouhdy9-fabianroys-projects.vercel.app/user', {
                    mode: 'no-cors',
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <div className="w-fit mx-auto mt-20">
                <h2 className="text-2xl">SignIn</h2>
                <form onSubmit={handleSignIn}>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Email
                        <input name="email" type="email" className="grow" placeholder="@example.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-4">
                        Password
                        <input name="password" type="password" className="grow" placeholder="enter password" required />
                    </label>
                    <button className="w-full btn mt-4">SignIn</button>
                    <p className="mt-8">Don&apos;t have an account? <Link className="text-blue-600" to="/signup">SighUp</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;