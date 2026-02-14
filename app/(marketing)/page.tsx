import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to the Home Page</h1>
      <Link href="/revenue" className="text-blue-500 hover:underline">Go to Revenue Page</Link>
    </div>
  )
}