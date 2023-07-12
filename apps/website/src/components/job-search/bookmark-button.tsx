import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

interface IBookmarkButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  bookmarked: boolean;
}

const BookmarkButton = ({ bookmarked, ...buttonProps }: IBookmarkButton) => (
  <button className='text-rose-900 text-BodyLG' {...buttonProps}>
    {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
  </button>
);

export default BookmarkButton;
