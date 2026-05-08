import Link from "next/link";

const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return (
        <div className="container mx-auto">
            <h2 className="flex justify-center items-center font-bold text-4xl my-5">This is user page</h2>
            <div className="flex flex-wrap gap-10 place-content-center"> 
                {
                    users.map((user) => (
                        <div key={user.id} className="card bg-primary text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.address.street}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/users/${user.id}`}><button className="btn">More Details</button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserPage;