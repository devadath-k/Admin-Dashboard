import React from 'react';
import DataTable from './main/DataTable';

export default function Main() {
  return (
    <div className="w-[100%] h-auto mt-8">
      <div className='grid grid-cols-4 gap-6 min-h-[150px]'>
            <div className='h-[100%] bg-white rounded-[10px]'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px]'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px]'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px]'>

            </div>
      </div>
      <div className='mt-[20px] grid grid-cols-3 gap-6 min-h-[200px]'>
            <div className='h-[100%] bg-white rounded-[10px] shadow-lg border-2 border-gray-300'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px] shadow-lg border-2 border-gray-300'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px] shadow-lg border-2 border-gray-300'>

            </div>
      </div>
      <div className='mt-[20px] w-[100%] max-h-[500px] bg-white rounded-[10px] p-[10px] overflow-y-auto'>
        <DataTable/>
      </div>
    </div>
  )
}
