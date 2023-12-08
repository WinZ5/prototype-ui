import { UserProfile } from "../components/userprofile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Project() {
  return (
    <div className="h-full w-4/5 flex-1 flex-col space-y-8 p-8 m-auto">
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
    </div>
  )
}