export default function Stats() {
  const stats = [
    {
      number: '5',
      label: 'hackathons conquered',
    },
    {
      number: '2',
      label: 'research publications',
    },
    {
      number: '24/7',
      label: 'debugging mode',
    },
  ]

  return (
    <section className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-green-400">
              {stat.icon || stat.number}
            </div>
            <p className="text-xs text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
