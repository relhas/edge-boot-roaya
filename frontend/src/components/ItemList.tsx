import type { Item } from '../types'

export function ItemList({ items }: { items: Item[] }) {
  if (items.length === 0) return <p>No items yet.</p>
  return (
    <ul style={{ padding: 0, listStyle: 'none' }}>
      {items.map((it) => (
        <li key={it.id} style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
          <div>{it.text}</div>
          <small style={{ color: '#666' }}>{it.created_at}</small>
        </li>
      ))}
    </ul>
  )
}


