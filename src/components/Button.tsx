interface ButtonProps {
    label: string;
    color?: "primary" | "success" | "warning" | "danger" | "info";
    onClick: () => void;
}

export default function Button({ label, color="primary", onClick }: ButtonProps) {
    return (
        <button type="button" onClick={onClick} className={`btn btn-outline-${color}`} >{label}</button>
    );
}