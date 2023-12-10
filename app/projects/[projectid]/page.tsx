import { UserProfile } from "@/app/components/userprofile";
import { Dashboard } from "@/app/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Project({ params }: { params: {projectid: string} }) {
  return (
    <div className="h-full w-4/5 flex-1 flex-col space-y-8 p-8 m-auto">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome to {params.projectid}
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your projects.
          </p>
        </div>
        <UserProfile className="flex items-center space-x-2" />
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h2>
        <Dashboard />
      </div>
    </div>
  )
}