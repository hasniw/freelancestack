'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, tool_interest: 'newsletter' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2 text-white">Inscrit !</h3>
        <p className="text-stone-400">Vous recevrez nos meilleurs conseils par email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Prénom"
        value={name}
        onChange={e => setName(e.target.value)}
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
      />
      <input
        type="email"
        required
        placeholder="votre@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'loading' ? '...' : '📩 S\'inscrire'}
      </button>
    </form>
  );
}
