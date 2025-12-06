export default function ContactCard({ icon, data }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3 text-center py-5">
      <span>{icon}</span>
      <p className="text-white mt-3">{data}</p>
    </div>
  );
}
