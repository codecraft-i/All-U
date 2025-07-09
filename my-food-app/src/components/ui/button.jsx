export const Button = ({ children, className = "", variant = "primary", ...rest }) => {
  const base = "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};
