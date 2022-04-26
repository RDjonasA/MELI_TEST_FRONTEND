import {render,screen} from '@testing-library/react'
import Categorys from '../Components/Categorys'

test('Verifica si los datos renderizan en Categorias, se pregunta por ultimo elemento del array', ()=>{
    const data=['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4']
    render(<Categorys categories={data}/>)
    const cat4 = screen.getByText('Cat 4')
    expect(cat4).toBeInTheDocument()
})