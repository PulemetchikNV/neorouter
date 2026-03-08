import { Card } from "../retroui/Card"
import { Text } from "../retroui/Text"
import { cn } from "~/lib/utils"

export type ModelDetailsProps = {
    modelNameRaw: string
    description: string
    className?: string
}

export const ModelDetails = ({modelNameRaw, description, className}: ModelDetailsProps) => {
    return <Card className={cn('w-full', className)}>
        <Card.Header>
            {modelNameRaw}
        </Card.Header>

        <Card.Content>
            <Card.Description className="">
                <Text>
                    {description}
                </Text>
            </Card.Description>
        </Card.Content>
    </Card>
}