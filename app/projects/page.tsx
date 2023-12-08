import { UserProfile } from "../components/userprofile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Project() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8">
      <UserProfile className="flex items-center justify-end space-x-2" />
    </div>
  )
}