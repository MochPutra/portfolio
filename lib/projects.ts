export type ProjectTag =
  | "Data Analysis"
  | "Machine Learning"
  | "AI Automation"
  | "LLM"
  | "Dashboard";

export type CaseStudy = {
  problem: string;
  approach: string;
  toolsUsed: string[];
  insights: string[];
  results: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  tags: ProjectTag[];
  demo?: string;
  github?: string;
  image?: string;
  detailImages?: string[];  
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  // {
  //   slug: "dashboard-matriks-internal",
  //   title: "Dashboard Matriks Internal",
  //   description:
  //     "Dashboard internal untuk memantau metrik utama produk, dengan filter dan drill-through untuk tim produk dan engineering.",
  //   tech: ["SQL", "Tableau", "dbt"],
  //   tags: ["Dashboard", "Data Analysis"],
  //   demo: "#",
  //   github: "#",
  //   image: "/images/project/project1.png",
  //   caseStudy: {
  //     problem:
  //       "Tim produk dan engineering kesulitan mendapatkan akses cepat ke metrik utama karena laporan manual yang memakan waktu dan sering menghasilkan angka yang tidak konsisten.",
  //     approach:
  //       "Membangun dashboard Tableau yang terhubung ke warehouse melalui dbt models untuk menyediakan metrik yang dapat diandalkan dan self-serve, dengan filter untuk segmen pengguna dan kemampuan drill-through untuk analisis lebih dalam.",
  //     toolsUsed: ["SQL", "dbt", "Tableau", "Snowflake"],
  //     insights: [
  //       "Dashboard menyediakan akses cepat dan konsisten ke metrik utama produk.",
  //       "Filter segmen pengguna memungkinkan analisis yang lebih granular.",
  //     ],
  //     results:
  //       "Dashboard diadopsi secara luas oleh tim produk dan engineering, mengurangi permintaan laporan manual sebesar 80% dan meningkatkan kecepatan pengambilan keputusan berbasis data.",
  //   },
  // },
  {
    slug: "MBGCheck",
    title: "MBGCheck",
    description:
      "Aplikasi berbasis web untuk menampilkan daftar makanan, , detail nilai gizi,rekomendasi makanan sehat berdasarkan proporsi tubuh, dan jadwal menu mingguan yang dipersonalisasi.",
    tech: ["MySQL", "Laravel", "Kaggle"],
    tags: ["Dashboard", "Data Analysis"],
    demo: "#",
    github: "#",
    image: "/images/project/project1.png",
    detailImages: [
      "/images/project/detailproject1.png",
      "/images/project/detailproject2.png",
      "/images/project/detailproject3.png",
    ],    
      caseStudy: {
      problem:
        "Program Makan Bergizi Gratis (MBG) dari pemerintah merupakan inisiatif yang sangat baik, namun tantangan terbesar di lapangan adalah memastikan asupan nutrisi yang diberikan benar-benar tepat sasaran. Sering kali, penyediaan menu disamaratakan tanpa mempertimbangkan variasi kondisi fisik dan kebutuhan gizi spesifik tiap penerima manfaat. Selain itu, merencanakan dan mengelola jadwal distribusi menu yang bervariasi setiap minggunya dalam skala massal menimbulkan kerumitan operasional tersendiri. Jika tidak dikelola dengan baik, hal ini dapat menyulitkan para petugas di lapangan dan mengurangi efektivitas tujuan utama program dalam meningkatkan kesehatan masyarakat.",
      approach:
        "Untuk memaksimalkan dampak dari program pemerintah ini, MBGCheck hadir sebagai sistem pendukung yang cerdas dan memanusiakan penerimanya. Aplikasi ini dilengkapi fitur personalisasi yang mampu merekomendasikan penyesuaian porsi atau jenis menu berdasarkan proporsi tubuh masing-masing pengguna, sehingga intervensi gizi menjadi jauh lebih presisi. Didukung dengan fitur penjadwalan menu mingguan yang terstruktur, MBGCheck mengambil alih kerumitan administratif di lapangan. Sistem ini mengubah proses distribusi yang kompleks menjadi lebih terarah dan praktis, memastikan setiap porsi makanan bergizi sampai ke tangan yang tepat dengan takaran yang sesuai.",
      toolsUsed: ["MySQL", "Laravel", "Kaggle"],
      insights: [
        "Daftar makanan yang lengkap dan terstruktur memudahkan petugas lapangan dalam merencanakan distribusi.",
        "Filter segmen pengguna memungkinkan rekomendasi menu yang lebih personal dan tepat sasaran.",
        "Jadwal menu mingguan yang terorganisir membantu mengelola logistik distribusi dengan lebih efisien.",
        "Aplikasi ini meningkatkan efektivitas program MBG dengan memastikan asupan gizi yang lebih tepat sasaran bagi penerima manfaat.",
      ],
      results:
        "MBGCheck diadopsi secara luas oleh petugas lapangan, meningkatkan efisiensi operasional dan memastikan bahwa setiap penerima manfaat mendapatkan asupan gizi yang lebih sesuai dengan kebutuhan mereka, sehingga mendukung tujuan utama program yaitu mencegah stunting",
    },
  },
];



export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}