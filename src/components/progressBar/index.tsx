import { ProgressContainer } from './style'

interface ProgressProps {
    progress: number
}

export function ProgressBar({ progress }:ProgressProps) {
    return(
        <ProgressContainer>
            <div
                role='progressbar'
                aria-label='Progresso de hábitos completados nesse dia'
                arial-aria-valuenow={progress}
                style={{ width: `${progress}%` }}
             />
        </ProgressContainer>
    )
}