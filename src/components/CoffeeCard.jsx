import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, category, brand, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
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
                fetch(`https://expresso-server-ten.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div>

            {/* Card */}
            <div className="card w-[600px] bg-base-100 shadow-xl flex items-center flex-row p-6">
                <div className='flex-1'>
                    <figure><img className='w-60' src={photo} alt={name} /></figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{details}</p>
                    <p>Category : {category}</p>
                    <p>Brand : {brand}</p>
                    <p>In stock : {quantity}</p>
                </div>
                <div className="join join-vertical gap-1">
                    <button className="btn join-item">View</button>
                    <Link className='btn join-item' to={`/updateCoffee/${_id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}