'use client';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className='sticky inset-0 bottom-4 left-[95%] z-50 aspect-square size-12 rounded-full border-danger bg-darkCol/90 text-white shadow-lg duration-200 ease-in-out hover:bg-danger dark:hover:bg-danger  hover:text-lightCol dark:bg-lightCol dark:text-darkCol'
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollToTop;
