'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const { data, status } = useSession()
    const router = useRouter()
    if(status === 'loading') return <p>Loading ...</p>
    if(status === 'authenticated') return router.push("/")
    return (
      <main className="flex min-w-3/4 flex-col items-center justify-between p-24">
        <h1>Login</h1>
        <button className='bg-indigo-500 px-5 py-4 rounded-md text-white font-bold' onClick={()=>signIn("google")}>Login</button>
      </main>
    )
}
