import fr from 'react-intl/locale-data/fr';
import { addLocaleData } from 'react-intl';


export default () => {
  addLocaleData([...fr])
}