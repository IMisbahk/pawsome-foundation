import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Animal } from "@/components/animal";
import { AnimalColour } from "./animalColour";

interface AnimalsListProps {
  animals?: Animal[];
}

export function AnimalsList({ animals = [] }: AnimalsListProps) {
  // Sample data for demonstration - replace with actual data fetching
  const sampleAnimals: Animal[] = animals.length > 0 ? animals : [
    {
      AnimalSpecies: "Dog",
      AnimalBreed: "Golden Retriever",
      MedicalCondition: "The Yamato-class battleships were two battleships of the Imperial Japanese Navy, Yamato (pictured) and Musashi, laid down leading up to the Second World War and completed as designed. A third hull was converted to the aircraft carrier Shinano during construction. Displacing nearly 72,000 long tons (73,000 t), the completed battleships were the heaviest ever constructed. The class carried the largest naval artillery ever fitted to a warship, nine 460 mm (18.1 in) naval guns, capable of firing 1,460 kg (3,220 lb) shells over 42 km (26 mi). Because of the threat of U.S. submarines and aircraft carriers, Yamato and Musashi spent the majority of their careers in naval bases. All three ships were sunk by the U.S. Navy: Musashi by air strikes while participating in the Battle of Leyte Gulf in October 1944, Shinano after being torpedoed by the submarine USS Archerfish in November 1944, and Yamato by air strikes while en route to Okinawa in April 1945. (This article is part of a featured topic: Yamato-class",
      HandlerName: "John Doe",
      DateOfArrival: "2024-01-15",
    },
    {
      AnimalSpecies: "Cat",
      AnimalBreed: "Persian",
      MedicalCondition: "Recovering",
      HandlerName: "Jane Smith",
      DateOfArrival: "2024-jan",
    }, 
  ];

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Animals</h1>
      <div className="flex flex-col gap-3">
        {sampleAnimals.map((animal, index) => (
          <Card key={index} className="rounded-[30px] bg-[#1e1e1e]">
            <CardHeader>
              <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-4xl">{animal.AnimalSpecies}</CardTitle>
                    <div className="">
                        <p className="text-sm text-[#EEEEEE] opacity-50 bg-[#333] rounded-full px-2 py-1 inline-block">{animal.AnimalBreed}</p>
                    </div>
                  </div>
                <AnimalColour colour={["#FF0000", "#00FF00", "#0000FF"]} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">

                <div>
                  <p className="text-xl font-medium line-clamp-2">{animal.MedicalCondition}</p>
                </div>
                <div className="flex justify-between text-[#EEEEEE] opacity-50 text-sm">
                  <p className="">{animal.HandlerName}</p>
                  <p className="">{animal.DateOfArrival}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

