import { UserProfile } from "@/app/components/userprofile"
import { Risktable, risk } from "@/app/components/risktable"

export default function Risks({ params }: { params: { riskid: string } }) {
  const data: risk[] = [
    {
      okr: "OBJ1-OKR1",
      id: "FN-RF0001",
      factor: "We don't have any money left",
      category: "OR",
      description: "We made no profit",
      inherent: 20,
      residual: 10,
    },
    {
      okr: "OBJ2-OKR1",
      id: "FN-RF0001",
      factor: "CEO is missing",
      category: "OR",
      description: "He trusted google map",
      inherent: 10,
      residual: 5,
    },
    {
      okr: "OBJ3-OKR1",
      id: "FN-RF0001",
      factor: "Joe Wick's cat is missing",
      category: "OR",
      description: "I don't know where you are but I'll find you",
      inherent: 50,
      residual: 0,
    }
  ]

  return (
    <div className="h-full w-4/5 flex-1 flex-col space-y-8 p-8 m-auto">
      <div className="flex items-center justify-end space-y-2">
        <UserProfile className="flex items-center space-x-2" />
      </div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {params.riskid}&apos;s Risks
        </h2>
        <Risktable data={data} />
      </div>
    </div>
  )
}