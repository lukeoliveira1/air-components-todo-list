import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";

export default function Box({ text, description }: TaskProps) {
  return (
    <>
      <div className="w-[485px] h-[150px] border-gray-300 border-1 rounded-lg p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 pb-5">
            <input type="checkbox" className="size-5 accent-black" />
            <h3 className="font-semibold text-base">{text}</h3>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="cursor-pointer text-gray-500 hover:text-black"
            >
              <SquarePen />
            </button>
            <button
              type="button"
              className="cursor-pointer text-gray-500 hover:text-black"
            >
              <Trash2 />
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
}
