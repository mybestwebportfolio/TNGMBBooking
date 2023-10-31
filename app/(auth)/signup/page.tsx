import { redirect } from "next/navigation"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

import SignupContent from "@/components/SignupContent"

const Page = async () => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const { data: userSession } = await supabase.auth.getSession()

    if(userSession.session){
        return redirect("/")
    }
    return (
      <div className="w-full h-full flex justify-center items-center">
        <SignupContent />
      </div>
    )
}

export default Page