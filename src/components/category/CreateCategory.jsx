import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategories } from "../../features/categorySlice";
import CategoryList from "./CategoryList";

export default function CreateCategory() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    // const addCatogoryHandler = (e) => {
    //     e.preventDefault()
    //     dispatch(addCategory(input))
    //     setInput('')
    // }

    const addCatogoryHandler = (e) => {
        e.preventDefault()
        dispatch(createCategories(input))
        setInput('')
    }

    return (
        <>
            <CategoryList/>
            <form onSubmit={addCatogoryHandler}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title" 
                        className="form-control" 
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        placeholder="Add category name"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr/>
        </>
    );
}

