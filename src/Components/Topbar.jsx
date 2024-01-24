import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { searchFunction } from '../Store/itemslice';
function Topbar() {
  const { items } = useSelector(state => state.itemSlice);
  const dispatch=useDispatch();

  const handlesearch=(e)=>{
    dispatch(searchFunction(e.target.value))
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand">ToDo</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='d-flex gap-2 text-white'>
          <span className='mt-auto mb-auto'>Search</span>
          <input type="text" className='form-control' onChange={handlesearch}/>
        </div>
        <div className='d-flex gap-2'>
          {/* <button className='btn btn-sm text-danger btn-light' onClick={clearAll}>Clear all</button> */}
          <span className='text-white mt-auto mb-auto'>Total Items: {items.length}</span>
        </div>
      </div>
    </nav>
  )
}

export default Topbar