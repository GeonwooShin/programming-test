export type ModalProps = {
  title: string;
  onSubmit?: <T>(type: T) => void;
  onAbort?: (type: Error) => void;
};
