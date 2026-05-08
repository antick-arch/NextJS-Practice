const UserDetails = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);
    return (
        <div className="card bg-base-100 w-96 shadow-sm container mx-auto my-10">
            <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.website}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default UserDetails;