import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../store/auth";

interface FormData {
    email: string;
    password: string;
}


export const LoginForm = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log("Form Submitted", data);
        dispatch(login());
        navigate("/");
    };


    return (
        <Form className="d-flex flex-column align-items-start gap-1 w-100" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2 w-100">
                <Form.Control
                    type="text"
                    placeholder="Username or email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Enter a valid email address"
                        }
                    })}
                    className="rounded-0 border-2 border-primary"
                />
                {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
            </Form.Group>
            <Form.Group className="mb-2 w-100">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "Password must be at least 8 characters long and consist of at least 1 capital letter, 1 number, and 1 symbol"
                        }
                    })}
                    className="rounded-0 border-2 border-primary"
                />
                {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
            </Form.Group>
            <Form.Check type="checkbox" id="checkbox" className="mb-3">
                <Form.Check.Input type="checkbox" className="rounded-0 border-2 border-primary" />
                <Form.Check.Label>Keep me signed in</Form.Check.Label>
            </Form.Check>
            <Button variant="primary" className="w-100 rounded-0" type="submit">Sign In</Button>
        </Form>
    )
}
