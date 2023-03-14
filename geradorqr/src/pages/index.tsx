import { useState } from "react";
import QrCode from "../../components/QRgen";
interface QRCodeOptions {
  level?: "L" | "M" | "Q" | "H";
  margin?: number;
  scale?: number;
  width?: number;
  color?: { dark?: string | undefined; light?: string | undefined } | undefined;
}

const HomePage = () => {
  const [text, setText] = useState("placeholder");

  const [options, setOptions] = useState<QRCodeOptions>({
    level: "L",
    margin: 2,
    scale: 5,
    width: 150,
    color: {
      dark: "#010599FF",
      light: "#FFBF60FF",
    },
  });

  const handleTextChange = (e: any) => {
    setText(e.target.value);
    if (text === "") {
      setText("");
    }
  };

  const handleOptionsChange = (e: any) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: name === "color" ? { ...prevOptions.color, dark: value,  } : value,

      setmargin(margin: number) {
        setOptions((prevOptions) => ({
          ...prevOptions,
          margin,
        }));
      }

    }));
  };

  return (
  
    <div className="container mx-auto   justify-center flex items-center w-full  h-screen">
      <div className=" w-full h-[100%] mx-auto flex justify-center items-center">
        <div className=" w-full sm:w-96">
          <div className="my-4">
            <label htmlFor="text" className="block mb-2 font-bold">
              Texto:
            </label>
            <input
              type="text"
              id="text"
              name="text"
              value={text}
              onChange={handleTextChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="level" className="block mb-2 font-bold">
              Nível:
            </label>
            <select
              id="level"
              name="level"
              value={options.level}
              onChange={handleOptionsChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q">Q</option>
              <option value="H">H</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="margin" className="block mb-2 font-bold">
              Margem:
            </label>
            <input
              type="number"
              id="margin"
              name="margin"
              value={options.margin}
              onChange={handleOptionsChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="scale" className="block mb-2 font-bold">
              Escala:
            </label>
            <input
              type="number"
              id="scale"
              name="scale"
              value={options.scale}
              onChange={handleOptionsChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block mb-2 font-bold">
              Largura:
            </label>
            <input
              type="number"
              id="width"
              name="width"
              value={options.width}
              onChange={handleOptionsChange}
              className="w-full px-3 py 2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block mb-2 font-bold">
              Cor Escura:
            </label>
            <input
              type="color"
              id="color"
              name="color"
              value={options.color?.dark}
              onChange={handleOptionsChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            <label htmlFor="color" className="block mb-2 font-bold">
              Cor Clara:
            </label>
            <input
              type="color"
              id="color"
              name="color"
              value={options.color?.light}
              onChange={handleOptionsChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="logo" className="block mb-2 font-bold">
              Logo:
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <QrCode text={text} options={options} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
