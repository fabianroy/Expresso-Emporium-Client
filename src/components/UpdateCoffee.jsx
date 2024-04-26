import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, category, brand, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const brand = form.brand.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffe = {name, quantity, category, brand, details, photo};

        console.log(updatedCoffe);

        // send the new coffee to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffe)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <div className="w-fit mx-auto mt-40">
                <Link to='/'><button className="btn mb-4 bg-orange-300">Back to home</button></Link>
                <div className=" bg-orange-300 p-6 rounded-xl">
                    <h3 className="text-center text-2xl font-semibold mb-6">Update {name}</h3>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="flex gap-4 mt-4">
                            <input type="text" name="name" defaultValue={name} className="input input-bordered w-full max-w-xs" /><br />
                            <input type="number" name="quantity" defaultValue={quantity} className="input input-bordered w-full max-w-xs" /><br />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <input type="text" name="category" defaultValue={category} className="input input-bordered w-full max-w-xs" /><br />
                            <input type="text" name="brand" defaultValue={brand} className="input input-bordered w-full max-w-xs" /><br />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <input type="" name="details" defaultValue={details} className="input input-bordered w-full max-w-xs" /><br />
                            <input type="text" name="photo" defaultValue={photo} className="input input-bordered w-full max-w-xs" /><br />
                        </div>
                        <div className="mt-6 w-fit mx-auto">
                            <button className="btn w-96">Update Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffe;