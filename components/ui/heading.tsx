interface HeadingProps {
    title: string;
    description: string;
};

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
}