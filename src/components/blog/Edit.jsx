import { Form, redirect, useLoaderData } from "react-router-dom";


export default function Edit(){
   const blogsPost = useLoaderData()
   return (
      <>
         <h2>Edit Blog Post</h2>
         <Form method="put">
               <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                     type="text"
                     name="title" 
                     defaultValue={blogsPost.title}
                     className="form-control" 
                     placeholder="Add title for the blog"
                  />
               </div>
               <div className="mb-3">
                  <label className="form-label">Content</label>
                  <textarea
                     name="description"
                     className="form-control" 
                     defaultValue={blogsPost.description}
                     placeholder="Add blog content"
                  />
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
         </Form>
         <hr/>
        </>
   );
}

export async function loadPost({params}){
   const blogPost = await fetch('http://localhost:8080/api/posts/'+params.id)
                     .then(response=>response.json())
                     .then(data=>{return data})
                     console.log(blogPost)
   return blogPost
}

export async function postUpdateAction({request,params}){
   console.log(params)
   const data = await request.formData();
   const submission = {
       title: data.get('title'),
       description: data.get('description')
   }

   try{
       const {payload} = await fetch('http://localhost:8080/api/posts/'+params.id,{
           method:"PUT",
           headers:{
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(submission)
       })
       .then(response =>response.json())
       .then(data=>{return data})
       .catch(error => {
           console.log('Error',error)
       })
       console.log(payload)


       return redirect('/')
   }catch{
       console.log("error...")
   }
}