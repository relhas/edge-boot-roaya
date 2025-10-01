import type { Item } from '../types'

export const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

export async function listItems(): Promise<Item[]> {
  const res = await fetch(`${BASE_URL}/items`)
  if (!res.ok) throw new Error('Failed to fetch items')
  return res.json()
}

export async function createItem(text: string): Promise<Item> {
  const res = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  if (!res.ok) throw new Error('Failed to create item')
  return res.json()
}


