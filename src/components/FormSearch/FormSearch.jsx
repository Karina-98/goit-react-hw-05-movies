
import { toast } from "react-hot-toast";
import { ButtonSearch, SearchForm, SearchInput } from "./FormSearch.styled";


 const FormSearch = ({fetchSearchMovie}) => {


    const handleInputChange = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    console.log(query)
    if (!query) {
      toast.error('Please enter something');
      return;
    }
      
      
     fetchSearchMovie(query);
     event.target.reset();

    };
  
   
  
    return (<>
      <SearchForm onSubmit={handleInputChange}>
        <SearchInput
          type="text"
          name="query"
        />
        <ButtonSearch type="submit" >Search</ButtonSearch>
      </SearchForm>
      {/* {notWrite && <p>Please something wrong</p>}</> */} </>
    );
}



  export default FormSearch;