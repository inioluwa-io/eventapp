import { ImageSourcePropType, PressableProps } from "react-native";
import { TextStyle } from "react-native-phone-input";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";

export type PageProps = {
  navigation?: NavigationScreenProp<NavigationState, NavigationParams>;
  route?: any;
};

export type PhotosComponent = {
  images: any[];
  title?: string;
};

export type ReviewsComponent = {
  reviews: any[];
  title?: string;
};

export type TransactionComponent = {
  transactions: any[];
};

export type OnBoardingWrapperProps = {
  canGoPrevious: () => boolean;
  canGoNext: () => boolean;
  currentPage: number;
  onGoNext: () => void;
  onGoPrev: () => void;
  onCategorySelect?: (idx: number) => void;
  selectedCategory?: number | null;
  onStateSelect?: (idx: number) => void;
  selectedState?: number | null;
} & PageProps;

export type ProfileItemProps = {
  src?: ImageSourcePropType | undefined;
  registration_numbers: string;
  location: string;
  rating?: string | number;
} & PageProps;

export type ContactItemProps = {
  src: ImageSourcePropType | undefined;
  name: string;
  rating?: string | number;
} & PageProps;

export type CategoryTabProps = {
  item: { icon: any; text: string }[];
  onTabChange?: (idx: number) => void;
};

export type CategoryTabWrapperProps = {
  item: { icon: any; text: string }[];
  onTabChange: (idx: number) => void;
  selectedTab: number;
};

export type CategoryButtonProps = {
  id: number;
  color: string;
  icon?: any;
  text: string;
  textStyle?: TextStyle;
  onCategorySelect?: (idx: number) => void;
  selectedCategory?: number | null;
} & PressableProps;

// php artisan serve --host YOUR_IP --port 80