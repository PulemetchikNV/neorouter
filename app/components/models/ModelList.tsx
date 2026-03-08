import type { Model } from "~/__data__/constants/models"
import { ModelCard } from "./ModelCard"

export type ModelListProps = {
    models: Model[],
    navigateFunction?: (model: Model) => void
}

export default function ModelList({models, navigateFunction = () => {}}: ModelListProps) {
    return (
        <>
            <div className="flex flex-col gap-4 pb-10 cursor-pointer">
                {
                    models.map((model) => <ModelCard model={model} onClick={navigateFunction} /> )
                }
            </div>
        </>
    )
}