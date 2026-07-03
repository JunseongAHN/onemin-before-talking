type ToastProps = {
  message: string | null;
};

export function Toast({ message }: ToastProps) {
  if (message === null) {
    return null;
  }

  return (
    <div className="toast" role="status" aria-live="polite">
      <span>{message}</span>
    </div>
  );
}
