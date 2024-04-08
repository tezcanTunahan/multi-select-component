import React from 'react';
import { SelectOption } from './MultiSelectSearch';

type InputSelectedElementProps = {
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
};

// Component to show the selected elements in the input
export default function InputSelectedElement({ value, setValue }: InputSelectedElementProps) {
  return (
    <div className='flex items-center bg-gray-200 py-[5px] px-[10px] gap-2 rounded-md '>
      <p className=' text-sm flex min-w-max text-gray-700'>{value.label.length > 10 ? value.label.substring(0, 10) + '...' : value.label}</p>
      <button
        onClick={() => {
          setValue((prevValue: SelectOption[] | undefined) => {
            return prevValue?.filter((opt: any) => opt.value !== value.value);
          });
        }}
        className='bg-gray-500  px-[7px] text-white rounded-md'>
        x
      </button>
    </div>
  );
}
