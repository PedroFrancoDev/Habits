import { Check } from 'phosphor-react'
import { Form } from './style'

export function CreateNewHabitForm() {
    return(
        <Form>
            <label className="commitmentTitle" htmlFor="title">Qual seu comprometimento?</label>

            <input
                type="text" 
                id="title"
                placeholder="ex.: Exercicíos, dormir bem, etc..."
            />

            <label htmlFor="">
                Qual a recorrencia?
            </label>

            <button type="submit">
                <Check weight='bold' size={20} />
                Confirmar
            </button>
        </Form>
    )
}