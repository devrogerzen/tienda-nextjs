// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Proof",
      price: 100,
      image: "http://localhost:3000/img/proof.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 1,
      title: "Hoodie",
      price: 200,
      image: "http://localhost:3000/img/Invertocat_2.0_Hoodie.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 2,
      title: "Octo Black",
      price: 200,
      image: "http://localhost:3000/img/OCTO_BLACK.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 3,
      title: "ScreenShot",
      price: 400,
      image: "http://localhost:3000/img/Screen_Shot.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 4,
      title: "Small Octocat",
      price: 100,
      image: "http://localhost:3000/img/Small_Octocat.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 5,
      title: "TShirt",
      price: 100,
      image: "http://localhost:3000/img/TShirt_Invertocat.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 6,
      title: "Jogger",
      price: 300,
      image: "http://localhost:3000/img/Webshop_Joggers.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
    {
      id: 7,
      title: "Invertocat Pins",
      price: 200,
      image: "http://localhost:3000/img/Invertocat_Pins.webp",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
    },
  ]);
}
