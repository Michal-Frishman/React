import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { object, string } from "yup"
const schema = object({
    title: string().required(),
    description: string().required(),
    products: string().required(),
    ingredients: string().required(),
    instructions: string().required(),
}).required()
const AddRecipe = ({ func }: { func: Function }) => {
    const {
        formState: { errors },
        register,
        watch,
        handleSubmit,
        reset,
    } = useForm({ resolver: yupResolver(schema) })

    console.log(watch("title"))

    const onSubmit = (data: any) => {
        console.log("try to submit", data);

        const ingredientsArray = data.ingredients.split(',');
        const recipe = {
            
            title: data.title,
            description: data.description,
            ingredients: ingredientsArray,
            instructions: data.instructions
        };
        console.log("try to submit", recipe);
        func(recipe);
        reset();
    }
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label> title:
                <input {...register("title")} />
            </label>
            {errors.title && <div>{errors.title.message}</div>}
            <br />
            <label> description:
                <input {...register("description")} />
            </label>
            {errors.description && <div>{errors.description.message}</div>}
            <br />
            <label> ingredients(seperate by ,):
                <input {...register("ingredients")} />
            </label>
            {errors.ingredients && <div>{errors.ingredients.message}</div>}
            <br />
            <label> instructions:
                <input {...register("instructions")} />
            </label>
            {errors.instructions && <div>{errors.instructions.message}</div>}
            <br />
            <button type="submit">Send</button>
        </form>
    </>)
}

export default AddRecipe