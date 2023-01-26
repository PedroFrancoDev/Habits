import { GenerateDatesFromYearBeginning } from "../../utils/generateDatesFromYearBeginning";
import { HabitDay } from "../habitDay";
import { Container, SectionHabitsDay, SectionDay, HabitsDaysDisabled } from "./style";


const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
]

const summaryDates = GenerateDatesFromYearBeginning()

const totalSummaryDaysOfTheTable = 140;
const amountOfDaysToFill = totalSummaryDaysOfTheTable - summaryDates.length;

export function SummaryTable() {
    return (
        <Container>
            <SectionDay>
                {weekDays.map((weekDay, i) => (
                    <div key={i}>{weekDay}</div>
                ))}
            </SectionDay>

            <SectionHabitsDay>
                <>
                    {summaryDates.map(summaryDate => (
                        <HabitDay amountCompleted={0} amoutIncomplete={0} key={summaryDate.toString()} />
                    ))}

                    {
                        Array
                            .from({ length: amountOfDaysToFill })
                            .map((_, i) => {
                                return <HabitsDaysDisabled key={i} />
                            })
                    }
                </>
            </SectionHabitsDay>
        </Container>
    )
}