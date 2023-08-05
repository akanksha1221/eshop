import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { Link, redirect, useNavigate } from "react-router-dom";
import { register } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // const productLogin = useSelector((state) => state.productLogin);
  // const { productInfo } = productLogin;

  useEffect(() => {
    // if (productInfo && userInfo.isAdmin) {
    //   dispatch(listProducts());
    // } else {
    //   navigate("/login");
    // }
    dispatch(listProducts());
  }, [dispatch]);

  const deleteHandler = (id) => {
    console.log("delete");
  };

  return (
    <>
      <h1>products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <td>Name</td>
              <td>Product</td>
              <td>Brand</td>
              <td>InStock</td>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td> <img src={product.image} style={{width:"100px"}} alt="img" className="card--image"/></td>
                  <td>
                    {product.brand}
                  </td>
                  <td>
                    {product.countInStock>0 ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fa fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  {/* <td>
                    <LinkContainer to={`/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fa fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={deleteHandler(product._id)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
