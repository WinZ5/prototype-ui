import { UserProfile } from "../components/userprofile";

export default function Project() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8">
      <div className="flex items-center justify-end space-x-2">
        <UserProfile />
      </div>
    </div>
  )
}