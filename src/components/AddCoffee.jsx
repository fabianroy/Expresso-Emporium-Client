import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffe = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const brand = form.brand.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffe = { name, quantity, category, brand, details, photo };

        console.log(newCoffe);

        // send the new coffee to the server

        fetch('expresso-server-p66ouhdy9-fabianroys-projects.vercel.app//coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div>
                <div className="w-fit mx-auto mt-40">
                    <Link to='/'><button className="btn mb-4 bg-orange-300">Back to home</button></Link>
                    <div className=" bg-orange-300 p-6 rounded-xl">
                        <h3 className="text-center text-2xl font-semibold mb-6">Add a coffee</h3>
                        <form onSubmit={handleAddCoffee}>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" /><br />
                                <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" /><br />
                            </div>
                            <div className="flex gap-4 mt-4">
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full max-w-xs" /><br />
                                <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full max-w-xs" /><br />
                            </div>
                            <div className="flex gap-4 mt-4">
                                <input type="" name="details" placeholder="Details" className="input input-bordered w-full max-w-xs" /><br />
                                <input type="text" name="photo" placeholder="Add Photo URL" className="input input-bordered w-full max-w-xs" /><br />
                            </div>
                            <div className="mt-6 w-fit mx-auto">
                                <button className="btn w-96">Add Coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffe;