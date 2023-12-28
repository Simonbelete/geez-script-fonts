import localFont from "next/font/local";

const AddisFont = localFont({
  src: [
    {
      path: "./public/fonts/Addis/Addis.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const AdwaFont = localFont({
  src: [
    {
      path: "./public/fonts/Adwa/Adwa.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const ChiretFont = localFont({
  src: [
    {
      path: "./public/fonts/Chiret/Chiret-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const HabeshaStencilFont = localFont({
  src: [
    {
      path: "./public/fonts/Habesha-stencil/HabeshaSTENCIL.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const jiretFont = localFont({
  src: [
    {
      path: "./public/fonts/jiret/jiret.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const SeatFont = localFont({
  src: [
    {
      path: "./public/fonts/Seat/Seat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const TeraFont = localFont({
  src: [
    {
      path: "./public/fonts/Tera/Tera-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const TesfaFont = localFont({
  src: [
    {
      path: "./public/fonts/Tesfa/Tesfa.ttf",
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
