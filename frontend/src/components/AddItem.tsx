import { useMutation } from '@tanstack/react-query'
import { createItem } from '../lib/api'
import { useState } from 'react'

export function AddItem({ onAdded }: { onAdded: () => void }) {
  const [text, setText] = useState('')
  const mutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      setText('')
      onAdded()
    },
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed.length < 1) return
    mutation.mutate(trimmed)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Describe your item"
        minLength={1}
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <button type="submit" disabled={mutation.isPending || text.trim().length < 1}>
        {mutation.isPending ? 'Adding…' : 'Add'}
      </button>
    </form>
  )
}


