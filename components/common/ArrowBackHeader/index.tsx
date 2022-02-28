import { useRouter } from "next/router";
import ArrowLeft from "../../icon/ArrowLeft";

interface Props {
  children?: React.ReactNode;
  onClose?: () => void;
}

export default function ArrowBackHeader({ children, onClose }: Props) {
  const router = useRouter();
  return (
    <header className="h-12 flex items-center">
      <a
        className="p-5 cursor-pointer"
        onClick={onClose ? onClose : router.back}
      >
        <ArrowLeft />
      </a>
      <div className="text-lg font-semibold">{children}</div>
    </header>
  );
}
