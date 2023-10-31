export interface Booking {
  id: number
  created_at: string
  lama_menginap: string
  jalur_pendakian: string
  nama_ketua: string
  nik_ketua: string
  email: string
  no_telepon: string
  usia: string
  jumlah_pendaki: string
  status: string
  user_id: string
}

export interface Track {
  id: number
  track_name: string
  image_path: string
  description: string
}

export interface TestimoniData {
  id: number
  created_at: string
  name: string
  comment: string
}

export interface News {
  id: number
  created_at: string
  title: string
  description: string
  image_path: string
}
