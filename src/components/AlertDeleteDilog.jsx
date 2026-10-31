"use client";

import { DeleteUser } from "@/lib/api/admin/action";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function AlertDeleteDialogPage({ id }) {
  const router = useRouter();

const handleDelete = async () => {
  try {
    const result = await DeleteUser(id);

    console.log(result);

    router.refresh();

  } catch (error) {
    console.error("Failed to delete user:", error);
  }
};

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete User Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Are you sure you want to delete this user?
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                slot="close"
                variant="danger"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}