export default function Footer() {
  const date = new Date();
  const year = date.getUTCFullYear();

  return (
    <div className="footer">
      <p> &copy; Copyright {year} </p>
      <p>Chris Apostolidis</p>
    </div>
  );
}
