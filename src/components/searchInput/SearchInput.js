import css from './SearchInput.module.css';
export const SearchInput = () => {
  return (
    <div className={css.Search__container}>
      <p className={css.Search__title}>Search contact by name</p>
      <input type="text" className={css.Search__input}></input>
    </div>
  );
};
