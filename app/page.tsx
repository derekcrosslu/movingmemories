import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Gift, PlayCircle, Video, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { MobileMenu } from '../components/mobile-menu';



export default function Component() {

  return (
    <div className="flex flex-col min-h-screen w-full ">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <PlayCircle className="h-6 w-6 hover:text-pink-500" />
          <span className="ml-2 text-lg font-semibold">Ricardo Lay's Moving Memories</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 hidden lg:flex ">
        <Link className="text-sm font-medium  hover:text-pink-500" href="#services">
            Our Team
          </Link>
          <Link className="text-sm font-medium  hover:text-pink-500" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium  hover:text-pink-500" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium  hover:text-pink-500" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium  hover:text-pink-500" href="#contact">
            Contact
          </Link>
          <Link className="text-sm font-medium  hover:text-pink-500" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium  hover:text-pink-500" href="#life-memories">
            Life Memories
          </Link>
        </nav>
          <MobileMenu />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800 bg-orange-300">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="https://images.unsplash.com/photo-1524117853209-a2fcab240719?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={800}
                height={600}
                alt="Family looking through a photo album"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                style={{ objectPosition: 'top' }}
              />
              <div className="flex flex-col justify-center space-y-4 md:items-center md:text-center">
                <div className="space-y-2 ">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Preserve Your Life Story with Moving Memories
                  </h1>
                  <p className="max-w-[600px] md:max-w-full text-gray-500 md:text-xl dark:text-gray-400 md:text-center">
                    Create personal video memoirs that capture your unique journey for future generations.
             
                  <span className="max-w-[600px] md:max-w-full text-white font-semibold md:text-xl mt-2 ml-1 hover:underline underline-offset-4 ">
                    EVERYONE has a story worth sharing.
                  </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="hover:bg-pink-500 hover:text-white">Get Started</Button>
                  <Button size="lg" variant="outline" className="hover:bg-pink-500 hover:text-white">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-black ">
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-10 text-white">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 justify-center">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Life Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.unsplash.com/photo-1534768654272-e97681c3a2c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                    height={200}
                    alt="Elderly person being interviewed"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p>Capture your life journey in a professionally produced documentary.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Funeral Tribute Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?w=400&q=80"
                    width={400}
                    height={200}
                    alt="Memorial video being played at a service"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p>Create a touching memorial video to honor your loved ones.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Video Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="https://images.unsplash.com/photo-1514415008039-efa173293080?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={400}
                    height={200}
                    alt="Person learning video editing techniques"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p>Learn how to create impactful video memoirs with our expert guidance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center text-center">
                <Video className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Choose Your Service</h3>
                <p>Select from our range of video memoir services.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PlayCircle className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Record Your Story</h3>
                <p>We conduct interviews online or face-to-face.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Check className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Receive Your Memoir</h3>
                <p>Get your professionally edited video memoir.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-14 text-white ">Pricing</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
              <Card className=" hover:bg-pink-500  hover:text-white hover:border-pink-500">
                <CardHeader>
                  <CardTitle>Remote Recording</CardTitle>
                  <CardDescription className="hover:text-white">Starting from</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$550</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Online interview
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Professional editing
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Digital delivery
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className=" hover:bg-pink-500  hover:text-white hover:border-pink-500">
                <CardHeader>
                  <CardTitle>Face-to-Face Production</CardTitle>
                  <CardDescription className="hover:text-white">Starting from</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$995</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      In-person interview
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Professional filming and editing
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      Physical and digital copies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Give the Gift of Memories</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Surprise your loved ones with a Moving Memories gift voucher.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button className="w-full" size="lg">
                    <Gift className="mr-2 h-4 w-4" />
                    Purchase Gift Voucher
                  </Button>
                </div>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"
                width={600}
                height={400}
                alt="Gift box with a bow"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Start Your Memory Journey Today</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Don't let precious stories be lost. Capture your family's legacy now.
                </p>
              </div>
              <p className="text-lg font-semibold text-primary mb-4">
                Book a FREE call to discuss your Video Memoir
              </p>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-gray-100 dark:bg-gray-800 border-t">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <PlayCircle className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">Moving Memories</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Preserving life stories for future generations through personal video memoirs.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Services</Link></li>
                <li><Link href="#how-it-works" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">How It Works</Link></li>
                <li><Link href="#pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Pricing</Link></li>
                <li><Link href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Subscribe to Our Newsletter</h4>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  />
                  <Button type="submit" className="rounded-l-none">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Moving Memories. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}

function Link({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}