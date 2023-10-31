function convertDateCreatedAt(supabaseCreatedAt: string) {
  // Menguraikan tanggal Supabase created_at menjadi objek tanggal
  const dateObject = new Date(supabaseCreatedAt)

  // Mendapatkan tanggal, bulan, dan tahun
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // Perhatikan bahwa bulan dimulai dari 0
  const year = dateObject.getFullYear()

  // Membuat format seperti "DD - MM - YYYY"
  const formattedDate = `${day.toString().padStart(2, '0')} - ${month
    .toString()
    .padStart(2, '0')} - ${year}`

  return formattedDate
}

export default convertDateCreatedAt
