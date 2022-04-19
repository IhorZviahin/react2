import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services";
import {Postid} from "../../components";

const SinglePostsPage = () => {

    const[SinglePosts, SetSinglePosts] =useState(null)
    const {id} = useParams()

    useEffect( () =>{
         postsService.getById(id).then(({data})=>SetSinglePosts(data))
    },[id])

console.log(id)
console.log(SinglePosts)

    return (
        <div>
            {SinglePosts && <Postid  SinglePosts={SinglePosts}/>}
        </div>
    );
};

export {SinglePostsPage};