import { Form, redirect } from "react-router-dom";

function Create() {

    return (
        <>
            <Form method="post" action='/blog/create'>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title" 
                        className="form-control" 
                        placeholder="Add title for the blog"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        name="description"
                        className="form-control" 
                        placeholder="Add blog content"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
            <hr/>
        </>
    );
}

export default Create;

export const  blogCreateAction =  async ({request})=>{
    const data = await request.formData();
    const submission = {
        title: data.get('title'),
        description: data.get('description')
    }

    try{

        fetch('http://localhost:8080/api/posts',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submission)
        })
        .then(response => response.json())
        .catch(error => {
            console.log('Error',error)
        })

    }catch{
        return {error: 'Unhandled error'}
    }
    
    console.log(submission)
    return redirect('/')
}
