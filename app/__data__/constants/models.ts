export type Model = {
    id: number
    displayName: string
    rawName: string
    description: string
    tokenCount: string
    context: number
    provider: string
    price: {
        input: number
        output: number
    }
    releaseDate: string
}

export const MODELS_LIST: Model[] = [
    {
        id: 1,
        displayName: "GPT-4.1",
        rawName: "gpt-4.1",
        description: "OpenAI flagship non-reasoning model with 1M context and strong tool use.",
        tokenCount: "1M",
        context: 1047576,
        provider: "OpenAI",
        price: {
            input: 2.0,
            output: 8.0,
        },
        releaseDate: "2025-04-14",
    },
    {
        id: 2,
        displayName: "GPT-4o (2024-11-20)",
        rawName: "gpt-4o-2024-11-20",
        description: "OpenAI multimodal omni model with fast latency and 128K context.",
        tokenCount: "128K",
        context: 128000,
        provider: "OpenAI",
        price: {
            input: 2.5,
            output: 10.0,
        },
        releaseDate: "2024-11-20",
    },
    {
        id: 3,
        displayName: "Claude Opus 4.6",
        rawName: "claude-opus-4-6",
        description: "Anthropic flagship hybrid reasoning model offering up to 1M tokens of context.",
        tokenCount: "1M",
        context: 1000000,
        provider: "Anthropic",
        price: {
            input: 5.0,
            output: 25.0,
        },
        releaseDate: "2026-02-17",
    },
    {
        id: 4,
        displayName: "Claude Sonnet 4.5",
        rawName: "claude-sonnet-4-5",
        description: "Balanced Claude tier with 1M context; good price/performance for coding and analysis.",
        tokenCount: "1M",
        context: 1000000,
        provider: "Anthropic",
        price: {
            input: 3.0,
            output: 15.0,
        },
        releaseDate: "2026-02-17",
    },
    {
        id: 5,
        displayName: "Gemini 2.5 Pro",
        rawName: "gemini-2.5-pro",
        description: "Google DeepMind long-context reasoning model with 1M-token window and multimodal I/O.",
        tokenCount: "1M",
        context: 1048576,
        provider: "Google",
        price: {
            input: 1.25,
            output: 10.0,
        },
        releaseDate: "2025-04-04",
    },
    {
        id: 6,
        displayName: "Grok-2",
        rawName: "grok-2",
        description: "xAI model tuned for up-to-date web knowledge with ~131K context.",
        tokenCount: "131K",
        context: 131072,
        provider: "xAI",
        price: {
            input: 2.0,
            output: 10.0,
        },
        releaseDate: "2024-12-15",
    },
    {
        id: 7,
        displayName: "Mistral Large 2",
        rawName: "mistral-large-2",
        description: "Mistral flagship dense model with 128K context, strong multilingual performance.",
        tokenCount: "128K",
        context: 128000,
        provider: "Mistral AI",
        price: {
            input: 2.0,
            output: 6.0,
        },
        releaseDate: "2024-07-24",
    },
    {
        id: 8,
        displayName: "Llama 3.1 405B",
        rawName: "meta-llama-3.1-405b",
        description: "Meta open-weight frontier model; 405B parameters and 128K context when served via cloud.",
        tokenCount: "128K",
        context: 128000,
        provider: "Meta",
        price: {
            input: 0,
            output: 0,
        },
        releaseDate: "2024-07-23",
    },
    {
        id: 9,
        displayName: "DeepSeek V3",
        rawName: "deepseek-v3",
        description: "DeepSeek long-context general model aimed at ultra-low cost deployments.",
        tokenCount: "164K",
        context: 163800,
        provider: "DeepSeek",
        price: {
            input: 0.27,
            output: 1.1,
        },
        releaseDate: "2025-08-19",
    },
    {
        id: 10,
        displayName: "Qwen2.5-14B Instruct 1M",
        rawName: "qwen2.5-14b-instruct-1m",
        description: "Alibaba Cloud long-context instruct model supporting 1M tokens for enterprise workloads.",
        tokenCount: "1M",
        context: 1000000,
        provider: "Alibaba Cloud",
        price: {
            input: 0.805,
            output: 3.22,
        },
        releaseDate: "2025-01-29",
    },
]
