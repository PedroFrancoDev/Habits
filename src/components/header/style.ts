import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 720.43px;
  margin: 0 auto;

  button {
    background: none;
    padding: 16px 24px;
    border: 1px solid #73c565;
    border-radius: 8px;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 12px;
    transition: 0.2s;
    cursor: pointer;

    :hover {
      border-color: #5da350;
    }
  }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background: black;
  opacity: 0.7;
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const DialogContent = styled(Dialog.Content)`
  position: absolute;
  background: #18181b;
  border-radius: 16px;
  width: 419px;

  padding: 40px 39px;
`

export const DialogClose = styled(Dialog.Close)`
  background: none;
  border: none;
  cursor: pointer;

  position: absolute;
  right: 24px;
  top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const DialogTitle = styled(Dialog.Title)`
  font-weight: bold;
  font-size: 32px;
`
