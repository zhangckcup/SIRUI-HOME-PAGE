export interface ITitleProps {
  titleConfigPc?: ITitleItem[];
  titleConfigMobile?: ITitleItem[];
  needMobileIcon?:boolean;
}

interface ITitleItem {
  text?: string;
  class?: string;
  needIcon?: boolean;
}
