"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Cardlist(props: { list: Array<string> }) {
  const router = useRouter()

  const onClick = ((event: React.MouseEvent<HTMLElement>, href: string) => {
    router.push(`/projects/${href}`)
  })
  const listitems = props.list.map((card) =>
    <Button onClick={(e) => onClick(e, card)}>
      {card}
    </Button>
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {listitems}
      <Button variant="outline">Create New Department</Button>
    </div>
  )
}