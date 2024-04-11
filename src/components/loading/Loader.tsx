type LoaderProps = {
  size?: number;
};

const Loader = ({ size = 24 }: LoaderProps) => {
  const sizeInRem = size / 16;

  return (
    <span
      className="loader"
      style={{
        width: `${sizeInRem}rem`,
        height: `${sizeInRem}rem`,
      }}
    />
  );
};

export default Loader;
