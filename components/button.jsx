import Link from "next/link";

const buttonBaseClassName =
  'w-full h-[51px] text-button rounded-[8px] hover:opacity-90 disabled:cursor-not-allowed';

export const DefaultButton = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      className={`${buttonBaseClassName} text-black bg-yellowText ${className}`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

// export const LogoutButton = ({ children, className, linkPage, onClick, ...rest }) => {
//   return (
//     // <Link href={}>
//     <button className={`${buttonBaseClassName} text-black bg-yellowText ${className}`}
//             onClick={onClick}
//             {...rest}>
//             {children}
//     </button>
//     // </Link>
//   )
// }