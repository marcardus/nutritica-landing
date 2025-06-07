function Faq ({ title, id }) {
  return (
    <section id={id} className="px-6 py-20 text-center border-t">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">Content coming soon...</p>
    </section>
  );
}

export default Faq;
