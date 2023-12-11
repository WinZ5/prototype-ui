import { UserProfile } from "@/app/components/userprofile";
import { UserNav } from "@/app/components/usernav";
import { Dashboard } from "@/app/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Departments'
}

export default function Department({params}: {params: {departmentid: string}}) {
  return (
    <div className="h-full max-w-[1400px] flex-1 flex-col space-y-8 p-8 m-auto">
      <div className="border-b">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <UserNav link={params.departmentid} />
        </div>
        <UserProfile className="flex items-center space-x-2" />
      </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {params.departmentid}&apos;s Dashboard
        </h2>
        <Dashboard className="pt-4"/>
      </div>
    </div>
  )
}