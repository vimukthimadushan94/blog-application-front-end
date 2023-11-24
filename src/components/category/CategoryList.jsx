import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletCategories, fetchCategories } from "../../features/categorySlice";

function CategoryList() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])

    const categories = useSelector(state=> state.category.categories)

    const deleteHandler = (e)=>{
        dispatch(deletCategories(e.target.dataset.value))
    }

    return (
        <>  
            {categories.map((category,key)=>(
                <button id={key} type="button" class="btn btn-secondary" style={{"margin-left":'2%','margin-top':'1%'}}>
                    {category.name} <span data-value={category.id} class="badge text-bg-secondary" onClick={deleteHandler}>X</span>
                </button>
            ))}
        </>
    );
}

export default CategoryList;