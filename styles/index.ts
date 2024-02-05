const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  //navbar
  menuItems:
    'bg-gradient-to-r from-violet-500 rounded-lg items-center gap-3 px-6 py-8',
  menuOpen: 'flex flex-col gap-12 list-none z-1 visible text-white',

  // hero section
  heroHeading:
    'font-bold lg:text-[72px] sm:text-[60px] text-[32px]   uppercase text-white',

  //Misc
  sectionHeader:
    'font-bold lg:text-[72px] sm:text-[60px] text-[32px]   uppercase text-white',
  sectionSubtitle:
    'font-light text-[16px] md:text-[26px] text-center text-white',
  inputContainer:
    'text-white px-[25px] py-2.5 rounded-[10px] border-2 border-solid border-[#8707ff] active:shadow-[2px_2px_15px_#8707ff_inset] bg-transparent z-1',
  labelText: 'font-light text-[16px] uppercase text-white',
  customButton:
    "cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700",
};

export default styles;
