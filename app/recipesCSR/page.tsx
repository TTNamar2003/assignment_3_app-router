"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Recipe {
  id: number;
  name: string;
  prepTimeMinutes: number;
  servings: number;
}


const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const TableHead = styled.thead`
  background: #6c5ce7;
  color: blue;
`;

const TableRow = styled.tr`
  background: #f8f9fa;
`;

const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

export default function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=10")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <Container>
      <Title>Recipes</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Prep Time (min)</TableHeader>
            <TableHeader>Servings</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {recipes.map((recipe) => (
            <TableRow key={recipe.id}>
              <TableCell>{recipe.id}</TableCell>
              <TableCell>{recipe.name}</TableCell>
              <TableCell>{recipe.prepTimeMinutes}</TableCell>
              <TableCell>{recipe.servings}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
