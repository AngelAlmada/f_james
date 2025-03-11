// data/ObrasName.ts
interface ObrasNameProps {
  name: string;
}

export function ObrasName({ name }: ObrasNameProps) {
  return (
    <div className="p-2 bg-black bg-opacity-60 text-white text-center text-sm font-semibold">
      {name}
    </div>
  );
}

export default ObrasName;
