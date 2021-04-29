import BSCarousel from "../../components/carousel/BSCarousel";

const About = (props) => {
  const items = [
    {
      src: `https://images.unsplash.com/photo-1444212477490-ca407925329e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80`,
      altText: `stock image`,
      caption: `Stock Image`,
    },
    {
      src: `https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`,
      altText: `stock image`,
      caption: `Stock Image`,
    },
    {
      src: `https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80`,
      altText: `stock image`,
      caption: `Stock Image`,
    },
    {
      src: `https://images.unsplash.com/photo-1558929996-da64ba858215?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80`,
      altText: `stock image`,
      caption: `Stock Image`,
    },
  ];

  return (
    <>
      <BSCarousel items={items}/>
    </>
  );
};

export default About;
