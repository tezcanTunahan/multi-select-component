import React from 'react';
import { SelectOption } from '../MultiSelectSearch';
import { getSubString } from '@/lib/utils';

type InputSelectedElementProps = {
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
};

// Component to show the selected elements in the input
export default function InputSelectedElement({ value, setValue }: InputSelectedElementProps) {
  const removeElement = () => {
    setValue((prevValue: SelectOption[] | undefined) => {
      return prevValue?.filter((opt) => opt.value !== value.value);
    });
  };

  return (
    <div className='flex items-center bg-gray-200 py-[5px] px-[10px] gap-2 rounded-md '>
      <p className=' text-sm flex min-w-max text-gray-700'>{getSubString(value.label, 10)}</p>

      <button onClick={removeElement} className='bg-gray-500  px-[7px] text-white rounded-md'>
        x
      </button>
    </div>
  );
}
