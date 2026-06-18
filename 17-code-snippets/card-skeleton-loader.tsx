export function CardSkeleton() {
  return (
    <div className="animate-pulse space-y-4 rounded-lg border p-4">
      <div className="h-40 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
