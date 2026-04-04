import Logo from "@/assets/images/logo.png";
import NohenWhiteBg from "@/assets/images/nohen_white_bg.svg";
import Image from "next/image";

interface NohenLogoProps {
  useDarkOnLight?: boolean;
}

export const NohenLogo = ({ useDarkOnLight = false }: NohenLogoProps) => {
  if (useDarkOnLight) {
    return <NohenWhiteBg className="h-21 w-auto" />;
  }

  return <Image src={Logo} alt="nohen logo" width={84} height={84} />;
};
