import production from './production';
import dev from './dev';

const configDictionary = {
    production,
    dev,
};

let config = production;
if (process.env.CONFIG && process.env.CONFIG in configDictionary) {
    config = configDictionary[process.env.CONFIG];
}

export default config;