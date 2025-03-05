import Image from "next/image";

export default function Header() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-custom-green items-center text-white justify-items-center p-8 pt-30 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col pt-10">
        <Image
          className="dark:invert pb-10"
          src="/images/novari-logo.png"
          alt="Novari Logo"
          width={180}
          height={216}
        />

        <h2 className="text-2xl text-custom-white text-center">
          Positive Quotation
        </h2>
      </main>
    </div>
  );
}
