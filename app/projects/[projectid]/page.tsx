import { UserProfile } from "@/app/components/userprofile";
import { Cardlist } from "@/app/components/cardlistdepartment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Project() {
  const department = [
    "Finance",
    "HR"
  ]

  return (
    <div className="h-full max-w-[1400px] flex-1 flex-col space-y-8 p-8 m-auto">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome to Projects page
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your projects.
          </p>
        </div>
        <UserProfile className="flex items-center space-x-2" />
      </div>
      <div className="flex-1 space-y-4 pt-6">
        <Cardlist list={department} new="Create new Department" />
      </div>
    </div>
  )
}