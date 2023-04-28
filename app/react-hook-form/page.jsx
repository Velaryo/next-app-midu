'use client'

import { useForm, useWatch } from 'react-hook-form'
import { useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup' //conecta yup con hook form
import * as yup from 'yup' //lib de valdiacion
import { setLocale } from 'yup'; //traduccion messages de validacion

setLocale({
  mixed: {
    default: 'No válido',
  },
  string: {
    min: 'Debe ser mayor que ${min}',
  },
});


const schema = yup
  .object({
    name: yup.string().required().min(3).max(10),
    surname: yup.string().required().min(3,'min 3 caract.').max(10),
    contact: yup.object({
      phone: yup.string().required(),
      email: yup.string().email().required(),
    }),
  })
  .required()



export default function Form2() {

  

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues
  } = useForm({
    //conecta yup con hook form
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'Abrandolfo',
      surname: 'Abrandolfo',
      image: null,
      contact: {
        email: 'abc@example.com',
        phone: '',
      },
    },
  })

  function onSubmit(formdata) {
    console.log(formdata)
  }

  const inputName = register('name')
  const inputSurname = register('surname')
  const inputEmail = register('contact.email')
  const inputPhone = register('contact.phone')
  const inputImage = register('image')

  //ver valores - solo lectura
  function logValues () {
    console.log( getValues() )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* el handleSubmit es del form */}
      <div className="flex flex-col w-36 gap-2">
        <div>
          <label>Name</label>
          <input type="text" {...inputName} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>SurName</label>
          <input type="text" {...inputSurname} />
          {errors.surname && <p>{errors.surname.message}</p>}
        </div>

        <label>Email</label>
        <input type="text" {...inputEmail} />

        <label>Phone</label>
        <input type="text" {...inputPhone} />

        <input {...inputImage} type="file" />

        <button type="submit">Enviar</button>

        <button onClick={logValues}>
          ver valores
        </button>

      </div>
    </form>
  )
}

// export default function Form() {
//   const {
//     handleSubmit,
//     register,
//     formState,
//     reset,
//     watch,
//     control
//   } = useForm({
//     defaultValues: {
//       firstName: 'Abrandolfo',
//       type: 'backend',
//       freeLance: 's',
//       image: null,
//       contact: {
//         email: 'abc@example.com',
//         phone: '',
//       },
//     },
//   })

//   // formdata es lo q ha llenado el usuario
//   function onSubmit(formdata) {
//     console.log(formdata)
//   }

//   //en el input del return estaba así:
//   // {...form.register('firstName', {required: true})}
//   const inputFirstName = register('firstName', {
//     required: true,
//     minLength: 3,
//   })
//   const inputEmail = register('contact.email', { pattern: /^\S+@\S+$/i })
//   const inputContact = register('contact.phone')
//   const inputTipo = register('type')
//   const inputFreelance = register('freelance')
//   const inputImage = register('image')

//   //const watchFirstName = watch('firstName')
//   const controlFirstName = useWatch({
//     control,
//     name: 'firstName'
//   })

//   //formState
//   useEffect(() => {
//     // por defecto {}
//     console.log(formState.errors)
//   }, [formState.errors])

//   // para limpiar
//   function onReset() {
//     reset({
//       firstName: 'antho',
//     })
//   }

//   console.log("render")
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* el handleSubmit es del form */}
//       <div className="flex flex-col w-36 gap-2">
//         <div>
//           <label>Nombre</label>
//           <input type="text" {...inputFirstName} />
//           <p>{controlFirstName}</p>
//         </div>

//         <label>Email</label>
//         <input type="text" {...inputEmail} />

//         <label>Phone</label>
//         <input type="text" {...inputContact} />

//         <label>Tipo</label>
//         <select {...inputTipo}>
//           <option value="frontend">Frontend</option>
//           <option value="backend">Backend</option>
//         </select>

//         <div>
//           <p>Freelance</p>
//           <label>
//             Sí
//             <input {...inputFreelance} type="radio" value="s" />
//           </label>
//           <label>
//             No
//             <input {...inputFreelance} type="radio" value="n" />
//           </label>
//         </div>

//         <input {...inputImage} type="file" />

//         <button type="submit">Enviar</button>

//         <button type="submit" onClick={onReset}>
//           Limpiar
//         </button>
//       </div>
//     </form>
//   )
// }
