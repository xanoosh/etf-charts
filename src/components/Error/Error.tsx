import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <AlertDialog.Root defaultOpen={true}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-slate-500 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Page not found
          </AlertDialog.Title>
          <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            We couldn't find this page.
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Action asChild>
              <Link
                to="/"
                className="text-white bg-slate-700 hover:bg-slate-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium outline-nones"
              >
                Navigate to home page
              </Link>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
