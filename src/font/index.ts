import localFont from "next/font/local";

export const agrandir_grand = localFont({
  src: [
    {
      path: "./PPAgrandir-GrandHeavy.otf",
      weight: "800",
      style: "heavy",
    },
    {
      path: "./PPAgrandir-GrandLight.otf",
      weight: "300",
      style: "light",
    },
  ],
});
