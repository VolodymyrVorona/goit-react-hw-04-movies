import st from './GoBackBtn.module.css';

const GoBackBtn = ({ onBtnClick, label }) => {
  return (
    <button type="button" onClick={onBtnClick} className={st.btn}>
      {label}
    </button>
  );
};

export default GoBackBtn;
