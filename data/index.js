import goaData from './goa.json' assert { type: "json" };
import delhiData from './delhi.json' assert { type: "json" };
import mumbaiData from './mumbai.json' assert { type: "json" };
import kolkataData from './kolkata.json' assert { type: "json" };
import chennaiData from './chennai.json' assert { type: "json" };

const getProperties = (place) => {
    const properties = {
        'goa': goaData,
        'mumbai': mumbaiData,
        'delhi': delhiData,
        'chennai': chennaiData,
        'kolkata': kolkataData
    }

    place = place.trim().toLowerCase();
    if (!(place in properties)) {
        alert('No result found for given city.');
        window.location.href = '/';
    }

    return properties[place];
};

export default getProperties;