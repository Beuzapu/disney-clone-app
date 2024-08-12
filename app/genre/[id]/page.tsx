import { Button } from '@/components/ui/button';
import React from 'react'
type Props = {
    params: {
        id: string;
    };
    searchParams:{
        genre: string;
    };
};

function GenrePage({params: {id}, searchParams: {genre}} : Props) {
  return (
    <><div className="">Welcome to the genre with ID: {id} and name: {genre}</div>
    <Button>Click me</Button></>
  )
}

export default GenrePage