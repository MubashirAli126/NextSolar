import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import InstallmentComponent from '@/components/InstallmentComponent'
import TrustBanner from '@/components/TrustBanner'
import Cta from '@/components/Cta'
import Clients from '@/components/Clients'
import CertificateBanner from '@/components/CertificateBanner'
import PerformanceCertified from '@/components/PerformanceCertified'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <CertificateBanner />
      <Intro />
      <Clients />
      <PerformanceCertified />
      <Services />
      <InstallmentComponent />
      <Portfolio />
      <TrustBanner />
      <Cta />
    </main>
  )
}
