import { useState } from "react"
import { ModelHeader } from "~/components/model/ModelHeader"
import { ModelDetails } from "~/components/model/ModelDetails"
import { ModelTabs } from "~/components/model/ModelTabs"

const DESC = `GPT-5.4 Pro is OpenAI's most advanced model, building on GPT-5.4's unified architecture with enhanced reasoning capabilities for complex, high-stakes tasks. It features a 1M+ token context window (922K input, 128K output) with support for text and image inputs. Optimized for step-by-step reasoning, instruction following, and accuracy, GPT-5.4 Pro excels at agentic coding, long-context workflows, and multi-step problem solving.`

export default function ModelRoute() {
    const [modelName] = useState(`OpenAI: GPT-5.4 Pro`)
    const [modelNameRaw] = useState('openai/gpt-5.4-pro')
    const [description] = useState(DESC)

    return (
        <>
            <div className="text-start w-full">
                <ModelHeader className="mt-4" modelName={modelName} />

                <ModelDetails className="mt-8" modelNameRaw={modelNameRaw} description={description} />

                <ModelTabs className="mt-8"></ModelTabs>
            </div>
        </>
    )
}