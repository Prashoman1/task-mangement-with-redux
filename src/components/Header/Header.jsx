import React from 'react'

export default function Header() {
  return (
    <>
    <div className="navbar bg-sky-200">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Demu Redux Project</a>
  </div>
  <div className="flex-none">
    <div>
        <button className='btn btn-sm btn-primary'>Add Task</button>
    </div>
  </div>
</div>
    </>
  )
}
