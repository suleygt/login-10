import React from 'react';
import './App.css';
const Modal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-outer bg-white rounded-lg shadow-lg w-1/2 p-6">
        <div className="modal-inner p-6 rounded-md">
          <h2 className="delete text-lg font-bold">Delete User</h2>
          <p className="account mb-4">
            Are you sure you want to delete <strong>your account</strong>?
          </p>
          <div className="border border-red-600 p-4 mb-4">
          <div className="border-custom p-4 mb-4">
          <span className="warning-icon"></span>
            <p className="modal text-[#800000] font-semibold">Warning</p>
            
            <p className='deleting mb-4'>By deleting this account, you won't be able to access the system.</p>
            </div>
           </div>

           
          <div className="flex justify-between">
            <button className="buton bg-gray-300 text-black px-4 py-2 rounded">No, Cancel</button>
            <button className="button bg-red-600 text-white px-4 py-2 rounded">Yes, Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
