import PalGallery from '@/components/feature/gallery/pal-gallery'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 xl:p-24">
      <section className="max-w-screen-2xl">
        <PalGallery />
      </section>
    </main>
  )
}
