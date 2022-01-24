import { gql, useMutation } from '@apollo/client';
import React from 'react';
import useForm from '../hooks/useForm';
import { useRouter } from 'next/router';
import { ALL_COURSES_QUERY } from './Courses';

const CREATE_COURSE_MUTATION = gql`
  mutation createCourse(
    $name: String!
    $description: String!
    $status: String!
    $price: Int!
    $image: Upload
  ) {
    createCourse(
      data: {
        name: $name
        description: $description
        status: $status
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function CreateCourse() {
  const router = useRouter();
  const { inputs, handleChange, resetForm } = useForm({
    name: 'Vue Course',
    description: 'This is a course about Vue',
    status: 'PUBLISHED',
    price: 1000,
    image: '',
  });

  const [createCourse, { data, loading, error }] = useMutation(CREATE_COURSE_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_COURSES_QUERY }],
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await createCourse();
    resetForm();
    router.push({
      pathname: `/course/${res.data.createCourse.id}`,
    });
  };
  return (
    <form onSubmit={onSubmit}>
      {error && <p>{error.message}</p>}
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="image">
        Image
        <input type="file" name="image" id="image" onChange={handleChange} />
      </label>

      <label htmlFor="status">
        Status
        <select
          name="status"
          id="status"
          name="status"
          value={inputs.status}
          onChange={handleChange}
        >
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </label>

      <label htmlFor="description">
        Description
        <textarea
          name="description"
          id="description"
          placeholder="Name"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Course</button>
    </form>
  );
}
