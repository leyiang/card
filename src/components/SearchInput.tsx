import Search, { SearchProps } from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";

interface ISearchInput {
    inputValue?: string;
}

export function SearchInput({ inputValue = "" }: ISearchInput ) {
    const navigate = useNavigate();

    const onSearch: SearchProps['onSearch'] = (value) => {
        navigate("/search?v=" + value);
    }

    return (
        <Search
            className="w-[200px]"
            placeholder="Search card here"
            onSearch={onSearch}
            defaultValue={ inputValue }
        />
    )
}