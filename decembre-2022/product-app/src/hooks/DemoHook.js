import { useEffect, useState } from "react";

export default function DemoHook(props) {
    //ajout de l'état avec useState
    const tab = useState([]);
    const posts = tab[0];
    const setPosts = tab[1];
    // const [posts, setPosts] = useState([]);
    const [compteur, setCompteur] = useState(0);
    //componentDidmount
    useEffect(() => {
        console.log("componentDidmount");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                console.log(posts)
                setPosts(posts)
            });
        return () => {
            //componentWillUnmount
            console.log("componentWillUnmount");
            //cleanup
        };
    }, [compteur]);//si le tableau es vide, la fonction est une seule fois au montage de composant
    return (
        <>
            <button onClick={() => setCompteur((oldCounteur) => oldCounteur + 1)}>Recharger le composant</button>
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>

    )

}