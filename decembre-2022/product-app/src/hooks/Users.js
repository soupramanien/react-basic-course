import useFetch from "./useFetch";

export default function Users(props) {
    const obj = useFetch("https://jsonplaceholder.typicode.com/users");
    const users = obj.data;
    const status = obj.status;
    const error = obj.error;
    // const { data:users, status, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    if (error !== null) {
        return <p>erreur</p>
    } else if (status !== "success") {
        return <p>loding...</p>
    }
    return (
        <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
    )
}