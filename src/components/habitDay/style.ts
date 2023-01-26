import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

export const PopoverTrigger = styled(Popover.Trigger) `
    background: #18181B;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid #27272A;

    .teste {
        background-color: red;
    }
`

export const PopoverContent = styled(Popover.Content) `
    background: #18181B;
    border-radius: 16px;
    box-shadow: 4px 16px 24px rgba(0, 0, 0, 0.25);
    padding: 24px;
    width: 374px;

    display: flex;
    flex-direction: column;

    label {
        color: #a1a1aa;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 600;
    }

    strong {
        margin-bottom: 16px;
        font-size: 32px;
        font-weight: 800;
    }
`