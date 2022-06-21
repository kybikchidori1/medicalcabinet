import { FC, SVGProps } from "react";

const Book: FC<SVGProps<SVGSVGElement>> = ({
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
      <path d="M17.2969 7.8047C17.6852 7.8047 18 7.48991 18 7.10158V1.75783C18 1.53701 17.8963 1.32902 17.7199 1.1962C17.5435 1.06335 17.315 1.02106 17.1028 1.08202C16.2884 1.31591 15.2503 1.24992 13.9361 1.16632C13.1132 1.11401 12.1805 1.0547 11.1094 1.0547C10.27 1.0547 9.51579 1.42483 9.00001 2.00986C8.48423 1.42483 7.73006 1.0547 6.89063 1.0547C5.81953 1.0547 4.88683 1.11401 4.06393 1.16636C2.74976 1.24992 1.71166 1.31591 0.897267 1.08205C0.684994 1.02109 0.456513 1.06338 0.280099 1.19624C0.10372 1.32906 9.55296e-06 1.53704 9.55296e-06 1.75783V13.4225C-0.00192404 14.1751 0.289732 14.883 0.821189 15.4159C1.35272 15.9488 2.05988 16.2422 2.81251 16.2422H8.29688C8.29688 16.6305 8.61167 16.9453 9.00001 16.9453C9.38835 16.9453 9.70313 16.6305 9.70313 16.2422H15.1875C16.7383 16.2422 18 14.9805 18 13.4297V10.6172C18 10.2289 17.6852 9.91408 17.2969 9.91408C16.9085 9.91408 16.5938 10.2289 16.5938 10.6172C16.5938 11.3926 15.9629 12.0235 15.1875 12.0235H10.0547C9.93432 12.0235 9.81676 12.0357 9.70313 12.0588V3.8672C9.70313 3.09179 10.334 2.46095 11.1094 2.46095C12.1358 2.46095 13.0448 2.51878 13.8468 2.56976C14.8957 2.63645 15.785 2.69298 16.5938 2.60523V7.10158C16.5938 7.48991 16.9085 7.8047 17.2969 7.8047ZM8.29688 14.836H2.81251C2.4362 14.836 2.0826 14.6892 1.81685 14.4228C1.5511 14.1564 1.40531 13.8024 1.40626 13.4243V13.0513C1.82029 13.2915 2.30042 13.4297 2.81251 13.4297H7.94532C8.13917 13.4297 8.29688 13.5874 8.29688 13.7813V14.836ZM8.29688 12.0588C8.18326 12.0357 8.0657 12.0235 7.94532 12.0235H2.81251C2.0371 12.0235 1.40626 11.3926 1.40626 10.6172V2.60527C2.21496 2.69298 3.10438 2.63645 4.15319 2.56976C4.95521 2.51878 5.86421 2.46095 6.89063 2.46095C7.66604 2.46095 8.29688 3.09179 8.29688 3.8672V12.0588ZM10.0547 13.4297H15.1875C15.6996 13.4297 16.1797 13.2915 16.5938 13.0513V13.4297C16.5938 14.2051 15.9629 14.836 15.1875 14.836H9.70313V13.7813C9.70313 13.5874 9.86088 13.4297 10.0547 13.4297Z" />
    </svg>
  );
};

export default Book;
