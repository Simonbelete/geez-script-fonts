import Image from "next/image";
import localFont from "next/font/local";

const AddisFont = localFont({
  src: [
    {
      path: "../public/fonts/Addis/Addis.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const AdwaFont = localFont({
  src: [
    {
      path: "../public/fonts/Adwa/Adwa.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const ChiretFont = localFont({
  src: [
    {
      path: "../public/fonts/Chiret/Chiret-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const HabeshaStencilFont = localFont({
  src: [
    {
      path: "../public/fonts/Habesha-stencil/HabeshaSTENCIL.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const jiretFont = localFont({
  src: [
    {
      path: "../public/fonts/jiret/jiret.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const SeatFont = localFont({
  src: [
    {
      path: "../public/fonts/Seat/Seat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const TeraFont = localFont({
  src: [
    {
      path: "../public/fonts/Tera/Tera-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const TesfaFont = localFont({
  src: [
    {
      path: "../public/fonts/Tesfa/Tesfa.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const fontList: any = {
  Addis: {
    link: "Addis/Addis.ttf",
    font: AddisFont,
  },
  Adwa: {
    link: "Adwa/Adwa.ttf",
    font: AdwaFont,
  },
  Chiret: {
    link: "Chiret/Chiret-Regular.ttf",
    font: ChiretFont,
  },
  HabeshaStencilFont: {
    link: "Habesha-stencil/HabeshaSTENCIL.ttf",
    font: HabeshaStencilFont,
  },
  jiret: {
    link: "jiret/jiret.ttf",
    font: jiretFont,
  },
  SeatFont: {
    link: "Seat/Seat-Regular.ttf",
    font: SeatFont,
  },
  Tera: {
    link: "Tera/Tera-Regular.ttf",
    font: TeraFont,
  },
  Tesfa: {
    link: "Tesfa/Tesfa.ttf",
    font: TesfaFont,
  },
};

export default function Home() {
  return (
    <main className="flex justify-center mt-10 ">
      <div className="flex flex-col gap-10  w-8/12 justify-center ">
        <h1 className="text-3xl font-bold">Fonts</h1>

        {Object.keys(fontList).map((key, index) => {
          return (
            <div key={index} className="w-full">
              <div className="flex justify-between text-sm ">
                <p>{key} Font</p>
                <a href={`/${key}`} className="text-blue-500">
                  View/Download
                </a>
              </div>
              <hr />

              <p
                className={`tracking-widest w-8/12 ${fontList[key].font.className}`}
                style={{ fontSize: "32px" }}
              >
                ሀለሐመሠረሰሸቀበቨተቸኀነኘአከኸወዐዘዠየደጀገጠጨጰጸፀፈፐ
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
