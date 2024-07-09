"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Pill,
  Users,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div className="flex min-h-screen w-full flex-col  ">
      <header className="sticky z-40 justify-between md:px-24 top-0 flex h-16 items-center gap-4 border-b bg-background px-4 ">
        <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image
              src="/logo.jpeg"
              className="rounded-full"
              alt="logo"
              height={50}
              width={50}
            />
            <span className="sr-only">Файнди Мед Нутри ХХК</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Бидний тухай
          </Link>
          <Link
            href="#location"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Хүргэлтийн бүс
          </Link>
          <Link
            href="#products"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Бүтээгдэхүүнүүд
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Холбоо барих
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Жижиг меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image
                  src="/logo.jpeg"
                  className="rounded-full"
                  alt="logo"
                  height={50}
                  width={50}
                />
                <span className="sr-only">Файнди Мед Нутри ХХК</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Бидний тухай
              </Link>
              <Link
                href="#location"
                className="text-muted-foreground hover:text-foreground"
              >
                Хүргэлтийн бүс
              </Link>
              <Link
                href="#products"
                className="text-muted-foreground hover:text-foreground"
              >
                Бүтээгдэхүүнүүд
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Холбоо барих
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Миний бүртгэл</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Нэвтрэх</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 md:px-24 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <section id="search" className="md:h-screen mt-16">
          <Card x-chunk="dashboard-01-chunk-0 ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Та юу хайж байна вэ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full flex gap-4 justify-around">
                <Input
                  type="search"
                  placeholder="Халуун бууруулах наалт..."
                  className="pl-8 w-full"
                />
                <Button asChild className="ml-auto gap-1">
                  <Link href="#">
                    Хайлт
                    <Search className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="w-full mt-48">
            <div ref={sliderRef} className="keen-slider rounded-lg h-[400px]">
              <div className="keen-slider__slide ">
                <Image
                  src="/banner1.jpg"
                  alt="Image 1"
                  width={1800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  src="/banner1.jpg"
                  alt="Image 2"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="keen-slider__slide">
                <Image
                  src="/banner1.jpg"
                  alt="Image 3"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="md:h-screen">
          <h1 className="text-2xl font-bold text-center mb-12">
            Шинэ Бүтээгдэхүүнүүд
          </h1>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <Card className="overflow-hidden w-full md:w-[400px]">
              <CardHeader>
                <CardTitle>
                  {" "}
                  Акуафор <br />
                  <span className="text-muted-foreground text-lg">
                    Aquaphor{" "}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/image.png"
                    width="300"
                  />
                </div>
                <div className="my-4">
                  <CardDescription>
                    Хүүхдийн арьсны нуралтад зориулсан тос
                  </CardDescription>
                  <p className="text-lg font-bold my-2 "> ₮ 80,000</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" className="bg-muted" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <p className="h-4 w-4">1</p>
                    </Button>
                    <Button variant="outline" className="bg-muted" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Сагсанд хийх <ShoppingCart className="h-4 w-4 mx-2" />
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden w-full md:w-[400px]">
              <CardHeader>
                <CardTitle>
                  Кобаяши Халууны наалт <br />
                  <span className="text-muted-foreground text-lg">
                    熱さまシート{" "}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/product2.png"
                    width="300"
                  />
                </div>
                <div className="my-4">
                  <CardDescription>
                    Хүүхдийн халуун бууруулах наалт
                  </CardDescription>
                  <p className="text-lg font-bold my-2 "> ₮ 80,000</p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" className="bg-muted" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <p className="h-4 w-4">1</p>
                    </Button>
                    <Button variant="outline" className="bg-muted" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Сагсанд хийх <ShoppingCart className="h-4 w-4 mx-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="location">
          <div className="w-full mt-12 h-[400px] rounded-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171094.7140709828!2d106.57879860051882!3d47.929518258910385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217a47fcaaaea20d%3A0x6b5ddc2efa067d29!2z0JzTqdC90LPTqdC9INCX0q_SryDQrdC80L3RjdC70Y3Qsw!5e0!3m2!1sen!2sjp!4v1720519972456!5m2!1sen!2sjp"
              aria-hidden="true"
            ></iframe>
          </div>
        </section>
        <section id="contact" className="my-12">
          <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
              <CardTitle>Холбоо барих</CardTitle>
              <CardDescription>
                Та бидэнтэй хамтран ажиллах боломжуудыг хүсэлтээ үүсгэх
                боломжтой.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Textarea />
              </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>Илгээх</Button>
            </CardFooter>
          </Card>
        </section>
      </main>
      <footer className=" justify-between md:px-24  flex h-24 items-center gap-4 border-b bg-muted px-4 ">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            {new Date().getFullYear()} © Файнди Мед Нутри ХХК
          </p>

          <p>
            <Link
              href="https://github.com/noodlesaddle"
              rel="noreferrer"
              className="text-xs  "
            >
              Powered by noodlesaddle
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
