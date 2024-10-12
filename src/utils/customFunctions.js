import { enqueueSnackbar } from 'notistack'
import DIGITAL from '../Assets/images/digital.jpeg'
import INTERNAL from '../Assets/images/internal.jpeg'
import NEXTGENERATION from '../Assets/images/NextGeneration.webp'
export const showAlert = (message, type) => {

  return (
    enqueueSnackbar(message, { variant: type })
  )
}
export const STATESCODESNAME = {
  "AL": "Alaska",
  "AK": "Alabama",
  "AR": "Arkansas",
  "AZ": "Arizona",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "District of Columbia",
  "DC": "Delaware",
  "FL": "Florida",
  "GA": "Georgia",
  "HI": "Hawaii",
  "ID": "Iowa",
  "IL": "Idaho",
  "IN": "Illinois",
  "IA": "Indiana",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Massachusetts",
  "MD": "Maryland",
  "MA": "Maine",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Missouri",
  "MO": "Mississippi",
  "MT": "Montana",
  "NE": "North Carolina",
  "NV": "North Dakota",
  "NH": "Nebraska",
  "NJ": "New Hampshire",
  "NM": "New Jersey",
  "NY": "New Mexico",
  "NC": "Nevada",
  "ND": "New York",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PA": "Pennsylvania",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Virginia",
  "VA": "Vermont",
  "WA": "Washington",
  "WV": "Wisconsin",
  "WI": "West Virginia",
  "WY": "Wyoming"


}

export const BLOGSDATA = [
  {
    image: DIGITAL,
    title: "Why you have to digitalize in 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
  },
  {
    image: INTERNAL,
    title: "Our internal process and longerm vision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
  },
  {
    image: NEXTGENERATION,
    title: "Helping the next generation of leaders",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
  }
]