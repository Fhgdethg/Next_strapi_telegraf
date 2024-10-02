'use client'

import Link from "next/link";

export default function Header() {

  return (
    <header style={{padding: 20, display: 'flex', justifyContent: 'space-between'}}>
      <p style={{fontSize: 24, fontWeight: "bold"}}>
        Header
      </p>
      <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
        <Link href="/first-page" style={{textDecoration: 'underline'}}>First page</Link>
        <Link href="/second-page" style={{textDecoration: 'underline'}}>Second page</Link>
      </div>
    </header>
  );
}
