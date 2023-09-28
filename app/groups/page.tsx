import React from 'react'
import Group from './components/Group'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='max-w-7xl w-full mx-auto flex flex-col gap-5 my-10'>
      <h1 className='text-3xl text-cyan-900 font-bold text-center'>Groups</h1>
      <Group/>
    </div>
  )
}

export default page
