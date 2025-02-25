import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("modal-root") as HTMLElement;

  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
