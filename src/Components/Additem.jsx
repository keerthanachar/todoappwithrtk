import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify';
import { fetchitems, addItem, clearStore, updateItem } from '../Store/itemslice';

function Additem({ item, action,id }) {
  const dispatch = useDispatch();
  const [itemsName, setItemName] = useState("")
  const [Btnaction, setBtnAction] = useState("Add")
  const { isAddSuccess, isDeleteSuccess, isUpdateSuccess } = useSelector(state => state.itemSlice)

  useEffect(() => {
    setBtnAction(action)
  }, [action])

  useEffect(() => {
    setItemName(item)
  }, [item])
  useEffect(() => {
    if (isAddSuccess) {
      toast.success('Item added successfully');
      dispatch(fetchitems())
      dispatch(clearStore())
    }
  }, [isAddSuccess]);

  useEffect(()=>{
    if(isUpdateSuccess){
      toast.success('Item updated successfully');
      dispatch(fetchitems());
      dispatch(clearStore())
    }
  },[isUpdateSuccess])

  useEffect(() => {
    if (isDeleteSuccess) {
      dispatch(clearStore())
    }
  }, [isDeleteSuccess])

  const add = () => {
    if(Btnaction==="Add"){
      const payload = {
        active: false,
        createdAt: Date.now(),
        itemname: itemsName
      }
      dispatch(addItem(payload));
    }else{
      const payload={
        itemname:itemsName,
        id
      }
      console.log(payload);
      dispatch(updateItem(payload))
    }
    setItemName("")
  }
  return (
    <div className=''>
      <div className='d-flex'>
        <input type="text" className='form-control' value={itemsName} onChange={(e) => { setItemName(e.target.value) }} />
        <button className='btn btn-sm btn-success' onClick={add}>{Btnaction}</button>
      </div>
    </div>
  )
}

export default Additem