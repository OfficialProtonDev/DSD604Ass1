const getMaxHeight = () => {
  const vh = window.innerHeight;
  
  if (vh <= 900) return '250px';
  if (vh <= 1200) return '350px';
  if (vh <= 1500) return '450px';
  return '600px';
};

export const scrollableContainerStyle = {
  maxHeight: getMaxHeight(),
  overflowY: 'auto',
  borderRadius: '4px',
  padding: '10px',
  margin: '8px 0',
};

export const listStyle = {
  maxWidth: '800px',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

export const listItemStyle = {
  padding: '10px 0',
  borderBottom: '1px solid #eee',
};

export const headingStyle = {
  margin: '16px 0 8px 0',
};