import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";

export function Dashboard(props: { className?: string }) {
  return (
    <div className={props.className}>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="before">
            Before
          </TabsTrigger>
          <TabsTrigger value="after">
            After
          </TabsTrigger>
        </TabsList>
        <TabsContent value="before" className="space-y-4">
          <p>Before Control</p>
        </TabsContent>
        <TabsContent value="after" className="space-y-4">
          <p>After Control</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}