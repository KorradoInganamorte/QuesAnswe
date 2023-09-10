import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-[10rem] flex items-center justify-between px-[3rem] bg-white rounded-bl-[20px] rounded-br-[20px] border border-black">
        <h1 className="text-black text-5xl font-bold">Question & Answer</h1>
        <Link className="text-neutral-500 text-xl font-medium cursor-pointer" href="/create">+Создать QuesAnswe</Link>
    </div>
  )
}

export default Header