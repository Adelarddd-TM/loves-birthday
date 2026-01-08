import taylorCover from '../assets/img/taylor-swift-cover.jpg';
import loverAudio from '../assets/audio/lover.mp3';
import onRepeatImg from '../assets/img/on-repeat-img.jpg';
import revealImg from '../assets/img/reveal-img.jpg';
import mainAudio1 from '../assets/audio/main-audio-1.mp3';
import mainAudio2 from '../assets/audio/main-audio-2.mp3';

export const content = {
  partnerName: "Pasangan",
  introText: "Tahun ini penuh cerita...",
  minutes: 204480, // Example: 365 days * 24 * 60
  bgMusic: [mainAudio1, mainAudio2], 
  topSong: {
    title: "Lover",
    artist: "Taylor Swift",
    coverImg: taylorCover,
    audioUrl: loverAudio, 
  },
  topGenres: [
    { label: "Marathon Drakor", val: 40, color: "bg-spotify-green" },
    { label: "Makannnn", val: 30, color: "bg-neon-pink" },
    { label: "Momong si Shaka, hhe", val: 20, color: "bg-neon-purple" },
    { label: "Belajar sie", val: 10, color: "bg-neon-yellow" },
  ],
  audioAura: {
    colors: ["#FF0055", "#9146FF"],
    adjectives: ["Jelek", "medeni 🤭"]
  },
  peakHours: {
    hours: ["07:00", "15:00", "18:00", "09:00", "12:00"],
    series: [30, 50, 100, 80, 20] // Heights relative to max
  },
  onRepeat: {
    image: onRepeatImg,
    caption: "Aku bakal tekan tombol ini sampai bejattt, asek"
  },
  futureQueue: [
    { title: "Ulang Tahun Kamyu", artist: "Sedang Berlangsung", isPlaying: true },
    { title: "Shopping Date ga si??", artist: "2026 Wishlist" },
    { title: "Nyobain masakan kamuu", artist: "2026 Wishlist" },
    { title: "Gtw pokok sehat terus dah", artist: "2026 Wishlist" },
  ],
  topArtist: {
    image: revealImg, 
    caption: "You are my #1 Person"
  }
}
