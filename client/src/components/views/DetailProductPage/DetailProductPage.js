import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";

import axios from "axios";
import { Row, Col } from "antd";

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 4rem;
`;

const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

function DetailProductPage(props) {
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Wrapper>
      <ProductNameWrapper>
        <h1>{Product.title}</h1>
      </ProductNameWrapper>
      <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
          <ProductImage detail={Product} />
        </Col>
        <Col lg={12} sm={24}>
          <ProductInfo detail={Product} />
        </Col>
      </Row>
    </Wrapper>
  );
}

export default DetailProductPage;
