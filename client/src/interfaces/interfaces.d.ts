interface NavProps {
    username: string
}

interface LoginProps {
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    changeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
}

interface IngredientInterface {
  name: string; 
  quantity: number; 
  unit: string;
}

interface StepInterface {
  description: string; 
}

interface Recipe {
    title: string;
    description: string;
    ingredients: IngredientInterface[];
    instructions: StepInterface[];
    _id: number;
}

interface DiProps {
  recipe: Recipe;
  getRecipes: () => void;
}

interface ConfirmationDialogInterface {
    getRecipes: () => void;
    recipeId: number;
}