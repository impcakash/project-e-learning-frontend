import React from 'react';

const sections = [
  {
    title: "06 Super Coins on the way",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa at vitae consectetur quo, ad voluptas possimus, voluptatem deleniti labore, doloremque sequi rem ea pariatur fugiat. Dolores voluptatum eaque quaerat, magni magnam necessitatibus deserunt ut ea iure dignissimos odit labore dolorum tenetur commodi adipisci quod, reiciendis tempora maxime! Vitae odit earum dolorem distinctio officiis iste voluptatem possimus sequi, atque velit voluptates pariatur cupiditate, facilis nihil tempora.`
  },
  {
    title: "Who this course is for?",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo recusandae quis, nisi quas ab fugit commodi praesentium nostrum? Facilis libero ea voluptas ab adipisci accusamus quia iusto nam. Illum aperiam qui atque autem possimus, tempore quae officia? Magni iure minima laboriosam soluta in! Aliquid repudiandae ducimus qui distinctio dignissimos magnam sit tempore fugit nulla pariatur, neque, odio facere cumque debitis ipsam nobis corrupti aperiam.`
  },
  {
    title: "Achievable",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, assumenda! Cupiditate maiores, adipisci quas quisquam commodi, enim corrupti aspernatur, ratione quaerat tenetur earum suscipit molestias aliquid optio harum vitae sit nobis blanditiis! Molestiae necessitatibus nisi qui deleniti voluptate non consectetur laborum dolores quis commodi beatae repellat, enim eum alias laboriosam provident dicta officiis dignissimos mollitia, labore debitis. Maiores vero tempora ratione dolorum iusto. Aspernatur, sequi.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum alias, culpa optio nihil voluptate quia minima laboriosam fuga dolores ad tenetur veniam eaque ex repudiandae nesciunt, accusamus voluptatibus cupiditate molestias. Cum sapiente autem necessitatibus fugiat dignissimos nostrum nisi reiciendis quidem maiores itaque exercitationem non nemo ullam nihil, doloribus deleniti alias, incidunt illo sequi. Et, veniam!`
  }
];

const CourseInfo = () => {
  return (
    <div className="bg-blue-50 text-gray-800 p-8 space-y-8">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
          <p className="text-sm text-gray-600">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseInfo;
