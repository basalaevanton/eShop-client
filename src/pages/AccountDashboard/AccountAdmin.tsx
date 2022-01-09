import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useActions } from '../../hooks';
import {
  Category,
  Color,
  IProduct,
  Size,
} from '../../interfaces/product.interface';
import { AccLayout, withAppLayout } from '../../layout/';

const AccountAdmin = () => {
  const [product, setProduct] = useState<IProduct>({
    name: '',
    category: '',
    size: '',
    color: '',
    price: 0,
    image: '',
  });
  const { addNewProduct } = useActions();

  const formData = new FormData();
  formData.append('name', product.name);
  formData.append('category', product.category);
  formData.append('size', product.size);
  formData.append('color', product.color);
  formData.append('price', product.price.toString());
  formData.append('image', product.image);

  const sendProduct = async () => {
    await axios.post('http://localhost:5000/products', formData);
    // addNewProduct(product);
  };

  return (
    <>
      <AccLayout>
        <Card>
          <Card.Body>
            <Card.Title>Add new product to shop.</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="forNameProduct">
                <Form.Label>Name Product</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Category">
                <Form.Label>Category product</Form.Label>
                <Form.Select
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  {Category.map((cat, id) => (
                    <option key={id}>{cat}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Size">
                <Form.Label>Size product</Form.Label>
                <Form.Select
                  value={product.size}
                  onChange={(e) =>
                    setProduct({ ...product, size: e.target.value })
                  }
                >
                  {Size.map((size, id) => (
                    <option key={id}>{size}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Color">
                <Form.Label>Color product</Form.Label>
                <Form.Select
                  value={product.color}
                  onChange={(e) =>
                    setProduct({ ...product, color: e.target.value })
                  }
                >
                  {Color.map((color, id) => (
                    <option key={id}>{color}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="forPriceProduct">
                <Form.Label>Price Product</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="price"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: Number(e.target.value) })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Picture of product </Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setProduct({
                      ...product,
                      image: (e.target as HTMLInputElement)?.files?.[0],
                    })
                  }
                />
              </Form.Group>
            </Form>
            <Button variant="main" onClick={sendProduct}>
              Save
            </Button>
          </Card.Body>
        </Card>
      </AccLayout>
    </>
  );
};

export default withAppLayout(AccountAdmin);
