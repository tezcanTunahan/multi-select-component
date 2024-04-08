// Component to show the selected elements in the input
export default function InputSelectedElement({}
  

}: {
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
}) => {
  return (
    <div className='flex items-center bg-gray-300 py-1 px-3 gap-2 rounded-xl '>
      <p className='font-semibold text-sm flex min-w-max'>{value.label.length > 10 ? value.label.substring(0, 10) + '...' : value.label}</p>
      <button
        onClick={() => {
          setValue((prevValue: SelectOption[] | undefined) => {
            return prevValue?.filter((opt: any) => opt.value !== value.value);
          });
        }}
        className='bg-gray-500 px-3 py-1 text-white rounded-md'>
        x
      </button>
    </div>
  );
};


