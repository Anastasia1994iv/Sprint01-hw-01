
type TopCarsProps = {
  topCars: TopCarsType[]
}

type TopCarsType = {
  manufacturer: string
  model: string
}

export const NewComponent = (props: TopCarsProps) => {
  
  return (
    <table>
      {
        props.topCars.map((el, index) => {

          return (

            <tr key={index}>
              <th>{index + 1}</th>
              <th>{el.manufacturer}</th>
              <th>{el.model}</th>
            </tr>



          )
        })

      }

    </table>
  )
}


// type NewComponentType = {
//   students: StudentType[]

// }

// type StudentType = {
//   id: number,
//   name: string,
//   age: number
// }

// export const NewComponent = (props: NewComponentType) => {

//   return (
//     <ul>
//       {props.students.map((el, index) => {

//         return (

//           <li key={el.id}>
//             <span>{el.id}</span>
//             <span>{el.name}</span>
//             <span>age: {el.age}</span>
//           </li>
//         )
//       })}
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   )
// }