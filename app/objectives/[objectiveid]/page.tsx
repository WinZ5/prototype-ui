import { UserNav } from "@/app/components/usernav";
import { UserProfile } from "@/app/components/userprofile";
import { Objectivetable, objective } from "@/app/components/objectivetable";

export default function Objective({ params }: { params: { objectiveid: string } }) {
  const data: objective[] = [
    {
      id: "OBJ1",
      description: "Prevent Bankruptcy",
      officer: "Elong Ma"
    },
    {
      id: "OBJ2",
      description: "Board of directors become more stable",
      officer: "Tim Cake"
    },
    {
      id: "OBJ3",
      description: "My cat return home",
      officer: "Joe Wick"
    }
  ]

  return (
    <div className="h-full w-4/5 flex-1 flex-col space-y-8 p-8 m-auto">
      <div className="border-b">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <UserNav link={params.objectiveid} />
          </div>
          <UserProfile className="flex items-center space-x-2" />
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {params.objectiveid}&apos;s Objectives
        </h2>
        <Objectivetable data={data} />
      </div>
    </div>
  )
}