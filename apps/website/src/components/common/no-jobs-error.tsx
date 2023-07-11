import { MdOutlineSubtitlesOff } from 'react-icons/md';

export interface INoJobsError {
  message: string;
  suggestions: string[];
}

export default function NoJobsError({ message, suggestions }: INoJobsError) {
  return (
    <div className='w-full flex flex-col'>
      <MdOutlineSubtitlesOff className='text-4xl text-neutral-400 mb-2' />
      <p>{message}</p>

      <ul className='text-left mt-5 text-BodySM list-disc text-neutral-600 ml-5'>
        {suggestions.map((noJobsErrorSuggestion, index) => (
          <li key={index} className='p-1'>
            {noJobsErrorSuggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}
