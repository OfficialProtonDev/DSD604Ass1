export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#333',
    backgroundColor: state.isSelected ? '#e6f7ff' : 'white',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '38px',
    width: '100%',
    minWidth: '200px',
    maxWidth: '200px',
  }),
  container: (provided) => ({
    ...provided,
    width: '100%',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
    minWidth: '200px',
    maxWidth: '200px',
  }),
};

export const selectContainerStyle = {
  width: '300px',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '10px 20px'
};

export const buttonStyle = {
  whiteSpace: 'nowrap',
  padding: '10px 20px',
  boxSizing: 'border-box'
};
