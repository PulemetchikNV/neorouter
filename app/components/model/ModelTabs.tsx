import { Tabs, TabsTrigger, TabsContent, TabsPanels, TabsTriggerList } from "~/components/retroui/Tab"
import { cn } from "~/lib/utils"

export type ModelTabsProps = {
    className?: string
}

export const ModelTabs = ({className}: ModelTabsProps) => {
    return <Tabs className={cn('w-full', className)}>
        <TabsTriggerList>
            <TabsTrigger>Overview</TabsTrigger>
            <TabsTrigger>Providers</TabsTrigger>
            <TabsTrigger>Performance</TabsTrigger>
        </TabsTriggerList>
        <TabsPanels>
            <TabsContent>
            Welcome to RetroUI, a retro styled UI library built with React,
            Tailwind CSS & Headless UI.
            </TabsContent>
            <TabsContent>This is the about section!</TabsContent>
            <TabsContent>And, this is the contact section!</TabsContent>
        </TabsPanels>
    </Tabs>
}