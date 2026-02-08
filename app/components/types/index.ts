export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: "primary" | "secondary";
 showArrow?: boolean;
 children: React.ReactNode;
 className?: string;
}

export interface TeamCardProps {
 name: string;
 surname: string;
 specialties: string[];
}
