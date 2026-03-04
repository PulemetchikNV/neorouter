import * as React from "react"
import { Empty } from "./retroui/Empty"
import { CircleOff } from "lucide-react"

export type ErrorBoundaryParams = {
    message?: string
    details?: string
    stack?: string
}

export const ErrorBoundary: React.FC<ErrorBoundaryParams> = ({message, details, stack}: ErrorBoundaryParams) => {
    return <Empty className="w-md mt-40">
        <Empty.Content>
            <Empty.Icon className="mb-4">
                <CircleOff className="size-10 md:size-14" />
            </Empty.Icon>
            <Empty.Title>{message || '404'}</Empty.Title>
            <Empty.Separator />
            <Empty.Description>{details}</Empty.Description>
            {stack && (
            <pre className="w-full p-4 overflow-x-auto">
                <code>{stack}</code>
            </pre>
            )}
        </Empty.Content>
    </Empty>
}