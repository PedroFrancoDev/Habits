import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
`

export const SectionDay = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    font-size: 20px;
    font-weight: bold;
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #09090a;
    margin-right: 12px;
  }
`

export const SectionHabitsDay = styled.section`
  display: grid;
  grid-row: columns;
  grid-template-columns: repeat(20, 1fr);

  gap: 8px;
`
export const HabitsDaysDisabled = styled.div`
  background: #18181B;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #27272A;
    cursor: not-allowed;
    opacity: 0.40;
`