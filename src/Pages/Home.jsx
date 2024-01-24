import React, { useEffect, useState } from 'react';
import deleteicon from '../assets/delete.svg';
import editicon from '../assets/edit.svg'
import Additem from '../Components/Additem';
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, fetchitems } from '../Store/itemslice';
import { toast } from 'react-toastify';
function Home() {
    const dispatch = useDispatch();
    const [item,setItem]=useState("")
    const [action,setAction]=useState("Add")
    const [id,setId]=useState("")
    const { items, isLoading , isDeleteSuccess, searchValue} = useSelector(state => state.itemSlice);

    // console.log(data);
    useEffect(() => {
        dispatch(fetchitems());
    }, [])

    useEffect(() => {
        if (isDeleteSuccess) {
            dispatch(fetchitems())
            toast.success('Item deleted successfully.')
        }
    }, [isDeleteSuccess])

    const deleteItems = (id) => {
        let data = dispatch(deleteItem(id))
        console.log("data", data);

    }
    return (
        <div className='container'>
            <div style={{ height: '500px', width: '100%', overflow: 'scroll' }}>
                <div className='my-3'>
                    <Additem item={item} action={action} id={id}/>
                </div>

                {items.filter((ele)=>{
                    if(!searchValue){
                        return ele;
                    }else{
                       return ele.itemname.toLowerCase().includes(searchValue);
                    }
                }).map((item, index) => (
                    <div className='alert alert-warning d-flex justify-content-between' key={item.id}>
                        <div className='mt-auto mb-auto'>
                            <span>{item.itemname}</span>
                        </div>
                        <div className='mt-auto mb-auto'>
                            <button className='btn btn-sm'><img src={editicon} alt="edit" onClick={(e)=>{setItem(item.itemname); setAction("Update"); setId(item.id)}}/></button>
                            <button className='btn btn-sm'><img src={deleteicon} alt="delete" onClick={() => { deleteItems(item.id) }} /></button>
                        </div>
                    </div>
                ))}
                {(!items.length && !isLoading) || (!items.filter((ele)=>{
                    if(!searchValue){
                        return ele;
                    }else{
                       return ele.itemname.toLowerCase().includes(searchValue);
                    }
                }).length) && <div className=''>
                    <h3 className='text-dark text-center'>No items found</h3>
                </div>}
            </div>

        </div>
    )
}

export default Home