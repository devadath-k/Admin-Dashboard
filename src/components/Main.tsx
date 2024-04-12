import DataTable from './main/DataTable';
import { SparkAreaChart } from '@tremor/react';

const chartdata = [
    {
      month: 'Jan 21',
      Performance: 4000,
      Benchmark: 3000,
    },
    {
      month: 'Feb 21',
      Performance: 3000,
      Benchmark: 2000,
    },
    {
      month: 'Mar 21',
      Performance: 2000,
      Benchmark: 1700,
    },
    {
      month: 'Apr 21',
      Performance: 2780,
      Benchmark: 2500,
    },
    {
      month: 'May 21',
      Performance: 1890,
      Benchmark: 1890,
    },
    {
      month: 'Jun 21',
      Performance: 2390,
      Benchmark: 2000,
    },
    {
      month: 'Jul 21',
      Performance: 3490,
      Benchmark: 3000,
    },
  ];
  

export default function Main() {
  return (
    <div className="w-[100%] h-auto mt-8">
      <div className='grid grid-cols-4 gap-6 min-h-[150px]'>
            <div className='relative h-[100%] bg-white rounded-[10px] overflow-hidden shadow-md'>
                <div className="absolute z-0 inset-0 bg-[#6AB1E0] opacity-60"></div>
                <SparkAreaChart
                    data={chartdata}
                    index="date"
                    categories={['Performance']}
                    colors={['blue']}
                    className='absolute z-0 w-[110%] h-[110%] left-[-5px]'
                />
                <div className='absolute text-white z-10 p-2'>
                    <h1 className='text-[1.2rem] font-bold'>EFFICIENCY</h1>
                    <p className='text-[10px]'>Lorem Ipsum</p>
                    <h1 className='text-[2rem] font-bold'>1.921</h1>
                    <p className='text-[12px]'>+0.0015 (+0.13%)</p>
                    <p className='text-[12px] mt-2 ml-2'>0.00 USD</p>
                </div>
            </div>
            <div className='h-[100%] bg-white rounded-[10px] shadow-md'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px] shadow-md'>

            </div>
            <div className='h-[100%] bg-white rounded-[10px] shadow-md'>

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
      <div className='mt-[20px] w-[100%] max-h-[500px] bg-white rounded-[10px] p-[10px] overflow-auto'>
        <DataTable/>
      </div>
    </div>
  )
}
