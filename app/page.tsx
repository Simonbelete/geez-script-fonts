import Image from "next/image";
import { fontList } from "@/fonts";

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
