import { Search } from 'lucide-react';

export default function SearchBox({
  searchKey,
  handleSetSearchKey,
}: {
  searchKey: string;
  handleSetSearchKey: (key: string) => void;
}) {
  return (
    <div className="m-5 flex gap-5 align-center rounded-3xl p-3 z-20 border border-solid border-black shadow-[4px_7px_0px_0px]">
      <Search />
      <input
        type="text"
        placeholder="Search"
        value={searchKey}
        onChange={(e) => handleSetSearchKey(e.target.value)}
        className='w-full'
      />
    </div>
  );
}
