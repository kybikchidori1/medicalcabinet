import { FC, SVGProps } from "react";

const Vector: FC<SVGProps<SVGSVGElement>> = ({
  width = 18,
  height = 18,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.6719 13.1484C11.2835 13.1484 10.9688 13.4632 10.9688 13.8516C10.9688 15.3636 9.73869 16.5938 8.22656 16.5938C6.71443 16.5938 5.48438 15.3636 5.48438 13.8516V11.8308L7.98404 8.20363C7.99942 8.18124 8.01315 8.15817 8.02565 8.13469C8.0733 8.09019 8.12027 8.04488 8.16614 7.99818C9.0666 7.08275 9.5625 5.80298 9.5625 4.39453C9.5625 4.38245 9.56223 4.37036 9.56154 4.35841L9.5625 1.63477C9.5625 0.733337 8.82916 0 7.92773 0H6.60938C6.22101 0 5.90625 0.314758 5.90625 0.703125V1.40625C5.90625 1.79462 6.22101 2.10938 6.60938 2.10938C6.99774 2.10938 7.3125 1.79462 7.3125 1.40625H7.92773C8.0538 1.40625 8.15625 1.5087 8.15625 1.63449L8.15529 4.39426C8.15529 4.40565 8.15556 4.41692 8.15611 4.42804C8.14101 6.48866 6.72638 7.98047 4.78125 7.98047C2.82568 7.98047 1.40625 6.47232 1.40625 4.39453C1.40625 4.3727 1.40488 4.351 1.40295 4.32957C1.40501 4.30815 1.40625 4.28659 1.40625 4.26462V1.63477C1.40625 1.5087 1.5087 1.40625 1.63477 1.40625H2.21567C2.23407 1.77827 2.54141 2.07422 2.91797 2.07422C3.30634 2.07422 3.62109 1.75946 3.62109 1.37109V0.703125C3.62109 0.314758 3.30634 0 2.91797 0H1.63477C0.733337 0 0 0.733337 0 1.63477V4.26462C0 4.28659 0.00137329 4.30815 0.0032959 4.32957C0.00137329 4.351 0 4.3727 0 4.39453C0 5.80298 0.495895 7.08275 1.39636 7.99818C1.42451 8.02675 1.45294 8.0549 1.48164 8.08264C1.49963 8.12439 1.52174 8.1649 1.54852 8.20363L4.07812 11.8743V13.8516C4.07812 16.1391 5.93907 18 8.22656 18C10.5141 18 12.375 16.1391 12.375 13.8516C12.375 13.4632 12.0602 13.1484 11.6719 13.1484ZM4.78125 9.38672C5.02336 9.38672 5.26204 9.36955 5.49577 9.33604L4.76628 10.3946L4.03322 9.33096C4.27766 9.36777 4.5276 9.38672 4.78125 9.38672ZM16.5938 7.53896V2.8125C16.5938 1.26164 15.3321 0 13.7812 0C12.2304 0 10.9688 1.26164 10.9688 2.8125V10.3359C10.9688 10.7243 11.2835 11.0391 11.6719 11.0391C12.0602 11.0391 12.375 10.7243 12.375 10.3359V2.8125C12.375 2.03714 13.0059 1.40625 13.7812 1.40625C14.5566 1.40625 15.1875 2.03714 15.1875 2.8125V7.53896C14.3692 7.82913 13.7812 8.61067 13.7812 9.52734C13.7812 10.6905 14.7274 11.6367 15.8906 11.6367C17.0538 11.6367 18 10.6905 18 9.52734C18 8.61067 17.4121 7.82913 16.5938 7.53896ZM15.8906 10.2305C15.5029 10.2305 15.1875 9.91502 15.1875 9.52734C15.1875 9.13966 15.5029 8.82422 15.8906 8.82422C16.2783 8.82422 16.5938 9.13966 16.5938 9.52734C16.5938 9.91502 16.2783 10.2305 15.8906 10.2305Z" />
    </svg>
  );
};

export default Vector;
