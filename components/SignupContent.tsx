"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import { Bars } from "react-loader-spinner"

const SignupContent = () => {
    const [isSuccessSignUp, setIsSuccessSignUp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const supabase = createClientComponentClient()

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
          setIsLoading(true)
          await supabase.auth.signUp({
            email,
            password,
          })
          router.refresh()
          setIsSuccessSignUp(true)
        } catch (error) {
          console.log(error)
          setIsLoading(false)
        } finally {
          setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleSignup} className="flex flex-col items-start gap-y-5 px-4">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl text-black font-semibold">Get Started Now | Signup</h1>
            <p className="text-sm text-black">Enter your credentials to access your account</p>
          </div>
          <div className="w-full flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-1">
              <label className="text-base text-black">Email Address</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent py-2 px-5 border border-neutral-500 rounded-2xl hover:outline-none hover:border-blue-800 focus:outline-none focus:border-blue-800" placeholder="example@example.com"/>
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-base text-black">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-transparent py-2 px-5 border border-neutral-500 rounded-2xl hover:outline-none hover:border-blue-800 focus:outline-none focus:border-blue-800" placeholder="****"/>
            </div>
            <div className="w-full">
              <button type="submit" className="w-full flex items-center justify-center gap-x-2 py-3 bg-blue-800 text-white rounded-2xl">
                Signup {isLoading && (
                  <Bars
                    height="20"
                    width="20"
                    color="#fff"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                )}
              </button>
            </div>
          </div>
          <div>
            <p className="text-black text-sm">Have an account ? <Link href="/signin" className="text-blue-800">Signin</Link></p>
          </div>
          {isSuccessSignUp && (
            <div className="w-full">
                <p className="text-base text-black">Check your email and confirm your email address first</p>
            </div>
          )}
        </form>
    )
}

export default SignupContent