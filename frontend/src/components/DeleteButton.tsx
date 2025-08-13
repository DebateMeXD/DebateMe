"use client";

export default function DeleteButton({
  onDelete,
  children,
}: {
  onDelete: () => Promise<void>;
  children: React.ReactNode;
}) {
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (confirmed) {
      await onDelete();
    }
  };

  return <span onClick={handleDelete}>{children}</span>;
}
