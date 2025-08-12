import { type FieldValues, useController, type UseControllerProps } from "react-hook-form";
import { TextField, type TextFieldProps } from "@mui/material";


// type Props<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;

// export default function TextInput<T extends FieldValues>(props: Props<T>) {
//     const { name, control, ...textFieldProps } = props;
//     const { field, fieldState } = useController<T>({ name, control });

//     return (
//         <TextField
//             {...textFieldProps}
//             {...field}
//             fullWidth
//             variant="outlined"
//             error={!!fieldState.error}
//             helperText={fieldState.error?.message}
//         />
//     );
// }


type Props<T extends FieldValues> = {} & UseControllerProps<T> & TextFieldProps;

export default function TextInput<T extends FieldValues>(props: Props<T>) {
    const { field, fieldState } = useController({ ...props });
    return (
        <TextField
            {...props}
            {...field}
            value={field.value || ''}
            fullWidth
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
        />
    )
}