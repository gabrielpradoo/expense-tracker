import { Button } from "../../atoms/Button";
import { IoTrashSharp, IoPencilSharp } from "react-icons/io5";

export const ExpenseCard = ({ title, category, cost }) => {
  return (
    <article className="relative flex flex-col justify-between h-40 gap-2 p-4 bg-white rounded-md shadow-md">
      <div className="absolute top-0 right-0 flex gap-2 mt-2 mr-2">
        <Button style={{ padding: "0 12px" }}>
          <IoPencilSharp fontSize="24px" />
        </Button>

        <Button style={{ padding: "0 12px" }}>
          <IoTrashSharp fontSize="24px" />
        </Button>
      </div>

      <h2 className="text-xl font-bold">{title}</h2>
      <p className="flex items-center self-start justify-center h-8 px-4 text-green-900 bg-green-100 rounded-full">
        {category}
      </p>
      <p className="text-xl font-bold">R${cost}</p>
    </article>
  );
};
