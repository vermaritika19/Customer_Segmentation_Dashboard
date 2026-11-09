import React from "react";
import Section1 from "./Component/Section1/Section1.jsx";
import Section2 from "./Component/Section2/Section2.jsx";

const App = () => {

  const users=[
    {
      img: 'https://plus.unsplash.com/premium_photo-1661575201264-959798ecc47a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Newly identified potential customers who have recently entered your pipeline with minimal interaction or awareness.',
      tag: 'Satisfied',
      color: '#155dfc'             //'#004777'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661572972206-0c01818a0609?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Potential customers with low or no recent engagement, requiring follow-ups, nurturing strategies, or reactivation efforts.',
      tag: 'Underserved',
      color: '#155dfc'                 //'#A30000'
    },
    {
      img: 'https://images.unsplash.com/photo-1696453424699-f6ebbe24c28a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Prospects demonstrating strong purchase signals through frequent interactions, inquiries, or conversion-focused actions.',
      tag: 'Underbanked',
      color: '#155dfc'                     // '#FF7700'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664297708545-4940bfdef322?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Analyze and organize potential customers into meaningful segments to prioritize outreach, and drive consistent business growth.',
      tag: 'Unbanked',
      color: '#155dfc'                             //'#D95D39'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661610771229-2fc225e093aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sapiente neque eveniet facere, cumque error facilis. Rerum dolor quaerat est quo mollitia.',
      tag: 'Loyal',
      color: '#155dfc'                            //'#00AFB5'
    }
  ];
  return (
    <div>
      <Section1  users={users}/>
      <Section2 />

    </div>
  );
};

export default App;
