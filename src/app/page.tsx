'use client'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data, status } = useSession()
  console.log("data", data)
  console.log("status", status)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
    </main>
  )
}
