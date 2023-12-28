"use client";

import { useState } from "react";

import letters from "./letters.json";
import numbers from "./numbers.json";
import { fontList } from "@/fonts";

export default function ViewFont({ slug }: { slug: string }) {
  const fontQuery = slug;
  const [testInput, setTestInput] = useState("እዚህ ጽሑፍ ያስገቡ");
  const [fontSize, setFontSize] = useState("40");

  const amharicLetters: Array<string[]> = letters || [];
  const amahricNumbers: string[] = numbers || [];

  return (
    <>
      <main className="flex justify-center mt-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-center">{fontQuery}</h1>
          <br />
          <div>
            <input
              type="text"
              placeholder="enter amharic text..."
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <div className="mt-5">
              <label
                htmlFor="default-range"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Default range ({fontSize} px)
              </label>
              <input
                id="default-range"
                type="range"
                value={fontSize}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                onChange={(e) => setFontSize(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <a
              href={`/fonts/${fontList[fontQuery].link}`}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 text-sm px-4 rounded inline-flex items-center"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download Font</span>
            </a>
          </div>

          <div className="mt-10">
            <div
              className={fontList[fontQuery].font.className}
              style={{ fontSize: `${fontSize}px` }}
            >
              {testInput}
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center mt-10">
        <table>
          <tbody>
            {amharicLetters.map((r, k1) => (
              <tr key={k1} className="grid grid-cols-8 gap-10">
                {r.map((c, k2) => (
                  <td
                    key={k2}
                    className={fontList[fontQuery].font.className}
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-10">
        <h5 className="text-lg font-bold">Numbers:</h5>
        <div className="grid grid-cols-9 gap-10 mt-10">
          {amahricNumbers.map((n, k) => (
            <div
              key={k}
              className={fontList[fontQuery].font.className}
              style={{ fontSize: `${fontSize}px` }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
