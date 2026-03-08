import type { Model } from "~/__data__/constants/models"
import { Card } from "../retroui/Card"
import { Text } from "../retroui/Text"
import { Button } from "../retroui/Button"
import { Copy, CopyCheck } from "lucide-react"
import { useCallback, useState, type MouseEvent } from "react"
import { Spacer } from "../Spacer"

const GET_MODEL_DESCRIPTION_ITEMS = (model: Model) => [
    {
        textValue: `by ${model.provider}`
    },
    {
        textValue: `${model.releaseDate}`
    },
    {
        textValue: `${model.context} context`
    },
    {
        textValue: `$${model.price.input}/M input tokens`
    },
    {
        textValue: `$${model.price.output}/M output tokens`
    }
]

export const ModelCard = ({model, onClick}: {model: Model, onClick: (model: Model) => void}) => {
    const items = GET_MODEL_DESCRIPTION_ITEMS(model)
    const [isCopied, setIsCopied] = useState<boolean>()

    const copyModelName = useCallback(($event: MouseEvent) => {
        $event.stopPropagation()
        window.navigator.clipboard.writeText(model.displayName) 
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }, [model.displayName])

    return (
        <Card onClick={() => onClick(model)}>
            <Card.Header>
                <div className="flex items-start align-center gap-4">
                    <Card.Title>{model.displayName}</Card.Title>
                    <Button className="w-14" size="sm" onClick={copyModelName}>
                        {!isCopied ? <Copy/> : <CopyCheck />}
                    </Button>
                    <Spacer />
                    <Text>{model.tokenCount} tokens</Text>
                </div>
            </Card.Header>
            <Card.Content>
                <Card.Description>{model.description}</Card.Description>
                <div className="flex">
                    {
                        items.map(({textValue}, i) => 
                            (
                                <>
                                    <Text as="p">{textValue}</Text>
                                    {(i !== items.length - 1) ? <Text className="mx-2">|</Text> : null}
                                </>
                            )
                        )
                    }
                </div>
            </Card.Content>
        </Card>
    )
}