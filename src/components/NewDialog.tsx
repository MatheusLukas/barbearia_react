import * as Dialog from "@radix-ui/react-dialog";

export function NewDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-violet-500 px-2 py-4 rounded">Abrir modal</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 px-10 rounded-lg focus:outline-none shadow-lg shadow-black/50 bg-[#2A2634]">
          <h1>Dialog</h1>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
