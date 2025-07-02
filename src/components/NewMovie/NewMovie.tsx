import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';
type Props = {
  onSubmit: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onSubmit }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImageUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImbdId] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ title, description, imgUrl, imdbUrl, imdbId });
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        defaultValue=""
        onChange={value => setTitle(value)}
      />

      <TextField
        name="description"
        label="Description"
        defaultValue=""
        onChange={value => setDescription(value)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        defaultValue=""
        onChange={value => setImageUrl(value)}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        defaultValue=""
        onChange={value => setImdbUrl(value)}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        defaultValue=""
        onChange={value => setImbdId(value)}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
