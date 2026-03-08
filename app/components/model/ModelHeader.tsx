import {Text} from '~/components/retroui/Text'
import { Spacer } from '../Spacer'
import { Button } from '../retroui/Button'
import { MessageSquare, GitCompare } from 'lucide-react'
import { cn } from '~/lib/utils'

export type ModelHeaderProps = {
    modelName: string
    className?: string
}

export const ModelHeader = ({className, modelName}: ModelHeaderProps) => {
    return <div className={cn('flex gap-4', className)}>
        <Text as="h3">{modelName}</Text>
        <Spacer />
        <Button>Chat <MessageSquare size={14} className="ml-2" /></Button>
        <Button variant="outline">Compare <GitCompare size={14} className="ml-2"/></Button>
    </div>
}