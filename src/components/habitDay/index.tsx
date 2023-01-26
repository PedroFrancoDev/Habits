import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from '../progressBar'
import { PopoverTrigger, PopoverContent } from './style'
import clsx from 'clsx'

interface HabitDayProps {
    amountCompleted: number,
    amoutIncomplete: number
}

export function HabitDay({ amountCompleted, amoutIncomplete }: HabitDayProps) {

    const completedPorcentage = Math.round(100 / ((amountCompleted + amoutIncomplete) / amountCompleted))

    const teste = {
        "background": "red"
    }

    return (
        <Popover.Root>
            <PopoverTrigger
            className={clsx(teste)}
            />

            <Popover.Portal>
                <PopoverContent>
                    <label>domingo</label>
                    <strong>22/01</strong>

                    <ProgressBar progress={completedPorcentage} />

                    <Popover.Arrow height={8} fill="#18181B" width={16} />
                </PopoverContent>
            </Popover.Portal>
        </Popover.Root>
    )
}