import React,{useState,useEffect} from 'react';
// import BlogPost from '../../components/BlogPost/BlogPost';

const Home = () => {
    // const [posts,setPosts] = useState([]);

    // useEffect(()=>{
    //     console.log("Loading Data ...")
    //     // fetch("https://jsonplaceholder.typicode.com/posts")
    //     //         .then(res=>res.json())
    //     //         .then(data=>setPosts(data))
    // },[])

    return (
        <div>
            <h1>HOME</h1>
            {/* <main>
                {
                    posts.map((post)=>{
                        return <BlogPost key={post.id} title={post.title} content={post.body}/>
                    })
                }
            </main> */}
        </div>
    );
}

export default Home;

// #TODO