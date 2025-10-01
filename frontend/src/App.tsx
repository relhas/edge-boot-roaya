import { useQuery, useQueryClient } from '@tanstack/react-query'
import { listItems } from './lib/api'
import { ItemList } from './components/ItemList'
import { AddItem } from './components/AddItem'

export default function App() {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['items'],
    queryFn: listItems,
  })

  return (
    <div style={{ maxWidth: 640, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Edge Boot</h1>
      <AddItem onAdded={() => queryClient.invalidateQueries({ queryKey: ['items'] })} />
      {isLoading && <p>Loading…</p>}
      {isError && <p>Failed to load items.</p>}
      {data && <ItemList items={data} />}
    </div>
  )
}


