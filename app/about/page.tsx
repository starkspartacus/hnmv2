import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TeamSection from "@/app/team-section";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "À propos | Hauts Numériques et Médias",
  description:
    "Découvrez notre histoire, notre mission et l'équipe passionnée derrière Hauts Numériques et Médias, startup africaine innovante.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="À propos de Hauts Numériques et Médias"
            fill
            className="object-cover object-center brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Nous <span className="text-red-600">digitalisons</span>{" "}
              l&apos;Afrique, un secteur à la fois
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Hauts Numériques et Médias développe des solutions SaaS innovantes
              pour transformer le secteur informel africain et connecter les
              communautés.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-muted-foreground mb-6">
                Chez Hauts Numériques et Médias, nous avons une mission claire :
                démocratiser l&apos;accès aux technologies numériques pour tous
                les Africains. Nous développons des solutions SaaS accessibles
                qui permettent aux commerçants du secteur informel, aux petites
                entreprises et aux communautés diverses de prospérer à
                l&apos;ère numérique.
              </p>
              <p className="text-muted-foreground mb-6">
                Notre approche unique combine innovation technologique et
                compréhension profonde des réalités locales. Nous créons des
                outils qui répondent aux besoins spécifiques des marchés
                africains, en tenant compte des contraintes
                d&apos;infrastructure et en valorisant les pratiques
                commerciales existantes.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col items-center text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    1000+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Commerçants digitalisés
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-red-600 mb-2">5+</div>
                  <p className="text-sm text-muted-foreground">
                    Pays africains
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/african-business-3d.png"
                alt="Notre mission en Afrique"
                fill
                className="object-contain bg-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Story - e-maquis */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Notre Réussite Phare : e-maquis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Digitalisation du secteur informel de la restauration en Afrique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/sc.png"
                alt="Application e-maquis"
                fill
                className="object-contain w-55 h-55 bg-gradient-to-br from-black/5 to-red-600/5"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                Cas de réussite
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Révolutionner les maquis africains
              </h3>
              <p className="text-muted-foreground mb-4">
                e-maquis est notre solution SaaS phare qui transforme la gestion
                des &quot;maquis&quot; - ces restaurants et bars informels
                populaires en Afrique de l&apos;Ouest. Notre plateforme permet à
                ces établissements de gérer leurs stocks, leurs commandes et
                leurs finances de manière digitale.
              </p>
              <p className="text-muted-foreground mb-6">
                Grâce à e-maquis, nous avons aidé plus de 1000 propriétaires de
                maquis à augmenter leurs revenus de 30% en moyenne, tout en
                réduisant le gaspillage et en améliorant l&apos;expérience
                client. Cette solution démontre notre capacité à créer un impact
                réel dans le secteur informel africain.
              </p>
              <Button asChild className="gap-2">
                <Link
                  href="https://e-maquis.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Découvrir e-maquis
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident nos actions et façonnent notre approche
              africaine du numérique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusion</h3>
              <p className="text-muted-foreground">
                Nous créons des solutions accessibles à tous, quels que soient
                le niveau d&apos;éducation, les ressources ou
                l&apos;emplacement, pour que personne ne soit laissé de côté
                dans la révolution numérique africaine.
              </p>
            </div>

            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Innovation contextuelle
              </h3>
              <p className="text-muted-foreground">
                Nous développons des technologies adaptées aux réalités
                africaines, en tenant compte des infrastructures locales, des
                pratiques culturelles et des besoins spécifiques de nos
                communautés.
              </p>
            </div>

            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Impact social</h3>
              <p className="text-muted-foreground">
                Nous mesurons notre succès non seulement par notre croissance,
                mais aussi par l&apos;impact positif que nous avons sur les
                communautés africaines, en créant des opportunités économiques
                et en favorisant l&apos;autonomisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Notre parcours"
                fill
                className="object-contain bg-gradient-to-br from-black/5 to-red-600/5"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Notre Parcours</h2>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-red-600/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-red-600"></div>
                  <h3 className="text-xl font-bold mb-2">2018 - Les débuts</h3>
                  <p className="text-muted-foreground">
                    Fondation de Hauts Numériques et Médias par Hermann Litie
                    avec une vision claire : transformer le secteur informel
                    africain grâce à la technologie.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-red-600/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-red-600"></div>
                  <h3 className="text-xl font-bold mb-2">
                    2020 - Lancement d&apos;e-maquis
                  </h3>
                  <p className="text-muted-foreground">
                    Après des mois de recherche et développement, nous lançons
                    e-maquis, notre solution SaaS pour digitaliser les
                    restaurants et bars informels en Afrique de l&apos;Ouest.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-red-600/30">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-red-600"></div>
                  <h3 className="text-xl font-bold mb-2">
                    2023 - Expansion régionale
                  </h3>
                  <p className="text-muted-foreground">
                    Expansion de nos solutions dans plusieurs pays africains et
                    développement de nouvelles solutions SaaS pour d&apos;autres
                    secteurs informels, avec une équipe passionnée et
                    diversifiée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à nous rejoindre en tant que partenaire ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès aujourd&apos;hui pour nous accompagner dans cette
            aventure de digitalisation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90"
            >
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
