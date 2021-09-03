import React from "react";
import SearchPresenter from "./SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: true,
    error: null,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm != "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const movieResults = await this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
