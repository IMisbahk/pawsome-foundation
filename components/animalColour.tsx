interface AnimalColourProps {
  colour: string[];
}
export function AnimalColour({ colour }: AnimalColourProps) {

  return (
    <div className="flex">
        {colour.length === 2 && (
            <div className="flex flex-col">
                <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[0] }}></div>
                <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[1] }}></div>
            </div>
        )}
        {colour.length === 3 && (
            <div className="flex">
                <div className="flex flex-col">
                    <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[0] }}></div>
                    <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[1] }}></div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[2] }}></div>
                </div>
            </div>
        )}
        {colour.length === 4 && (
            <div className="flex">
                <div className="flex">
                    <div className="flex flex-col">
                        <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[0] }}></div>
                        <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[1] }}></div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]" style={{ backgroundColor: colour[2] }}></div>
                    <div  className="w-10 h-10 rounded-full -ml-2 -mb-2 border-2 border-[#eee]  " style={{ backgroundColor: colour[3] }}></div>
                </div>
            </div>
        )}
    </div>
  );

}