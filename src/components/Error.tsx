const ErrorMessage = ({ error }: { error: string }) => {
  return <div style={{
      color: 'red',
      padding: '20px',
      backgroundColor: 'black',
      fontSize: '2rem',
      fontWeight: 'bold'

  }}>{error}</div>;
};

export default ErrorMessage;
