import { useFormik } from "formik";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { validationSchema } from "./yupSchema";
import showNotification from "../Notification/Notification";
import classes from "./FormComponent.module.css";
import { resetCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import useApi from "../../api/useApi";
import OrderButton from "../OrderButton/OrderButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IUser } from "../../models/models";


export default function FormComponent() {
  const { postEmail } = useApi();
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function concatResult(values: IUser) {
    const cartResult = cart.cart;
    const result = {
      ...values,
      cart: [...cartResult],
      totalPrice: cart.totalPrice,
    };
    console.log(
      "%c result ",
      "background: grey; padding: 5px; border-radius: 7px",
      result
    );
    postEmail(result);
    
    dispatch(resetCart());
    navigate("/success", { state: values });
    localStorage.removeItem('currentCategory');
  }


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: async (values: IUser) => {
      concatResult(values);
      showNotification({
        type: "success",
        message: "Purchase completed successfully",
      });
      formik.resetForm();
    },
    validationSchema,
  });

  return (
    <div className={classes.formWrapper}>
      <form
        style={{ width: "80%" }}
        id="submitForm"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <TextField
            sx={{ marginTop: 3 }}
            id="name"
            label="Name"
            color={formik.errors.name ? "error" : "primary"}
            variant="standard"
            {...formik.getFieldProps("name")}
            name="name"
        
          />
        </FormControl>
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <br />
        <FormControl sx={{ width: "100%" }}>
          <TextField
            sx={{ marginTop: 3 }}
            id="email"
            label="Email"
            variant="standard"
            {...formik.getFieldProps("email")}
            name="email"
          />
        </FormControl>
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <br />
        <FormControl sx={{ width: "100%" }}>
          <TextField
            sx={{ marginTop: 3 }}
            id="phone"
            label="Phone"
            variant="standard"
            {...formik.getFieldProps("phone")}
            name="phone"
          />
        </FormControl>
        {formik.touched.phone && formik.errors.phone ? (
          <div style={{ color: "red" }}>{formik.errors.phone}</div>
        ) : null}

        <br />
        <div className={classes.orderComponentFooter}>
          <OrderButton type={"submit"} totalPrice={cart.totalPrice} />
        </div>
      </form>
    </div>
  );
}
