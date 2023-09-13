import Button from "./Button";
import Image from "next/image";
import img1 from "../public/img.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F6F8FB] pt-32 pb-10">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold sm:text-5xl sm:leading-tight">
            Great software is built with amazing developers
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button size="large">Get Started</Button>
          </div>
        </div>
        <div>
          <Image src={img1} alt="" />
        </div>
      </div>
    </section>
  );
}
