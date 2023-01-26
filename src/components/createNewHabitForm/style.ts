import styled from 'styled-components'

export const Form = styled.form `
    display: flex;
    flex-direction: column;

    label {
        font-weight: 600;
    }

    label.commitmentTitle {
        margin-bottom: 12px;
    }

    input {
        max-width: 100%;
        background: #27272A;
        border-radius: 8px;
        border: 2px solid #27272A;
        padding: 16px;
        margin-bottom: 16px;

        ::placeholder {
            color: #a1a1aa;
            font-weight: 400;
            font-size: 16px;
        }
    }

    button {
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 0px;
        gap: 12px;
        background: #16A34A;

        font-size: 16px;
        font-weight: 600;
        border: none;
        margin-top: 24px;
        transition: 0.2s;

        :hover {
            background: #5da350;
        }
    }
`