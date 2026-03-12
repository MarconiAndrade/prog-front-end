import Image from "next/image";
import Profile from "@/components/Profile";
import TeaSet from "@/components/TeaSet";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Olá, meus amigos, quando nos veremos?
      <TeaSet />
      <Profile />
      Exemplo de expressão: {5**3}
    </div>
  );
}
