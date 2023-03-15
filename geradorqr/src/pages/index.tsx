import { useState, useRef, useEffect } from "react";
import QrCode from "../../components/QRgen";

import { ColorResult, SketchPicker } from "react-color";
interface QRCodeOptions {
  level?: "L" | "M" | "Q" | "H";
  margin?: number;
  scale?: number;
  width?: number;
  color?: { dark?: string; light?: string };
}

const HomePage = () => {
  const [text, setText] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showDarkPicker, setShowDarkPicker] = useState(false);
  const [showLightPicker, setShowLightPicker] = useState(false);

  const [options, setOptions] = useState<QRCodeOptions>({
    level: "H",
    margin: 2,
    scale: 5,
    width: 150,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };


  const handleMarginChange = (margin: number) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      margin,
    }));
  }
  

  const handleScaleChange = (scale: number) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      scale,
    }));
  };

 

  const handleWidthChange = (width: number) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      width,
    }));
  };


  const handleDarkColorChange = (color: ColorResult) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      color: {
        ...prevOptions.color,
        dark: color.hex,
      },
    }));
  };

  const handleLightColorChange = (color: ColorResult) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      color: {
        ...prevOptions.color,
        light: color.hex,
      },
    }));
  };

  const handleOptionsChange = (e: any) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleLevelChange = (level: "L" | "M" | "Q" | "H") => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      level,
    }));
  };

  const darkPickerRef = useRef<HTMLDivElement>(null);
  const lightPickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        darkPickerRef.current &&
        !darkPickerRef.current.contains(e.target as Node)
      ) {
        setShowDarkPicker(false);
      } else if (
        lightPickerRef.current &&
        !lightPickerRef.current.contains(e.target as Node)
      ) {
        setShowLightPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleDarkPickerClick = () => {
    setShowLightPicker(false);
    setShowDarkPicker(!showDarkPicker);
  };
  
  const handleLightPickerClick = () => {
    setShowDarkPicker(false);
    setShowLightPicker(!showLightPicker);
  };
  

  return (
    <div className="container mx-auto justify-center flex items-center w-full  h-100%">
      <div className="w-100% h-100% mt-40">
        <div className=" w-full h-screen sm:w-96">
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
              Qualidade:
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
                  //on change parse margin value to int 
                                onChange={(e) => handleMarginChange(parseInt(e.target.value))}


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
            <div className="relative">
              <button
                onClick={handleDarkPickerClick}
                className="w-full h-8  border-black rounded-md border"
                style={{ backgroundColor: options.color?.dark }}
              ></button>
              {showDarkPicker && (
                <div className="absolute z-10">
                  <SketchPicker
                    color={options.color?.dark}
                    onChange={(color: ColorResult) =>
                      setOptions((prevOptions) => ({
                        ...prevOptions,
                        color: {
                          ...prevOptions.color,
                          dark: color.hex,
                        },
                      }))
                    }
                  />
                </div>
              )}
            </div>
          </div>
          <br />
          <div className="mb-4">
            <label htmlFor="color" className="block mb-2 font-bold">
              Cor Clara:
            </label>
            <div className="relative">
              <button
                onClick={handleLightPickerClick}
                className="w-full border-black h-8 rounded-md border"
                style={{ backgroundColor: options.color?.light }}
              ></button>
              {showLightPicker && (
                <div className="absolute z-10">
                  <SketchPicker
                    color={options.color?.light}
                    onChange={(color: ColorResult) =>
                      setOptions((prevOptions) => ({
                        ...prevOptions,
                        color: {
                          ...prevOptions.color,
                          light: color.hex,
                        },
                      }))
                    }
                  />
                </div>
              )}
            </div>
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
              alt="logo"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-center">
            {text && ( // se text for true ele renderiza o QrCode se não ele não renderiza nada
              <QrCode text={text}  options={options} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
