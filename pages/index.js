import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-background h-screen flex justify-center items-center'>
      <div>
        <h1 className='text-hover text-whiteText font-bold text-center'>Hello</h1>
        <p className="text-yellowText">Click <Link href='/global'><span className='text-whiteText'>here</span></Link> to access the dashboard</p>
      </div>
    </div>
  )
}
