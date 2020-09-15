import * as React from 'react';
import Svg, {Path, SvgProps, Rect, G} from 'react-native-svg';
import {COLORS} from 'styles/Colors';

function Logo(props: SvgProps) {
  return (
    <Svg width={72} height={72} viewBox="0 0 72 72" fill="none" {...props}>
      <Rect width={72} height={72} rx={16} fill={COLORS.mainColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.828 33.172a4 4 0 010 5.656l-12 12a4 4 0 01-5.656 0l-12-12a4 4 0 010-5.656l12-12a4 4 0 015.656 0l12 12zM36 29.657L29.657 36 36 42.343 42.343 36 36 29.657z"
        fill="#fff"
      />
    </Svg>
  );
}

const Eye = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} {...props} viewBox="0 0 20 20">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6c-2.228 0-4.403.95-6.063 2.722L2.74 10l1.197 1.278C5.603 13.056 7.675 14 10 14c2.325 0 4.397-.944 6.063-2.722L17.26 10l-1.197-1.278C14.403 6.95 12.228 6 10 6zm10 4l-2.477 2.645C15.508 14.796 12.92 16 10 16s-5.508-1.204-7.523-3.355L0 10l2.477-2.645C4.494 5.201 7.189 4 10 4c2.81 0 5.506 1.2 7.523 3.355L20 10z"
        fill="currentColor"
      />
      <Path
        d="M10 6.846c-.315 0-.63.105-.946.105.526.21.946.841.946 1.472C10 9.264 9.264 10 8.423 10c-.63 0-1.156-.42-1.472-.946-.105.315-.105.63-.105.946 0 1.787 1.367 3.154 3.154 3.154s3.154-1.367 3.154-3.154S11.787 6.846 10 6.846z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Email = (props: SvgProps) => (
  <Svg
    width={20}
    height={16}
    viewBox="0 0 20 16"
    fill="none"
    color={COLORS.grey}
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.25a1 1 0 011-1h18a1 1 0 011 1v13.5a1 1 0 01-1 1H1a1 1 0 01-1-1V1.25zm2 1v11.5h16V2.25H2z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.24.6A1 1 0 011.65.49L10 7.648 18.35.491a1 1 0 011.3 1.518l-9 7.714a1 1 0 01-1.3 0l-9-7.714A1 1 0 01.24.6z"
      fill="currentColor"
    />
  </Svg>
);

const Lock = (props: SvgProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      color={COLORS.grey}
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.75a1 1 0 011-1h18a1 1 0 011 1V19a1 1 0 01-1 1H1a1 1 0 01-1-1V7.75zm2 1V18h16V8.75H2z"
        fill="currentColor"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C7.481 2 5.375 4.132 5.375 6.841a1 1 0 01-2 0C3.375 3.099 6.306 0 10 0s6.625 3.1 6.625 6.841a1 1 0 11-2 0C14.625 4.132 12.519 2 10 2zM10 11.726a1 1 0 011 1v1.125a1 1 0 11-2 0v-1.125a1 1 0 011-1z"
        fill="currentColor"
      />
    </Svg>
  );
};

const User = (props: SvgProps) => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      color={COLORS.grey}
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2a2.902 2.902 0 100 5.805A2.902 2.902 0 0010 2zM5.098 4.903a4.902 4.902 0 119.804 0 4.902 4.902 0 01-9.804 0zM7.518 13.39A5.518 5.518 0 002 18.908V19a1 1 0 11-2 0v-.09a7.518 7.518 0 017.518-7.519h4.964A7.518 7.518 0 0120 18.908V19a1 1 0 11-2 0v-.09a5.518 5.518 0 00-5.518-5.519H7.518z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Home = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    color={COLORS.grey}
    {...props}>
    <Path
      d="M1 7.75L10 1l9 6.75M19 7.75V19H1V7.75"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.25 12.25h-4.5V19h4.5v-6.75z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Cart = (props: SvgProps) => (
  <Svg
    width={24}
    height={22}
    viewBox="0 0 24 22"
    fill="none"
    color={COLORS.grey}
    {...props}>
    <G
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path
        d="M9.188 19a.562.562 0 100-1.125.562.562 0 000 1.125zM17.063 19a.562.562 0 100-1.125.562.562 0 000 1.125z"
        fill="currentColor"
        strokeMiterlimit={10}
      />
      <Path d="M3 1h2.25L7.5 14.5h11.25L21 4.375H6.375" />
    </G>
  </Svg>
);

const Close = (props: SvgProps) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      color={COLORS.grey}
      {...props}>
      <Path
        d="M3 19L19 3M3 3l16 16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Plus = (props: SvgProps) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      color={COLORS.grey}
      fill="none"
      {...props}>
      <Path
        d="M8 3.333v9.334M3.333 8h9.334"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Munis = (props: SvgProps) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      color={COLORS.grey}
      fill="none"
      {...props}>
      <Path
        d="M3.333 8h9.334"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Search = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    color={COLORS.grey}
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 2a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM0 6.25a6.25 6.25 0 1112.5 0 6.25 6.25 0 01-12.5 0z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.293 9.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
      fill="currentColor"
    />
  </Svg>
);

const ManShirt = (props: SvgProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M6.625 1h6.75L10 6.625 6.625 1zM13.375 1l2.25 2.25-2.25 6.75L10 6.625"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.375 3.25L1 4.375V19h18V4.375L15.625 3.25"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 19V6.625L6.625 10l-2.25-6.75L6.625 1"
        stroke="#40BFFF"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default {
  Logo,
  Eye,
  Email,
  Lock,
  User,
  Home,
  Cart,
  Close,
  Plus,
  Munis,
  Search,
  ManShirt,
};
