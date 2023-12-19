import { useState } from "react";

const Vocabulary = () => {
  const [englishVerbs, setEnglishVerbs] = useState([]);
  // Let's fetch all verb from the json
  const fetchAllEnglishVerb = async () => {
    try {
      const responseFromBackend = await fetch(
        `${import.meta.env.VITE_API_URL}/verbs`
      );
      if (responseFromBackend) {
        const allEnglishVerbs = await responseFromBackend.json();
        console.log(allEnglishVerbs);
        setEnglishVerbs(allEnglishVerbs);
      }
    } catch (error) {
      console.error("Error fetching all the verbs");
    }
  };

  return (
    <>
      <h1>Let's practice your Spanish vocabulary🎉</h1>
      {englishVerbs.map((enVerb) => (
        <div>
          <h3 key={enVerb.id}>{enVerb.english}</h3>
        </div>
      ))}
      <h5>Infinitive verb:</h5>
      <h5>Person:</h5>
      <input type="text" placeholder="Type here your answer" />
    </>
  );
};

export default Vocabulary;
