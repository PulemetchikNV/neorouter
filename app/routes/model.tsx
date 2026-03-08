import { useState } from "react"
import { Text } from "~/components/retroui/Text"
import { Button } from "~/components/retroui/Button"
import { Spacer } from "~/components/Spacer"
import { MessageSquare, GitCompare } from "lucide-react"

export default function ModelRoute() {
    const [modelName] = useState(`Model`)

    return (
        <>
            <div className="text-start w-full">
                <div className="flex gap-4 mb-4">
                    <Text as="h3">{modelName}</Text>
                    <Spacer />
                    <Button>Chat <MessageSquare size={14} className="ml-2" /></Button>
                    <Button variant="outline">Compare <GitCompare size={14} className="ml-2"/></Button>
                </div>
            </div>
        </>
    )
}