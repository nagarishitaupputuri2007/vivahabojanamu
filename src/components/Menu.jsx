export default function Menu() {
  const dishes = [
    { name: "Ghee Dosa", description: "Crispy dosa roasted in pure ghee." },
    { name: "Pulihora", description: "Tangy and spicy traditional tamarind rice." },
    { name: "Sambar Rice", description: "Classic comfort dish with aromatic spices." }
  ];

  return (
    <section id="menu" style={{ padding: '20px' }}>
      <h2>Menu</h2>
      <ul>
        {dishes.map((dish, i) => (
          <li key={i}>
            <strong>{dish.name}</strong>: {dish.description}
          </li>
        ))}
      </ul>
    </section>
  );
}