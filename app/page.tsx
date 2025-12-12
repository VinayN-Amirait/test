// app/page.js
export default function Page() {
  return (
    <main style={{padding: '4rem', fontFamily: 'system-ui, sans-serif'}}>
      <header>
        <h1 style={{fontSize: '2.25rem', marginBottom: '.5rem'}}>Hello — I made a Next.js site!</h1>
        <p style={{fontSize: '1.125rem', color: '#444'}}>Edit this text in <code>app/page.js</code> and push to GitHub to redeploy.</p>
      </header>

      <section style={{marginTop: '2rem'}}>
        <h2>What this site does</h2>
        <ul>
          <li>Shows a homepage</li>
          <li>Auto-deploys with Vercel</li>
          <li>Easy to edit in Codespaces</li>
        </ul>
      </section>
    </main>
  )
}
