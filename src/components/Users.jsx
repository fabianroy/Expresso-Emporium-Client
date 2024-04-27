
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://expresso-server-p66ouhdy9-fabianroys-projects.vercel.app/user/${id}`, {
                    mode: 'no-cors',
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            );
                            const remaining = users.filter(user => user._id !== id);
                            setUser(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <h2 className="text-center mt-10">Users : {users.length}</h2>
            <table className="table w-[800px] mx-auto my-10">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Email</th>
                        <th>Created Time</th>
                        <th>Last SignedIn</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td><button onClick={() => handleDelete(user._id)} className="btn">X</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;