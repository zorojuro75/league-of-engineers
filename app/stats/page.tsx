import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='max-w-7xl w-full my-10 mx-auto'>
        <div className='text-3xl font-bold'>League of SETS Season 2 Stats</div>
        <div className='w-full max-w-3xl my-5 h-[300px] bg-blue-500 bg-opacity-60 rounded-md shadow-sm'>
            <div className='px-10 flex w-full justify-between items-center border-b '>
                <div>
                <div className='text-2xl text-white font-bold h-[80px] flex items-center'>
                    Goals
                </div>
                <div className='h-[120px] flex flex-col gap-5 py-2'>
                    <div className='text-3xl font-bold '>108</div>
                    <div className=' '>Total Goals</div>
                </div>
                </div>
                <div><img src="net.svg" alt="" className='w-[150px]' /></div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Page