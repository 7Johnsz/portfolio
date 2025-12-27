import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('HomePage');

  return (
    <main className="text-2xl flex flex-col items-center">
      <h1>{t('title')}</h1>
    </main>
  )
}