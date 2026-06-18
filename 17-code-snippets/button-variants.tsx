import { cn } from "./classnames-helper";
type Variant = "primary" | "secondary" | "outline";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}
const variants: Record<Variant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
};
export function Button({ variant = "primary", className, ...props }: Props) {
  return (
    <button
      className={cn(
        "rounded-md px-4 py-2 font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
