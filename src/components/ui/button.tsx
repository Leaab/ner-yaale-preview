import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex w-fit max-w-full items-center justify-center gap-2 font-medium text-center transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-teal to-navy text-white hover:from-teal/90 hover:to-navy/90 shadow-lg shadow-teal/20 hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-gradient-to-r from-gold to-coral/80 text-navy hover:opacity-90 shadow-md shadow-gold/25 hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-navy/20 text-navy hover:border-navy/40 hover:bg-navy/5",
    ghost: "text-navy hover:bg-navy/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
