import { X } from 'lucide-react';
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
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <DialogWrapper open={open}>
      <div>
        {/* <X onClick={() => setOpen(false)} className='absolute top-2 right-2 cursor-pointer w-5' /> */}
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
