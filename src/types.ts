export type QuestionData = {
    number: number
    question: string,
    variants: {
        title: string,
        description: string,
        confirm: {
            title: string,
            text: string,
            confirmedTitle: string,
        }
    }[]
}