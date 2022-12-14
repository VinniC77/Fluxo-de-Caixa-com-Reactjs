import * as C from './App.styles'

import { useState, useEffect } from 'react'

import { Item } from './types/Item'
import { items } from './data/items'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { TableArea } from './components/TableArea'

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  console.log(filteredList)

  return ( 
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Fluxo de Caixa</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Area de informação */}

        {/* Area de inserção */}

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  )
}

export default App