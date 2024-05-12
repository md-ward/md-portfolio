'use client';
async function getPdf() {
  try {
    const response = await fetch('/api/download'); // Replace with your endpoint URL
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'mohammad ward cv.pdf'; // Replace with the desired file name
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
  }
}

export default function CvButton({ displayBtn }: { displayBtn: boolean }) {
  return (
    <button
      onClick={getPdf}
      type='button'
      style={{ animationDelay: `1.2s` }}
      className={`animate-link  light:text-gray-900 rounded-[12px] bg-darkCol/90 px-2 py-1 text-white duration-200 ease-in-out hover:scale-95 dark:bg-danger ${displayBtn ? 'block sm:hidden' : 'hidden sm:block'}`}
    >
      Download CV
    </button>
  );
}
