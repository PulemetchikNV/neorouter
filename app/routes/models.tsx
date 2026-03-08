import ModelList from "~/components/models/ModelList"
import { MODELS_LIST, type Model } from "~/__data__/constants/models"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function Models() {
    const [modelList] = useState(MODELS_LIST)
    const navigate = useNavigate()

    return (
        <>
            <ModelList models={modelList} navigateFunction={(model: Model) => navigate(`/model/${model.id}`)} />
        </>
    )
}