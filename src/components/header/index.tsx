import { Plus, X } from 'phosphor-react'
import { HeaderTag, DialogOverlay, DialogContent, DialogClose, DialogTitle } from './style'
import habitsLogo from '../../assets/habitLogo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateNewHabitForm } from '../createNewHabitForm'

export function Header() {

    return (
        <HeaderTag>
            <img src={habitsLogo} alt="habitsLogo" />

            <Dialog.Root>
                <Dialog.Trigger
                    type="button"
                >
                    <Plus size={20} color="#73c565" />
                    Novo hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <DialogOverlay />

                    <DialogContent>
                        <DialogClose>
                            <X size={24} aria-label="Feichar" color="#a1a1aa" />
                        </DialogClose>
                        
                        <DialogTitle>Criar hábito</DialogTitle>

                        <CreateNewHabitForm />
                    </DialogContent>
                </Dialog.Portal>
            </Dialog.Root>
        </HeaderTag>
    )
}