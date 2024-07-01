import { useModal } from "hooks";
import { BaseModal, Button } from "components";
import * as S from "./ConfirmModal.styled";

interface ConfirmModalProps {
  content?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  mode?: "center" | "bottom";
}

const ConfirmModal = ({
  content,
  cancelLabel,
  confirmLabel,
  mode,
}: ConfirmModalProps) => {
  const { handleCloseModal } = useModal();

  return (
    <BaseModal mode={mode}>
      <S.ModalBody>{content}</S.ModalBody>
      <S.ModalFooter>
        {cancelLabel && (
          <Button onClick={() => handleCloseModal()}>{cancelLabel}</Button>
        )}
        {confirmLabel && (
          <Button onClick={() => handleCloseModal()}>{confirmLabel}</Button>
        )}
      </S.ModalFooter>
    </BaseModal>
  );
};

export default ConfirmModal;
