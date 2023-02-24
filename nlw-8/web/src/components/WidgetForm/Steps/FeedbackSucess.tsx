interface FeedbackSuccessStepProps{
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSucess({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
    return (
        <>
        <header>

        </header>
        <div className="flex flex-col items-center py-10 w-[304]">
            <span className="text-3xl		">
            ✅
            </span>

            <span className="text-xl mt-2">Agradecemos o feedback!</span>

            <button
                onClick={onFeedbackRestartRequested}
                className="py-2 px-2 mt-6 bg-zinc-800 rounded-md border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-300"
            >Quero enviar outro</button>
        </div>
        </>
    )
}