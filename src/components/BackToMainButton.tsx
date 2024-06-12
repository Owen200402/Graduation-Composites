interface Props {
  onClickBackToMain: () => void;
}

const BackToMainButton = ({ onClickBackToMain }: Props) => {
  return (
      <button
        className="btn btn-outline-warning btn-sm m-2 p-2"
        onClick={() => onClickBackToMain()}
        style={{ fontSize: '12px'}}
      >
        Select Another Year
      </button>
  );
};

export default BackToMainButton;
