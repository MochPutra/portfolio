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
    slug: "tess",
    title: "tes",
    description:
      "Dashboard internal untuk memantau metrik utama produk, dengan filter dan drill-through untuk tim produk dan engineering.",
    tech: ["SQL", "Tableau", "dbt"],
    tags: ["Dashboard", "Data Analysis"],
    demo: "#",
    github: "#",
    image: "/images/project/tes1.png",
    caseStudy: {
      problem:
        "Tim produk dan engineering kesulitan mendapatkan akses cepat ke metrik utama karena laporan manual yang memakan waktu dan sering menghasilkan angka yang tidak konsisten.",
      approach:
        "Membangun dashboard Tableau yang terhubung ke warehouse melalui dbt models untuk menyediakan metrik yang dapat diandalkan dan self-serve, dengan filter untuk segmen pengguna dan kemampuan drill-through untuk analisis lebih dalam.",
      toolsUsed: ["SQL", "dbt", "Tableau", "Snowflake"],
      insights: [
        "Dashboard menyediakan akses cepat dan konsisten ke metrik utama produk.",
        "Filter segmen pengguna memungkinkan analisis yang lebih granular.",
      ],
      results:
        "Dashboard diadopsi secara luas oleh tim produk dan engineering, mengurangi permintaan laporan manual sebesar 80% dan meningkatkan kecepatan pengambilan keputusan berbasis data.",
    },
  },
];



export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}