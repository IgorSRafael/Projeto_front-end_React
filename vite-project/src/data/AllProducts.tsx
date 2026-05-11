import pizzaImg from "../assets/chad-montano-MqT0asuoIcU-unsplash.jpg"
import barbecueImg from "../assets/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import pastaImg from "../assets/emanuel-ekstrom-KJOUnsGXq58-unsplash.jpg"

export const products = [
  {
    id: 1,
    name: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    image: pizzaImg,
    quantity: 1
  },
  {
    id: 2,
    name: 'Churrasquinho',
    description: 'Delicioso espetinho à moda da (sua) casa.',
    price: 29.90,
    image: barbecueImg,
    quantity: 1
  },
  {
    id: 3,
    name: 'Espaguete',
    description: 'Apetitoso macarrão. Basta seguir a receita.',
    price: 59.90,
    image: pastaImg,
    quantity: 1
  }
]