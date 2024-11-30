import DialogWrapper from './DialogWrapper';
import DialogTrigger from './DialogTrigger';
import DialogContent from './DialogContent';
import DialogHeader from './DialogHeader';
import DialogTitle from './DialogTitle';
import DialogDescription from './DialogDescription';
import DialogFooter from './DialogFooter';

function Dialog({
  children,
  open,
}: {
  children: React.ReactNode;
  open: boolean;
}) {
  return (
    <DialogWrapper open={open}>
      <div>
        {children}
      </div>
    </DialogWrapper>
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
};
